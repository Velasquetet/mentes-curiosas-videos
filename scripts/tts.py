"""Voz de Ximena (es-ES-XimenaNeural) con Azure Speech (plan gratuito F0).
Lee tts/<nombre>.txt y crea tts/<nombre>.wav + tts/<nombre>.words.json (tiempo de cada palabra).
La clave se lee del secreto AZURE_SPEECH_KEY (nunca se escribe en el repositorio)."""
import os, sys, json, pathlib
import azure.cognitiveservices.speech as sdk
KEY = os.environ["AZURE_SPEECH_KEY"]; REGION = os.environ.get("AZURE_SPEECH_REGION") or "westeurope"
VOICE = "es-ES-XimenaNeural"
def gen(txt_path):
    p = pathlib.Path(txt_path); text = p.read_text(encoding="utf-8").strip()
    cfg = sdk.SpeechConfig(subscription=KEY, region=REGION)
    cfg.speech_synthesis_voice_name = VOICE
    cfg.set_speech_synthesis_output_format(sdk.SpeechSynthesisOutputFormat.Riff48Khz16BitMonoPcm)
    out = p.with_suffix(".wav")
    syn = sdk.SpeechSynthesizer(speech_config=cfg, audio_config=sdk.audio.AudioOutputConfig(filename=str(out)))
    words = []
    def on_word(e):
        if e.boundary_type == sdk.SpeechSynthesisBoundaryType.Word:
            words.append({"t": e.audio_offset / 1e7, "d": e.duration.total_seconds(), "w": e.text})
    syn.synthesis_word_boundary.connect(on_word)
    r = syn.speak_text_async(text).get()
    if r.reason != sdk.ResultReason.SynthesizingAudioCompleted:
        d = r.cancellation_details
        raise SystemExit(f"Error de síntesis: {r.reason} {d.reason if d else ''} {d.error_details if d else ''}")
    p.with_suffix(".words.json").write_text(json.dumps(words, ensure_ascii=False, indent=0), encoding="utf-8")
    print(out, len(words), "palabras")
for a in sys.argv[1:]: gen(a)

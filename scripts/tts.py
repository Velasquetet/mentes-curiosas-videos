"""Genera voz con Ximena (es-ES-XimenaNeural) + tiempos por palabra para subtítulos."""
import asyncio, json, sys, pathlib, edge_tts
VOICE = "es-ES-XimenaNeural"
async def gen(txt_path):
    p = pathlib.Path(txt_path); text = p.read_text(encoding="utf-8").strip()
    out = p.with_suffix(".mp3"); words = []
    com = edge_tts.Communicate(text, VOICE, boundary="WordBoundary")
    with open(out, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio": f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                words.append({"t": ch["offset"] / 1e7, "d": ch["duration"] / 1e7, "w": ch["text"]})
    p.with_suffix(".words.json").write_text(json.dumps(words, ensure_ascii=False, indent=0), encoding="utf-8")
    print(out, len(words))
for a in sys.argv[1:]: asyncio.run(gen(a))

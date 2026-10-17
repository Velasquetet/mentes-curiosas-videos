#!/bin/sh
# une escenas + titulares y construye render.html
cd "$(dirname "$0")" && python3 hl.py >/dev/null && cat escenas.js hl.js > scenes.js && python3 ../../motor/build.py .

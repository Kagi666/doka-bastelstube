import json
from datetime import datetime, timezone

# Platzhalter: Hier kommt die Auswertung der AAtracker-Daten hinein.
# Die Action erzeugt weiterhin eine gültige status.json.
with open("status.json", "r", encoding="utf-8") as f:
    data = json.load(f)

data["updated"] = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

with open("status.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write("\n")

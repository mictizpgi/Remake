#!/usr/bin/env python3
"""Compare the numbers on an original case study page with its new content file.
usage: python3 -I scripts/check-study.py <slug>
MISSING = in the original page but not in the content file (must be 0).
ADDED   = in the content file but not in the original (must be 0 unless it is a chart width or a date)."""
import re, sys, os, html
slug = sys.argv[1]
here = os.path.dirname(os.path.abspath(__file__))
orig_path = os.path.join(here, "..", "..", "live", "case-studies", slug + ".html")
new_path = os.path.join(here, "..", "src", "content", "studies", slug + ".ts")
o = open(orig_path, encoding="utf-8").read()
main = o[o.index("<main>"):o.index("</main>")]
# drop the shared closing call-to-action band, which lives in the site layout, not the study
main = re.sub(r'<section class="cta".*?</section>', "", main, flags=re.S)
# step labels like "01 · Situation" are numbering, not data
main = re.sub(r'<p class="case-step">.*?</p>', "", main, flags=re.S)
otext = html.unescape(re.sub(r"<[^>]+>", " ", main))
n = open(new_path, encoding="utf-8").read()
# drop layout-only numbers (bar widths, decimal places) and dates/paths, keep everything else on the line
n = re.sub(r"\b(width|decimals)\s*:\s*[\d.]+", "", n)
n = re.sub(r"\b(datePublished|dateModified|slug|image|src)\s*:\s*\"[^\"]*\"", "", n)
WORDS = {"one":"1","two":"2","three":"3","four":"4","five":"5","six":"6","seven":"7","eight":"8","nine":"9","ten":"10","eleven":"11","twelve":"12","half":"50","a dozen":"12"}
def words_to_digits(t):
    for w, d in WORDS.items():
        t = re.sub(r"\b" + w + r"\b", d, t, flags=re.I)
    return t
NUM = re.compile(r"(?<![\w.])\d[\d,]*(?:\.\d+)?")
def nums(t):
    out = set()
    for m in NUM.findall(t):
        v = m.replace(",", "").rstrip(".")
        if v: out.add(v.lstrip("0") or "0")
    return out
a, b = nums(words_to_digits(otext)), nums(words_to_digits(n))
missing, added = sorted(a - b, key=float), sorted(b - a, key=float)
print(f"{slug}: original has {len(a)} distinct numbers")
print("MISSING:", missing or "none")
print("ADDED:  ", added or "none")
sys.exit(1 if missing else 0)

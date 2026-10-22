# CONM 1200 — Study Site

A study site for Building Construction (CONM 1200). **Exam 2** (foundations and
concrete, Weeks 4–7) is the main content; the Exam 1 material is kept as a
review section.

## Putting it on GitHub Pages

1. Open your repository on GitHub and click **Add file → Upload files**.
2. Drag in **all** of these files, keeping them at the top level — no folder:
   - `index.html` · `foundations.html` · `concrete.html` · `placing.html`
   - `glossary.html` · `quiz.html` · `review.html`
   - `topics.html` · `calc.html`
   - `style.css` · `app.js` · `README.md` (optional)
3. Commit the upload. If you're updating an existing repo, GitHub will ask to
   overwrite the files that already exist — say yes.
4. **Settings → Pages**: Source = *Deploy from a branch*, branch **main**,
   folder **/ (root)**. Save.
5. A minute or two later the site is live at
   `https://<your-username>.github.io/<repo-name>/`

All files must sit next to each other at the root — the pages link to
`style.css` and `app.js` by relative path.

## What's in it

### Exam 2 (Weeks 4–7)

| File | What it is |
|---|---|
| `index.html` | Home — study plan, numbers to memorize, the footing formula, the four things people mix up |
| `foundations.html` | Week 4 — shallow vs. deep, footing types, **footing sizing calculator + practice generator**, piles, pile drivers, pile caps, load testing, reading a pile driving log |
| `concrete.html` | Week 5 — characteristics, Portland cement and the five types, aggregates, the four admixtures, reinforcing patterns, formwork, Lab 3 |
| `placing.html` | Weeks 6–7 — mixing, transporting, segregation, consolidating, slab on grade, the finishing timeline, the four joints, walls, columns, elevated slabs, re-shoring, curing. Includes **four drag-to-order step drills** |
| `glossary.html` | 105 terms grouped by topic, searchable, with flashcards. Exam 1 terms can be switched on |
| `quiz.html` | 175-question practice test — multiple choice, true/false, fill-ins, matching, sequencing and calculations, all with explanations |

### Exam 1 (kept for review)

| File | What it is |
|---|---|
| `review.html` | Hub — the **five bridges** where Exam 1 material directly explains Exam 2 material |
| `topics.html` | The full nine topics from Exam 1 |
| `calc.html` | Zoning math — FAR, Open Space Ratio, lot coverage |

Everything runs client-side. No build step, no dependencies, nothing is sent
anywhere. Checkbox progress and the light/dark setting are remembered in the
browser.

## Sources

Built from the Week 4 Lecture (Shallow &amp; Deep Foundations), Week 5
(Concrete Ingredients &amp; Details of Reinforcing), Week 6 (Mixing,
Transporting &amp; Placing Concrete), Week 7 (Placing, Finishing &amp; Curing
Concrete), the Curing Concrete handout, the Sample Pile Driving Log, the Lab 3
post-lab example, and the course syllabus (Mehta Ch. 12, 21, 22, 23).

### One correction worth knowing

The Week 4 class example divides a 60,000 lb column load by 440 psf. The answer
slide shows **136.27 sf** and then takes the square root of **136.37** — both
slips; the correct value is **136.36 sf**. His final answer, **11.68 ft square**,
is right either way. The site teaches the correct arithmetic and flags the
discrepancy so it isn't confusing if the answer key says otherwise.

# CONM 1200 — Study Site

Study site for Building Construction (CONM 1200), built around Prof.
D'Agostino's **Exam 2 study guide** (exam date Monday, October 26, 2026).
The Exam 1 material is kept as a review section.

## Putting it on GitHub Pages

1. Repo → **Add file → Upload files**.
2. Drag in **all 14 files**, at the **top level** — no folder:

```
index.html        foundations.html   concrete.html      placing.html
formwork.html     written.html       glossary.html      quiz.html
review.html       topics.html        calc.html
style.css         app.js             README.md
```

3. Commit. Accept the overwrite prompts for files that already exist.
4. **Settings → Pages**: Source = *Deploy from a branch*, branch **main**,
   folder **/ (root)**.
5. Live at `https://<username>.github.io/<repo>/` after a minute or two.

> **If the site shows only the README**, there is no `index.html` at the root of
> what Pages is publishing — usually because the files went into a subfolder, or
> because a download was saved as `index_2.html`. All names must be exactly as
> listed above, lowercase, with no `_2` suffix.

## Structure — mapped to the study guide

| Guide section | Page |
|---|---|
| 1. Foundations and Soil Conditions | `foundations.html` |
| 2. Concrete Materials and Properties | `concrete.html` |
| 3. Concrete Reinforcement | `concrete.html#reinforcing` |
| 4. Concrete Mixing and Placement | `placing.html` |
| 5. Concrete Slabs and Finishing | `placing.html#sog` |
| 6. Concrete Formwork (incl. **SYMONS**) | `formwork.html` |
| 7. Written Response Preparation | `written.html` ★ |

Supporting pages: `index.html` (hub, study plan, numbers, formula),
`glossary.html` (123 terms, searchable, flashcards), `quiz.html`
(209 auto-graded questions plus 5 self-graded written responses),
`review.html` / `topics.html` / `calc.html` (Exam 1 material).

Everything runs client-side — no build step, no dependencies. Checkbox progress
and the light/dark setting are remembered in the browser.

## Two things to check against the course materials

**1 · SYMONS.** The guide lists "components of a SYMONS forming system" as both a
topic bullet and a written-response question, but SYMONS was covered in **Lab 6**,
whose handout wasn't among the materials available. The component names on
`formwork.html` and in written response 5 come from **Dayton Superior's own
Steel-Ply documentation** — they manufacture the system, so the terminology is
standard — but the lab handout is what the exam will be graded against. Worth a two-minute comparison if that handout is available.

- [Symons Steel-Ply brochure (Dayton Superior)](https://www.edconline.com/wp-content/uploads/2019/04/symons-forming-steel-ply-brochure.pdf)
- [Steel-Ply Quick Install Guide](https://www.daytonsuperior.com/docs/default-source/application-guides/steel-ply-quick-install-guide.pdf)

**2 · An arithmetic slip on his answer slide.** The Week 4 class example divides a
60,000 lb column load by 440 psf. His answer slide shows **136.27 sf** and then
takes the root of **136.37** — the correct value is **136.36 sf**. His final
answer, **11.68 ft square**, is right either way. The site teaches the correct
arithmetic and flags the discrepancy so the answer key isn't confusing.

## Sources

Prof. D'Agostino's Exam 2 study guide; Week 4 (Shallow & Deep Foundations),
Week 5 (Concrete Ingredients & Details of Reinforcing), Week 6 (Mixing,
Transporting & Placing Concrete) and Week 7 (Placing, Finishing & Curing
Concrete) lecture packages; the Curing Concrete handout; the Sample Pile Driving
Log; the Lab 3 post-lab example; and the course syllabus (Mehta Ch. 12, 21, 22, 23).

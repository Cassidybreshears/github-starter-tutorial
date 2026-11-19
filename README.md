# With The Assist — Personal Research Dashboard

A static, single-page research dashboard built from the five Milanote research exports:

- `Step 1 AI Territory Pitch + Board Critique` → **Territory Pitch**
- `step 2 Build Your ai+design studio Command Center` → **Inquiry Brief**, **Experiment Log**, **Prompts & Tools**, **Workspace Links**
- `step 3 Research Map + Information Interactions` → **Sources & Notes**
- `Effects` → **Effects Library** (63 effects, searchable and filterable by difficulty)
- `evidence` → **Reference Images** (23 locally-hosted captures with lightbox)

The research question is pinned to the top of every view.

## Files

```
index.html      markup and all research content
style.css       design system, layout, responsive rules
app.js          navigation, effects filtering, gallery lightbox, copy buttons
assets/img/     23 downloaded evidence screenshots (self-contained, no external image calls)
```

No build step, no dependencies, no framework. Everything runs from relative paths.

## Publish to GitHub Pages

1. Create a GitHub repo from the course tutorial (`github-starter-tutorial`) and clone it with GitHub Desktop.
2. Copy these files into the repo root so `index.html` sits at the top level.
3. Commit and push to `main`.
4. In the repo, go to **Settings → Pages → Build and deployment**.
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)** → Save
5. Wait ~1–2 minutes, then copy the live `https://<username>.github.io/<repo>/` URL from the Pages banner and paste it into the Canvas submission box.

## Local preview

Open `index.html` in a browser, or run any static server from this folder, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Editing content

All written research content lives directly in `index.html` (search for the section headings). The effects catalogue and gallery data are arrays at the top of `app.js`. The one thing to update after publishing is the live dashboard URL in **Workspace Links** — add it there if you want the dashboard to link to itself.

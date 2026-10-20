# Wedding Invitation Template

A static, dependency-free wedding invitation website: envelope-open intro, hero, invite message, story photos, venue, day-by-day schedule, falling petals and optional music. All personal details are **placeholders**. Nothing to build, no framework.

## Edit it

Open `config.js`. Everything on the page (names, parents, date, venue, schedule, links, photos, music) is controlled from that one file.

- Replace every `[Bracketed Text]` with your own details.
- Add or remove events in `schedule.days`.
- Set `secondVenue.enabled` to `false` to hide the second venue block.
- Leave an image path as `""` to keep the dashed placeholder box. To use a photo, drop it in an `images/` folder and set e.g. `hero: "images/hero.png"`.
- Add background music with `music.src: "audio/song.mp3"`. Leave it `""` to hide the music button.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Publish with GitHub Pages

1. Push these files to the repo root.
2. Repo **Settings -> Pages -> Deploy from a branch -> `main` / root**.
3. Your invitation will be live at `https://<username>.github.io/<repo>/`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Look and feel (colours and fonts are CSS variables at the top) |
| `config.js` | All the content you edit |
| `script.js` | Renders config, envelope, reveal animations, petals, music |

Fonts (Cormorant Infant, Cormorant SC, Montserrat) load from Google Fonts.

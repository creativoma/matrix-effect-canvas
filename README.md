# Matrix Effect with Canvas

The classic Matrix digital rain, drawn on an HTML `<canvas>` with vanilla JavaScript. No dependencies, no build step.

## Run it

Open `index.html` in your browser, or serve the folder:

```bash
npx serve .
```

## Files

| File         | What it does                          |
| ------------ | ------------------------------------- |
| `index.html` | Markup and the canvas element         |
| `styles.css` | Full-screen, black background         |
| `script.js`  | The rain animation loop               |

## Tweaking

All the knobs live in `script.js`:

- `FONT_SIZE` — column width and fall speed
- `#0001` fill — trail fade (higher alpha = shorter trails)
- `#0f0` fill — glyph color
- `setInterval(matrix, 50)` — frame delay in ms

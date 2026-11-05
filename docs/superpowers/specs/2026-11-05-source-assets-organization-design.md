# Source assets organization design

## Scope

Organize the six Chinese-named source files at the repository root without
changing game behavior, application code, or file contents.

## File layout

Move the five source images to `assets/reference-images/` and rename them:

- `密闭空间1.png` to `confined-space-1.png`
- `密闭空间2.png` to `confined-space-2.png`
- `教室.jpg` to `classroom.jpg`
- `商场.png` to `mall.png`
- `家.png` to `home.png`

Move the supporting Word document to
`docs/reference/art-style-and-game-mechanics.docx`.

## Compatibility

The game uses the existing English-named images under `assets/scenes/` and
`assets/covers/`; repository search found no code references to the six source
paths. Therefore no HTML, JavaScript, CSS, or runtime asset paths will change.
Existing uncommitted content changes in the Word document are preserved during
the move.

## Verification

After the moves, search the repository for each former path, inspect the Git
status for only the expected renames plus this design record, and review the
static site files for any unexpected modification.

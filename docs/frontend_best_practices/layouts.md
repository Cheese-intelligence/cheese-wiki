# Layouts

## Main structure:

Here is how to create simple and consistent layouts:

1. Start with `ScreenLayout` (use snippet `page`)
2. Choose either `MainFixedScreenLayout` or `MainScrollableLayout` and place main content there. You can also pass className to position elements.
3. Add extra layouts to position buttons, bgs, etc 

## Additional useful layouts

- `BackgroundLayout` - Positions a component (e.g., an image) in the background of the screen.
- `KeyboardAvoidingButtonLayout` - A layout that pins buttons to the bottom of the screen and avoids the on-screen keyboard.
- `Spacer` - Renders an empty `View` to create a specific amount of vertical space in the layout
- `TopButtonLayoutSpacer` - A `Spacer` with a fixed height of `48dp`.
- `TopButtonLayout` - Pins buttons to the top of the screen.
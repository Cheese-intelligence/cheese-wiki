# Cheese Intelligence Wiki

An advanced knowledge platform for all things cheese, built with [Docusaurus](https://docusaurus.io/).

## Quick Start

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start development server:**
   ```bash
   bun run start
   ```

3. **Add your intelligence:**
   - Drop markdown files into the `docs/` folder
   - Docusaurus will automatically generate navigation and pages
   - Your content will be live-reloaded as you edit

## Adding Intelligence

Simply create markdown files in the `docs/` folder:

```
docs/
├── intro.md                    # Homepage content
├── cheese-types/
│   ├── cheddar.md             # /docs/cheese-types/cheddar
│   └── brie.md                # /docs/cheese-types/brie
└── recipes/
    └── mac-and-cheese.md      # /docs/recipes/mac-and-cheese
```

## Commands

- `bun run start` - Start development server (with hot reload)
- `bun run build` - Build for production
- `bun run serve` - Preview production build locally

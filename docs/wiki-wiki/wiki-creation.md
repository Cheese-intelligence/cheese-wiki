# Wiki creation

## Creating files

Put your markdown file into `docs/` and it will automatically appear on the website

## Create category

If you want to create category - create folder and add `_category_.json` file, with content:

```json
{
  "label": "Your header here",
  "link": {
    "type": "generated-index",
    "description": "Your description here"
  }
}
```

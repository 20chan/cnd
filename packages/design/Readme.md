# @cnd.sh/design

## Setup

To use `cn()` with tailwindcss intellisense clsx + tailwind-merge, add following to vscode settings.json ([clsx ref](https://github.com/lukeed/clsx#tailwind-support))

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

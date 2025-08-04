---
sidebar_position: 1
---

# Our Color System

To keep our app's look consistent, we use a central color system. Think of it as our paint palette.

### Color Variables

We define all our colors in one place: `global.css`. We use simple CSS variables to do this. This makes it super easy to change our color scheme later without having to hunt down hex codes in every single file.

Here's what it looks like:

```css
/* global.css */

@layer base {
    :root {
        --background: 0% 0% 0%; /* HSL because CSS has skill issues with HEX colors */
        --foreground: 0 0% 25%;
        --primary: 0 0% 44%;
        --muted: 0 0% 85%;
    }
}
```

```js
/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
  plugins: [],
};
```

### How to Use Them

When you need to use a color in a component, just grab the right Tailwind utility class. No need for ugly hex codes in your component files!

```tsx
// Example: app/components/ui/Button.tsx

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity className="bg-primary rounded-md p-4">
      <Text className="text-primary-foreground">Click me</Text>
    </TouchableOpacity>
  );
};

export default Button;
```
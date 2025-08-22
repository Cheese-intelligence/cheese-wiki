---
sidebar_position: 3
---

# Iconography

For icons, we use [`react-native-lucide`](https://lucide.dev/guide/packages/lucide-react-native), which provides a comprehensive set of icons that are easy to use and customize.

### Usage

To use an icon, import it from `lucide-react-native` and then use it as a component. You can customize the size, color, and stroke width of the icons.

```tsx
import { BellRing } from 'lucide-react-native';

const MyComponent = () => {
  return <BellRing color="red" size={48} />;
};

export default MyComponent;
```

### Best Practices

- **Consistency:** Use a consistent set of icons throughout the application.
- **Clarity:** Choose icons that are easily recognizable and clearly represent the action or item they are associated with.
- **Customization:** Use the `color`, `size`, and `strokeWidth` props to customize the icons to match the application's design system.

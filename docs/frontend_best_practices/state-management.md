---
sidebar_position: 3
---

# State Management

To share data across unrelated components, we use a global state manager. This avoids inefficient, repetitive API calls and ensures the UI stays consistent when data is updated.

Our approach is simple:
1.  **Fetch data once** (e.g., on app load).
2.  **Place it in a central store.**
3.  **Components read from the store.**
4.  **Update the store once,** and all components update automatically.

### Zustand

We use **Zustand** for its simplicity and minimal boilerplate. It provides global state management through a single, simple hook.

#### Example Usage

First, define the store and its actions in `app/_hooks/useAppStore.ts`:

```typescript
// app/_hooks/useAppStore.ts
import { create } from 'zustand';

interface AppState {
  account: { name: string; email: string } | null;
  setAccount: (account: { name: string; email: string }) => void;
}

export const useAppStore = create<AppState>((set) => ({
  account: null,
  setAccount: (account) => set({ account }),
}));
```

Then, use the hook in any component. The component will only re-render when the selected state changes.

```tsx
// app/_components/ui/Header.tsx
import { useAppStore } from '../../_hooks/useAppStore';

const Header = () => {
  const account = useAppStore((state) => state.account);
  return <Text>Welcome, {account?.name ?? 'Guest'}</Text>;
};
```

---
sidebar_position: 1
---

# How Routing Works

Our app uses a file-based routing system, which means the structure of our files and folders directly defines the navigation of our app. This makes creating new screens simple and intuitive.

### The `app` Directory

This is the heart of our navigation. Every file you create inside the `app` directory automatically becomes a route in the app.

*   **`app/index.tsx`** is the home screen of our app.
*   **`app/profile.tsx`** creates a new screen accessible at the `/profile` path.
*   **`app/settings/notifications.tsx`** creates a nested screen at `/settings/notifications`.

### Layouts

Layouts are special files that allow you to define a shared UI structure for a group of screens. For example, you can use a layout to add a consistent header and footer to every screen in a particular section of your app.

Layout files are named `_layout.tsx`. The layout will apply to all sibling routes in the same directory.

### Private Routes

As mentioned in our folder principles, any file or folder prefixed with an underscore (`_`) will be ignored by the router. This is how we create "private" folders for things like hooks or utility files that shouldn't be treated as screens.

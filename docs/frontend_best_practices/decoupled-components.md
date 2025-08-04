---
sidebar_position: 2
---

# Building Reusable Components

We like to build our components like LEGO bricks. They should be independent and reusable, so you can snap them into place anywhere you need them. This means a component shouldn't care about *where* it's being used. It just does its one job very well.

### Example: The StoryProgressBar

A great example of this is our `StoryProgressBar`. It just needs to know the current slide and the total number of slides. It doesn't care about the actual story content, which means you could reuse this progress bar for anything, not just stories!

```tsx
// app/components/stories/StoryProgressBar.tsx

import React from 'react';
import { View } from 'react-native';

interface StoryProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

const StoryProgressBar: React.FC<StoryProgressBarProps> = ({ currentSlide, totalSlides }) => {
  const bars = Array(totalSlides).fill(0);

  return (
    <View className="flex-row w-full">
      {bars.map((_, i) => (
        <View
          key={i}
          className={`flex-1 h-[5px] mx-0.5 rounded-full ${
            i < currentSlide ? 'bg-primary' : 'bg-muted'
          }`}
        />
      ))}
    </View>
  );
};

export default StoryProgressBar;
```

Building components this way makes our code cleaner, easier to understand, and way less of a headache to work with in the long run.
import type { Preview } from "@storybook/react";
import '../src/index.css'


import { withThemeByClassName } from "@storybook/addon-themes";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          coding: 'coding',
          light: 'light',
          dark: 'dark',
      },
      defaultTheme: 'dark',
  })]
};

export default preview;

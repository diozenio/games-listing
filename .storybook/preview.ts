import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { type Preview } from "@storybook/react";
import "../src/ui/styles/globals.css";
import "@radix-ui/themes/styles.css";

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
  globalTypes: {
    darkMode: {
      defaultValue: true,
    },
    className: {
      defaultValue: "custom-classname",
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

export default preview;

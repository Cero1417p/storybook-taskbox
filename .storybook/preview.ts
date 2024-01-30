import type { Preview } from "@storybook/react";
import '../src/index.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();
export const decorators = [mswDecorator];
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
};

export default preview;

import type { Preview } from '@storybook/react-vite'

// Import design tokens
import '../src/tokens/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'gray', value: '#F5F5F5' },
        { name: 'dark', value: '#1A1A1A' },
      ],
    },
  },
};

export default preview;
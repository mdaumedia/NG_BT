import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }, { name: 'dark', value: '#1b1f24' }]
    }
  }
};

export default preview;

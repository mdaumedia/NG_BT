import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-designs'],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../src/assets']
};

export default config;

import type { Meta, StoryObj } from '@storybook/angular';
import { NgBtButtonComponent } from './button.component';

const meta: Meta<NgBtButtonComponent> = {
  title: 'Components/Button',
  component: NgBtButtonComponent,
  args: {
    label: 'Primary Action',
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/your-file-id/your-design'
    }
  }
};

export default meta;

type Story = StoryObj<NgBtButtonComponent>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    label: 'Secondary Action',
    variant: 'secondary'
  }
};

export const Outline: Story = {
  args: {
    label: 'Ghost Action',
    variant: 'outline-primary'
  }
};

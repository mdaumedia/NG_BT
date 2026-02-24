import type { Meta, StoryObj } from '@storybook/angular';
import { DsInputComponent } from './ds-input.component';

export default {
  title: 'Design System/DsInput',
  component: DsInputComponent,
  parameters: { design: { figmaExport: true } }
} as Meta<DsInputComponent>;

type Story = StoryObj<DsInputComponent>;
export const Default: Story = { args: { label: 'Email' } };
export const Required: Story = { args: { label: 'Email', required: true } };

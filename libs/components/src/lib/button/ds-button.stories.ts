import type { Meta, StoryObj } from '@storybook/angular';
import { DsButtonComponent } from './ds-button.component';

const meta: Meta<DsButtonComponent> = {
  title: 'Design System/DsButton',
  component: DsButtonComponent,
  parameters: {
    design: { figmaExport: true, tokensUsed: ['color.primary', 'spacing.md'] },
    dsMetadata: { category: 'components', states: ['default', 'hover', 'disabled'] }
  }
};
export default meta;
type Story = StoryObj<DsButtonComponent>;
export const Primary: Story = { args: { label: 'Primary', variant: 'primary' } };
export const Disabled: Story = { args: { label: 'Disabled', variant: 'primary', disabled: true } };

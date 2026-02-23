import type { Meta, StoryObj } from '@storybook/angular';
import { DsModalComponent } from './ds-modal.component';

export default {
  title: 'Design System/DsModal',
  component: DsModalComponent,
  parameters: { design: { figmaExport: true } }
} as Meta<DsModalComponent>;

type Story = StoryObj<DsModalComponent>;
export const Open: Story = { args: { title: 'Open modal', open: true } };
export const Closed: Story = { args: { title: 'Closed modal', open: false } };

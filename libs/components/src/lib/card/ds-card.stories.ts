import type { Meta, StoryObj } from '@storybook/angular';
import { DsCardComponent } from './ds-card.component';

export default {
  title: 'Design System/DsCard',
  component: DsCardComponent,
  parameters: { design: { figmaExport: true } }
} as Meta<DsCardComponent>;

type Story = StoryObj<DsCardComponent>;
export const Default: Story = { args: { heading: 'Card heading' } };

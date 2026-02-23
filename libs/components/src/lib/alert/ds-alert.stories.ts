import type { Meta, StoryObj } from '@storybook/angular';
import { DsAlertComponent } from './ds-alert.component';

export default {
  title: 'Design System/DsAlert',
  component: DsAlertComponent,
  parameters: { design: { figmaExport: true } }
} as Meta<DsAlertComponent>;

type Story = StoryObj<DsAlertComponent>;
export const Success: Story = { args: { variant: 'success', message: 'Success alert' } };
export const Warning: Story = { args: { variant: 'warning', message: 'Warning alert' } };
export const Danger: Story = { args: { variant: 'danger', message: 'Danger alert' } };

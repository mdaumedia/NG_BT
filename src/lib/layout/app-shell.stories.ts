import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AppShellComponent } from './app-shell.component';

const meta: Meta<AppShellComponent> = {
  title: 'Layout/App Shell',
  component: AppShellComponent,
  decorators: [
    moduleMetadata({
      imports: [AppShellComponent],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<AppShellComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <app-shell>
        <div top-status>
          <strong>System: Online</strong>
          <span style="margin-left: 1rem; color: #8d95a7;">Active alerts: 2</span>
        </div>
        <nav left-nav>
          <ul style="list-style: none; padding: 0; margin: 0; color: #c6ccda;">
            <li>Mission Control</li>
            <li>Fleet Overview</li>
            <li>Telemetry</li>
            <li>Audit Logs</li>
          </ul>
        </nav>
        <div primary-pane>
          <h2 style="margin-top: 0;">Primary pane</h2>
          <p>Live operations timeline, KPI widgets, and recent activity.</p>
        </div>
        <div secondary-pane>
          <h3 style="margin-top: 0;">Secondary pane</h3>
          <p>Contextual insights, risk scores, and quick actions.</p>
        </div>
        <div tertiary-pane>
          <h3 style="margin-top: 0;">Tertiary pane</h3>
          <p>Notes, notifications, and references.</p>
        </div>
      </app-shell>
    `,
  }),
};

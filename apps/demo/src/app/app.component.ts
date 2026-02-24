import { Component } from '@angular/core';
import {
  DsAlertComponent,
  DsButtonComponent,
  DsCardComponent,
  DsInputComponent,
  DsModalComponent
} from '@ng-bt/components';

@Component({
  selector: 'ngbt-demo-root',
  standalone: true,
  imports: [DsButtonComponent, DsInputComponent, DsAlertComponent, DsCardComponent, DsModalComponent],
  template: `
    <main class="container py-4 d-grid gap-4">
      <section>
        <h1>NG_BT Demo App</h1>
        <p class="text-muted mb-0">A simple playground for design system components.</p>
      </section>

      <section class="d-flex flex-wrap gap-2 align-items-center">
        <h2 class="h5 mb-0 me-3">Buttons</h2>
        <ds-button label="Primary" variant="primary"></ds-button>
        <ds-button label="Secondary" variant="secondary"></ds-button>
        <ds-button label="Success" variant="success"></ds-button>
        <ds-button label="Warning" variant="warning"></ds-button>
        <ds-button label="Danger" variant="danger"></ds-button>
      </section>

      <section>
        <h2 class="h5">UI options in this demo</h2>
        <ul class="mb-0">
          <li><strong>Button variants:</strong> primary, secondary, success, warning, danger</li>
          <li><strong>Input options:</strong> label, placeholder, required state</li>
          <li><strong>Alert variants:</strong> success, warning, danger</li>
          <li><strong>Card:</strong> heading with projected content</li>
          <li><strong>Modal:</strong> open state toggle with title and body content</li>
        </ul>
      </section>

      <section>
        <h2 class="h5">Form controls</h2>
        <div class="d-grid gap-3" style="max-width: 420px;">
          <ds-input label="Email" placeholder="name@example.com" [required]="true"></ds-input>
          <ds-input label="Project name" placeholder="NG_BT rollout"></ds-input>
        </div>
      </section>

      <section class="d-grid gap-2" style="max-width: 540px;">
        <h2 class="h5 mb-0">Alerts</h2>
        <ds-alert variant="success" message="Design tokens loaded successfully."></ds-alert>
        <ds-alert variant="warning" message="Using fallback theme variables for preview."></ds-alert>
        <ds-alert variant="danger" message="No production data is connected in demo mode."></ds-alert>
      </section>

      <section>
        <h2 class="h5">Card + modal preview</h2>
        <ds-card heading="Starter card">
          <p class="mb-2">Use this area to validate spacing, typography, and color pairing.</p>
          <ds-button label="Open modal" variant="secondary" (pressed)="modalOpen = true"></ds-button>
        </ds-card>
      </section>

      <ds-modal [open]="modalOpen" title="Demo modal">
        <p class="mb-3">This modal is intentionally static for quick visual verification.</p>
        <ds-button label="Close" variant="primary" (pressed)="modalOpen = false"></ds-button>
      </ds-modal>
    </main>
  `
})
export class DemoAppComponent {
  modalOpen = false;
}

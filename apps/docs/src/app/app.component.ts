import { Component } from '@angular/core';
import { DsButtonComponent, DsAlertComponent, DsCardComponent, DsInputComponent, DsModalComponent } from '@ng-bt/components';

@Component({
  selector: 'ngbt-docs-root',
  standalone: true,
  imports: [DsButtonComponent, DsAlertComponent, DsCardComponent, DsInputComponent, DsModalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly componentCatalog = [
    'DsButton', 'DsInput', 'DsModal', 'DsCard', 'DsAlert', 'DsDataTable'
  ];
  readonly apiTables = 'Auto-generated from *.meta.json at build time';
  readonly accessibilityChecklist = [
    'Keyboard support',
    'ARIA labels',
    'Contrast ratio validation',
    'Focus visible'
  ];
}

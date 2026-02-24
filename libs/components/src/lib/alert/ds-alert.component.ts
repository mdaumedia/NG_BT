import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export type DsAlertVariant = 'success' | 'warning' | 'danger';
@Component({ selector: 'ds-alert', standalone: true, templateUrl: './ds-alert.component.html', styleUrl: './ds-alert.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class DsAlertComponent { @Input() variant: DsAlertVariant = 'success'; @Input() message = ''; }

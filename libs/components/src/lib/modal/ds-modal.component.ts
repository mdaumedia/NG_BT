import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({ selector: 'ds-modal', standalone: true, templateUrl: './ds-modal.component.html', styleUrl: './ds-modal.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class DsModalComponent { @Input() title = 'Modal'; @Input() open = false; }

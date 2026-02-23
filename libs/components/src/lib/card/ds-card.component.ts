import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({ selector: 'ds-card', standalone: true, templateUrl: './ds-card.component.html', styleUrl: './ds-card.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class DsCardComponent { @Input() heading = ''; }

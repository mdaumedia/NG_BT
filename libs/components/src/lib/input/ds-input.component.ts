import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ds-input',
  standalone: true,
  templateUrl: './ds-input.component.html',
  styleUrl: './ds-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsInputComponent {
  @Input() label = 'Label';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() required = false;
}

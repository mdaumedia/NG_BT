import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type DsButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ds-button',
  standalone: true,
  templateUrl: './ds-button.component.html',
  styleUrl: './ds-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsButtonComponent {
  @Input() label = 'Button';
  @Input() variant: DsButtonVariant = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Output() readonly pressed = new EventEmitter<MouseEvent>();

  readonly metadata = {
    name: 'DsButton',
    category: 'components',
    tokensUsed: ['color.primary', 'spacing.md', 'radius.md', 'typography.weight.semibold'],
    variants: ['primary', 'secondary', 'success', 'warning', 'danger'],
    states: ['default', 'hover', 'focus', 'disabled'],
    props: [
      { name: 'label', type: 'string', required: true },
      { name: 'variant', type: 'DsButtonVariant' },
      { name: 'disabled', type: 'boolean' },
      { name: 'type', type: "'button' | 'submit'" }
    ],
    figmaExport: true as const
  };
}

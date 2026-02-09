import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbt-button',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class NgBtButtonComponent {
  @Input() label = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'outline-primary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get sizeClass(): string {
    if (this.size === 'sm') {
      return 'btn-sm';
    }

    if (this.size === 'lg') {
      return 'btn-lg';
    }

    return '';
  }
}

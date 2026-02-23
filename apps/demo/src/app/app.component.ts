import { Component } from '@angular/core';
import { DsButtonComponent } from '@ng-bt/components';

@Component({
  selector: 'ngbt-demo-root',
  standalone: true,
  imports: [DsButtonComponent],
  template: '<div class="p-4"><ds-button label="Demo sandbox"></ds-button></div>'
})
export class DemoAppComponent {}

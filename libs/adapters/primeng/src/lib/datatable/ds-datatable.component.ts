import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// PrimeNG imports are isolated to adapter layer.
import { TableModule } from 'primeng/table';

export interface DsDataTableColumn {
  key: string;
  header: string;
}

@Component({
  selector: 'ds-data-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './ds-datatable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsDataTableComponent {
  @Input() rows: Record<string, unknown>[] = [];
  @Input() columns: DsDataTableColumn[] = [];
  @Input() emptyStateLabel = 'No rows available';
}

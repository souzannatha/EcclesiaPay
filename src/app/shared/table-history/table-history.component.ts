import { Component } from '@angular/core';

@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.scss'],
})
export class TableHistoryComponent {
  month = [
    { month: 'Janeiro', payd: 'Sim', value: 50 },
    { month: 'Fevereiro', payd: 'Sim', value: 100 },
    { month: 'Março', payd: 'Não', value: 'Sem pagamento' },
    { month: 'Abril', payd: 'Sim', value: 200 },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  people = [
    {
      number: '01',
      name: 'Nathã',
      birthday: '21/06/2003',
      since: 'Agosto de 2020',
    },
    {
      number: '02',
      name: 'Leticya',
      birthday: '21/01/2004',
      since: 'Agosto de 2022',
    },
    {
      number: '03',
      name: 'Claudia',
      birthday: '21/06/1975',
      since: 'Agosto de 2010',
    },
    {
      number: '04',
      name: 'Mauricio',
      birthday: '21/06/1971',
      since: 'Agosto de 2011',
    },
  ];
}

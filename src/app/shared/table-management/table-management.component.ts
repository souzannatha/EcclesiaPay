import { Component } from '@angular/core';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.scss'],
})
export class TableManagementComponent {
  users = [
    {
      name: 'Nathã',
      email: 'souzanatha@gmail.com',
      status: 'ativo',
      lastTithe: '09/08/2024',
      actions: 'ícones aqui',
    },
    {
      name: 'Leticya',
      email: 'lele@gmail.com',
      status: 'inativa',
      lastTithe: '09/01/2022',
      actions: 'ícones aqui',
    },
    {
      name: 'Mauricio',
      email: 'mauricio@gmail.com',
      status: 'inativo',
      lastTithe: '19/08/2023',
      actions: 'ícones aqui',
    },
    {
      name: 'Claudia',
      email: 'clauida@gmail.com',
      status: 'ativo',
      lastTithe: '01/02/2023',
      actions: 'ícones aqui',
    },
  ];
}

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

type payment = 'Pix' | 'Dinheiro' | 'Sem pagamento';
interface PeriodicElement {
  name: string;
  position: number;
  paid: string;
  paymentMethod: payment;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', paid: 'Sim', paymentMethod: 'Pix' },
  { position: 2, name: 'Helium', paid: 'Sim', paymentMethod: 'Dinheiro' },
  { position: 3, name: 'Lithium', paid: 'Sim', paymentMethod: 'Pix' },
  { position: 4, name: 'Beryllium', paid: 'Sim', paymentMethod: 'Dinheiro' },
  { position: 5, name: 'Boron', paid: 'Sim', paymentMethod: 'Pix' },
  { position: 6, name: 'Carbon', paid: 'Sim', paymentMethod: 'Pix' },
  {position: 7,name: 'Nitrogen',paid: 'Não',paymentMethod: 'Sem pagamento',},
  { position: 8, name: 'Oxygen', paid: 'Não', paymentMethod: 'Sem pagamento' },
  {position: 9,name: 'Fluorine',paid: 'Não',paymentMethod: 'Sem pagamento' },
  { position: 10, name: 'Neon', paid: 'Não', paymentMethod: 'Sem pagamento' },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'paid', 'paymentMethod'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

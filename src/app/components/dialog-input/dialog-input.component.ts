import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent {
  name: string = "";
  address: string = "";
  number: number = 0;
  cpf: number = 0;

  constructor(public dialog: MatDialogRef<DialogInputComponent>){}
  onCancel(){
    this.dialog.close()
  }

  onConfirm(){
    this.dialog.close({
      name: this.name,
      address: this.address,
      cpf: this.cpf
    })
  }
}

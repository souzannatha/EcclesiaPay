import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogInputComponent } from 'src/app/components/dialog-input/dialog-input.component';

type payment = 'Pix' | 'Dinheiro' | 'Sem pagamento';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  messageText = '';
  messageAuthor = '';

  messages: string[] = [
    '“Nunca se ouviu dizer que alguém que recorreu à Virgem Maria fosse desamparado.” – Santo Afonso de Ligório',
    '“Com Maria, tudo por Jesus.” – São Marcelino Champagnat',
    '“A devoção à Santíssima Virgem é sinal certo de predestinação.” – São Luís Maria Grignion de Montfort',
    '“Recorrei a Maria, ela nunca abandona os seus filhos.” – São Padre Pio',
    '“Confia em Maria e verás milagres.” – Santa Teresa de Calcutá',
    '“A quem Deus quer fazer muito santo, faz muito devoto da Virgem Maria.” – São Luís Maria',
    '“Maria é o caminho mais seguro, mais curto e mais perfeito para chegar até Jesus.” – São Luís Maria',
    '“A oração é a chave do céu e Maria é a porta.” – Santo Agostinho',
    '“Permanecei unidos a Maria, e tudo ficará bem.” – São João Bosco',
    '“O Rosário é a arma para estes tempos.” – São Padre Pio',
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const randomPhrase = Math.floor(Math.random() * this.messages.length);
    const fullMessage = this.messages[randomPhrase];
    const parts = fullMessage.split(' – ');
    this.messageText = parts[0];
    this.messageAuthor = parts[1] ?? '';
  }

  navigateToHistory() {
    this.router.navigateByUrl('/history');
  }
}

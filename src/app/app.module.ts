import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {
  Church,
  Lock,
  LogInIcon,
  LucideAngularModule,
  UserRound,
  Search,
  Users,
  PiggyBank,
  UserPlus,
} from 'lucide-angular';

import { LoginComponent } from './modules/login/login.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DialogInputComponent } from './components/dialog-input/dialog-input.component';
import { HistoryComponent } from './modules/history/history.component';
import { RegisterTitheComponent } from './modules/register-tithe/register-tithe.component';
import { BirthdayComponent } from './modules/birthday/birthday.component';
import { CardComponent } from './shared/card/card.component';
import { TableComponent } from './shared/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    DashboardComponent,
    DialogInputComponent,
    HistoryComponent,
    RegisterTitheComponent,
    BirthdayComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatCardModule,
    LucideAngularModule.pick({
      Church,
      UserRound,
      Lock,
      Search,
      Users,
      PiggyBank,
      UserPlus,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

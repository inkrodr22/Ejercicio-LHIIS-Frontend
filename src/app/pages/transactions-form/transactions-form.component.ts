import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class TransactionsFormComponent {
  @Output() transactionCreated = new EventEmitter<void>();

  newTransaction = {
    RFC: '',
    fechaRetiro: '',
    monto: null,
    comision: null
  };

  constructor(private apiService: ApiService) {}

  createTransaction() {
    if (!this.newTransaction.RFC || !this.newTransaction.fechaRetiro || !this.newTransaction.monto || !this.newTransaction.comision) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.apiService.createTransaction(this.newTransaction).subscribe({
      next: () => {
        this.transactionCreated.emit();
      },
      error: (err) => {
        console.error('Error creando transacción:', err);
        alert('Error al crear la transacción');
      }
    });
  }
}

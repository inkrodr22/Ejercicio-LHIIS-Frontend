import {Dialog} from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {CommonModule, } from '@angular/common';
import {Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {TransactionsFormComponent} from '../transactions-form/transactions-form.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TableModule, FormsModule, Dialog, TransactionsFormComponent],
  templateUrl: './transactions.component.html',
})


export class TransactionsComponent {
  apiService = inject(ApiService);
  transactions: any[] = [];
  filteredTransactions: any[] = [];
  showModal = false;

  rfcFilter: string = '';
  folioFilter: string = '';
  statusFilter: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  statusOptions = [
    { label: 'Todos', value: '' },
    { label: 'PENDING', value: 'PENDING' },
    { label: 'COMPLETED', value: 'COMPLETED' },
    { label: 'FAILED', value: 'FAILED' }
  ];

  onTransactionCreated() {
    this.showModal = false;
    alert('Transacción creada con éxito');
    window.location.reload();
  }

  constructor() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.apiService.getTransactions().subscribe((data: any) => {
      this.transactions = data;
      this.filteredTransactions = data;
    });
  }

  applyFilter() {
    this.filteredTransactions = this.transactions.filter(tx => {
      return (
        (!this.rfcFilter || tx.RFC.includes(this.rfcFilter)) &&
        (!this.folioFilter || tx.folio.includes(this.folioFilter)) &&
        (!this.statusFilter || tx.status === this.statusFilter) &&
        (!this.fechaInicio || new Date(tx.fechaRetiro) >= new Date(this.fechaInicio)) &&
        (!this.fechaFin || new Date(tx.fechaRetiro) <= new Date(this.fechaFin))
      );
    });
  }

  clearFilters() {
    this.rfcFilter = '';
    this.folioFilter = '';
    this.statusFilter = '';
    this.fechaInicio = '';
    this.fechaFin = '';

    this.filteredTransactions = [...this.transactions];
  }

  deleteTransaction(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta transacción?')) {
      this.apiService.deleteTransaction(id).subscribe({
        next: () => {
          alert('Transacción eliminada correctamente');
          this.fetchTransactions();
        },
        error: err => {
          console.error('Error eliminando transacción:', err);
          alert('Hubo un error al eliminar la transacción');
        }
      });
    }
  }

  updateStatus(id: number, newStatus: string) {
    if (!newStatus) {
      alert('Selecciona un estado válido');
      return;
    }

    if (confirm(`¿Seguro que deseas cambiar el estado a ${newStatus}?`)) {
      this.apiService.updateTransactionStatus(id, newStatus).subscribe({
        next: () => {
          alert('Estado actualizado correctamente');
          this.fetchTransactions();
        },
        error: err => {
          console.error('Error actualizando estado:', err);
          alert('Hubo un error al actualizar el estado');
        }
      });
    }
  }
}


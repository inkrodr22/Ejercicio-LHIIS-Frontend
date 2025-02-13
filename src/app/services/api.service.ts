import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _http = inject(HttpClient);
  private API_URL = 'https://ejercicio-lhiis-backend-production.up.railway.app/api';

  getUsers(): Observable<any> {
    return this._http.get(`${this.API_URL}/usuarios`);
  }

  getTransactions(filters?: any): Observable<any> {
    let params = new HttpParams();

    if (filters) {
      Object.keys(filters).forEach(key => {
        if (filters[key]) params = params.set(key, filters[key]);
      });
    }

    return this._http.get(`${this.API_URL}/transacciones`, { params });
  }

  deleteTransaction(id: number) {
    return this._http.delete(`${this.API_URL}/transacciones/${id}`);
  }

  updateTransactionStatus(id: number, status: string): Observable<any> {
    return this._http.put(`${this.API_URL}/transacciones/${id}/status`, { status });
  }

  createTransaction(transactionData: any) {
    return this._http.post(`${this.API_URL}/transacciones`, transactionData);
  }

}

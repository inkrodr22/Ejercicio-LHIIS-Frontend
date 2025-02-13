import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}

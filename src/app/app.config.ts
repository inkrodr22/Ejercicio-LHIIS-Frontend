import { ApplicationConfig } from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {TransactionsComponent} from './pages/transactions/transactions.component';
import lara from '@primeng/themes/lara';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'transacciones', pathMatch: 'full' },
      { path: 'usuarios', component: UsersComponent },
      { path: 'transacciones', component: TransactionsComponent }
    ]),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: lara,
          options: {
            prefix: 'p',
            darkModeSelector: 'none',
            cssLayer: false
          }
      }
    }),
    provideHttpClient()
  ],
};

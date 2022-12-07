import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./view/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./view/perfil/perfil.module').then((m) => m.PerfilModule),
      },
      { path: '', redirectTo: 'checkout', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

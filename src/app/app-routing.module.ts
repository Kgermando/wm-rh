import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  

const routes: Routes = [
  {
    path: 'authentication', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'layouts', loadChildren: () => import('../app/layouts/layouts.module').then(m => m.LayoutsModule),
  },
 

  { path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '**', redirectTo: 'authentication', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

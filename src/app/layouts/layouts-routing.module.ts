import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  },



  
  {path: 'error-500', component: InternalErrorComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }

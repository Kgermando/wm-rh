import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { PersonnelAddComponent } from './personnel-add/personnel-add.component';
import { PersonnelViewComponent } from './personnel-view/personnel-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonnelListComponent,
    PersonnelAddComponent,
    PersonnelViewComponent
  ],
  imports: [
    CommonModule,
    PersonnelRoutingModule,

    SharedModule
  ]
})
export class PersonnelModule { }

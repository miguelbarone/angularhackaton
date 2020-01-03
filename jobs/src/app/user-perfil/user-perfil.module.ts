import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { CandidaturasComponent } from './candidaturas/candidaturas.component';
import { UserMenuComponent } from './user-menu/user-menu.component';



@NgModule({
  declarations: [UserEditFormComponent, CandidaturasComponent, UserMenuComponent],
  imports: [
    CommonModule
  ]
})
export class UserPerfilModule { }

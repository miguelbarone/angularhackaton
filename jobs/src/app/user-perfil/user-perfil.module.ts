import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { CandidaturasComponent } from './candidaturas/candidaturas.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [UserEditFormComponent, CandidaturasComponent, UserMenuComponent, UserContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [UserEditFormComponent, CandidaturasComponent, UserMenuComponent, UserContainerComponent],
})
export class UserPerfilModule { }

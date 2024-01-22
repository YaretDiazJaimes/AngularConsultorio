import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: '', redirectTo: '/secretaria', pathMatch: 'full' },
  { path: 'secretaria', component: SecretariaComponent },
  { path: 'doctor', component: DoctorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

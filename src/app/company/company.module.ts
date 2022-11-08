import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanieCreateComponent } from './companie-create/companie-create.component';
import { CompanieUpdateComponent } from './companie-update/companie-update.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'companies', component: CompaniesComponent },
      { path: 'companies/create', component: CompanieCreateComponent },
      { path: 'companies/update', component: CompanieUpdateComponent },
      { path: 'companies/update/:id', component: CompanieUpdateComponent }    ])
  ]
})
export class CompanyModule { }

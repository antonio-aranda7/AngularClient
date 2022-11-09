import { Company } from './../../_interfaces/company.model';
import { RepositoryService } from './../../shared/services/repository.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent, RouterLink } from '@angular/router';
//import { CpuInfo } from 'os';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public companies: Company[];

  constructor(private repository: RepositoryService, private form:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }
  getCompanies = () => {
    const apiAddress: string = "api/companies";
    this.repository.getData(apiAddress)
    .subscribe({
      next: (com: Company[]) => this.companies = com,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  Move(id:number):void {
      this.router.navigate(['/companies/update',id]);
    }

  Delete= (id:number)=>{
    const apiAddress: string = "api/companies";
    this.repository.deleteData(apiAddress, id).subscribe( 
      (data: any) => {
          let result = data[0];
          this.ngOnInit();
    })
  }
}


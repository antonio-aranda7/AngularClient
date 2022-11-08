import { Company } from './../../_interfaces/company.model';
import { RepositoryService } from './../../shared/services/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './companie-update.component.html',
  styleUrls: ['./companie-update.component.css']
})
export class CompanieUpdateComponent implements OnInit {

  CompanyId!:number;

  company:Company={
    id: 0,
    name:"",
    address:"",
    country:""
  };

  constructor(private repository: RepositoryService, private form:FormBuilder, private router:Router, private actRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.getCompanyById();
  }

  update:FormGroup=this.form.group({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    country: new FormControl(),
  });

  getCompanyById = () => {
    this.actRoute.paramMap.subscribe(params => {
      const apiAddress: string = "api/companies/";
      this.CompanyId= Number(params.get('id'));
     
     this.repository.getCompanyById(apiAddress,this.CompanyId).subscribe(data=> {
       this.company = data
       this.update.patchValue({
        id:Number(this.CompanyId),
        name: String(this.company.name),
        address: String(this.company.address),
        country: String(this.company.country)
      });});
     });
  }

  onUpdate(data:any):void{
    const apiAddress: string = "api/companies";
    this.company.id=(data.id)
    this.company.name=String(data.name)
    this.company.address=String(data.address)
    this.company.country=String(data.country)
    this.repository.putData(apiAddress,this.company).subscribe( 
      (data: any) => {
          let result = data[0];
          this.ngOnInit();
    })
  }

  
}

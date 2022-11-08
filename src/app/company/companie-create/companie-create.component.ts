import { Company } from './../../_interfaces/company.model';
import { RepositoryService } from './../../shared/services/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companie-create',
  templateUrl: './companie-create.component.html',
  styleUrls: ['./companie-create.component.css']
})
export class CompanieCreateComponent implements OnInit {

  public companies: Company[];

  companie:Company={
    id: 0,
    name:"",
    address:"",
    country:""
  };

  constructor(private repository: RepositoryService, private form:FormBuilder) { }

  ngOnInit(

  ): void {
  }

  insert:FormGroup=this.form.group({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    country: new FormControl(),
  });

  onSubmit(data:any):void{
    const apiAddress: string = "api/companies";
    this.companie.name=String(data.name)
    this.companie.address=String(data.address)
    this.companie.country=String(data.country)
    this.repository.postData(apiAddress,this.companie).subscribe( 
      (data: any) => {
          let result = data[0];
          this.insert.reset();
    })
  }
}

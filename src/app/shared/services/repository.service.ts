import { Company } from './../../_interfaces/company.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public getData = (route: string) => {
    return this.http.get<Company[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
 
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  getCompanyById = (route:string, id:number) => {
    let getUrl=this.createCompleteRoute(route, this.envUrl.urlAddress);
    return this.http.get<Company>(getUrl+id);
    //return this.http.get<Company[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
    /*let GetUrl=this.url+"Planets/"+id;
    return this.http.get<Company>(GetUrl);*/
  }
  
  public postData = (route:string,company:Company)=>{
    const headers={
      'content-type':'application/json'
    }
    const body=JSON.stringify(company);
    let getUrl=this.createCompleteRoute(route, this.envUrl.urlAddress);
    return this.http.post<Company>(getUrl,body,{'headers':headers});
  }

  public putData = (route:string,company:Company)=>{
    const headers={
      'content-type':'application/json'
    }
    const body=JSON.stringify(company);
    let getUrl=this.createCompleteRoute(route, this.envUrl.urlAddress);
    return this.http.put<Company>(getUrl,body,{'headers':headers});
  }


  public deleteData =(route:string,id:number)=>{
 
    let getUrl=this.createCompleteRoute(route, this.envUrl.urlAddress);
    return this.http.delete<Company>(`${getUrl}/${id}`);
  }
}
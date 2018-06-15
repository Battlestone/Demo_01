import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {hostip} from "./config";
import {ResData} from "../shared/shared";


@Injectable()
export class SystemService {

  private user={};

  constructor(
    private http:HttpClient){

  }

  register(name,password):Observable<ResData>{

    let params={
      name:name,
      password:password
    };
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json') ;
      // .set('Token', this.systemService.getLoginToken())
    let options = {
      headers: headers
    };
    return this.http.post<ResData>(hostip+'system/register',params,options);
  }


  login(name,password):Observable<ResData>{
    let params={
      name:name,
      password:password
    };
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json') ;
    // .set('Token', this.systemService.getLoginToken())
    let options = {
      headers: headers
    };
    return this.http.post<ResData>(hostip+'system/login',params,options);
  }

  logout():Observable<ResData>{
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json') ;
    // .set('Token', this.systemService.getLoginToken())
    let options = {
      headers: headers
    };
    return this.http.get<ResData>(hostip+'system/logout',options);
  }

}

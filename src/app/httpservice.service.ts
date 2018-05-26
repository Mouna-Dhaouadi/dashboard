import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Promise } from 'q';
import { Observable } from 'rxjs/Observable';
import{API_URL} from '../environments/environment';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable()
export class HttpserviceService {


  constructor(private http:Http) { }

  public getData(url:String) {
   
    return  Promise<any>((resolve, reject) => {
      this.http.get(API_URL+url)
        .map(res => { return res.json(); })
        .subscribe((res) => {
          console.log("hhhh",res);
          resolve(res);
        }, (error) => {
          console.log("error create", error);
          reject(error);
        });
      });
    }

private extractData(response:Response)
{
  let body= response.json();
  return body.data || {};
}

private handleError(err: Response):Observable<any>
{
return Observable.throw(err.json().error || 'server error');
}
}



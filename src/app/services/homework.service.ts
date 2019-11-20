import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  private api = new Api();

  constructor(private http: HttpClient ) { }

  getHomeworks(){
    console.log(this.api.getUrlHomeworks())
    return this.http.get(this.api.getUrlHomeworks());
  }
  public getHomeworkId(homework_id) {
    return this.http.get(this.api.getUrlHomeworksDetail(homework_id));
  }
  public store(formaData){
    return this.http.post(this.api.getUrlHomeworks(),formaData,{
      headers:{
        'enctype': 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'
      }
    });
  }
}

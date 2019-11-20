import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = new Api();
  constructor(private http: HttpClient, private afs: AngularFirestore) { }
  login(data:any){
    console.log(this.api.getUrlLogin())
        return this.http.post(this.api.getUrlLogin(),{
            email:data.email,
            password:data.password
        });

  }
  register(data:any){
    console.log(this.api.getUrlRegister())
        return this.http.post(this.api.getUrlRegister(),{
            username:data.username,
            name:data.name,
            lastname:data.lastname,
            email:data.email,
            password:data.password,
            //confirmpassword:data.confirmpassword
        });

  }
  registerFirebase(email:any, id:any){
    console.log(email);
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('users').add({
        email: email,
        id_user: id
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  logout(){
    return this.http.put(this.api.getUrlLogout(3),{});
    
  }
}

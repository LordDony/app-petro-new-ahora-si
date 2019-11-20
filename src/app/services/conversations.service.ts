import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  private api = new Api();
  constructor(private http: HttpClient) { }

  getConversation(idUser){
    return this.http.get(this.api.url_conversations+idUser);

  }

}

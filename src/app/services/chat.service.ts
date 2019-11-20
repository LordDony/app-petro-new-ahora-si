import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IChat } from '../structures/chat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ChatService {
  
    
    private api = new Api();
    private collection: AngularFirestoreCollection<IChat>;
    private messages: Observable<IChat[]>;
    constructor(private http: HttpClient, private afs: AngularFirestore) {
        
    }



    getMessages(conversation_id:string) {
        return this.http.get('http://192.168.0.2:3333/api/v1/messages/'+conversation_id);
    }

    getUsersOnline(userId) {
        console.log(this.api.getUrlUsersOnline())
        return this.http.get(this.api.getUrlUsersOnline()+'/'+userId);

    }

    sendMessage(chat_input: string, user_id:string,conversation_id:string) {
        return this.http.post("http://192.168.0.2:3333/api/v1/messages",{
            user_id:user_id,
            message:chat_input,
            conversation_id:conversation_id
        });
    }

    createNewConversation(user_id: string,user_send:string) {
        return this.http.post("http://192.168.0.2:3333/api/v1/conversations",{
            user_one:user_send,
            user_two:user_id
        });
    }
}

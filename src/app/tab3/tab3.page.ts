import { Component } from '@angular/core';
import { ChatService} from '../services/chat.service';
import { ConversationsService} from '../services/conversations.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public  usersOnline : any[];
  public conversations:any =  [];
  public user:any = [];
  private userId = JSON.parse(localStorage.getItem('user')).id;
  constructor(private chatService: ChatService, private conversationService: ConversationsService) {
    this.getUsersOnline();
    this.getConversation();
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  getUsersOnline(){
    
    this.chatService.getUsersOnline(this.userId).subscribe((res:any)=>{
      this.usersOnline= res.data;
      console.log(res.data);
    },(error)=>{
      console.log(error);
      alert(error.message);
    });
  }

  getConversation(){
    this.conversationService.getConversation(this.userId).subscribe((res:any)=>{
      console.log(res);
      this.conversations = res.data;
    },(error)=>{
      console.log(error);
      alert(error.message);
    });
  }
  onCreateNewConversation(user_id:string){
    this.chatService.createNewConversation(this.user.id,user_id).subscribe((res:any)=>{
      let con = res.conversation.conversation.id;
      console.log(con);
    });
  }

  


}

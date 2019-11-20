import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { IChat } from '../structures/chat';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.page.html',
    styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
    public conversation_id:string;
    public user:any = [];
    constructor(public chat: ChatService,private route: ActivatedRoute) { }

    public messages:any = [];
    public chat_input:string;
    ngOnInit() {
        this.conversation_id = this.route.snapshot.paramMap.get("id");
        this.user            = JSON.parse(localStorage.getItem('user'));
        this.getMessages(this.conversation_id);
    }
    getMessages(conversation_id: string) {
        this.chat.getMessages(conversation_id).subscribe((res:any)=>{
            this.messages = res.data;
            console.log(this.messages);
        },(error:any)=>{
            alert(error.message);
        });
    }

    send(){
        if(this.chat_input!=null)
            this.chat.sendMessage(this.chat_input,this.user.id,this.conversation_id).subscribe((res:any)=>{
                console.log(res)
                this.chat_input = null;
                this.getMessages(this.conversation_id);
            },(error:any)=>{
                alert(error.message);
            });
    }

}

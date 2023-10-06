import {Component, Input, ViewChild} from '@angular/core';
import {Message} from "../../_models/message";
import {FormsModule, NgForm} from "@angular/forms";
import {MessageService} from "../../_services/message.service";
import {CommonModule} from "@angular/common";
import {TimeagoModule} from "ngx-timeago";

@Component({
  selector: 'socialSync-member-messages',
  standalone: true,
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
  imports: [CommonModule, TimeagoModule, FormsModule]
})
export class MemberMessagesComponent{
  @ViewChild('messageForm') messageForm?: NgForm;
  @Input() username?: string;
  @Input() messages: Message[] = [];
  messageContent = '';

  constructor(private messageService: MessageService) { }

  sendMessage() {
    if (!this.username) return;
    this.messageService.sendMessage(this.username, this.messageContent).subscribe({
      next: message => {
        this.messages.push(message);
        this.messageForm?.reset();
      }
    })
  }

}

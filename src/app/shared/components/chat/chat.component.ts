import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
  StreamAutocompleteTextareaModule,
  StreamChatModule,
} from 'stream-chat-angular';
import { GetChatMessage } from '../../../feature/store/feature.action';
import { FeatureState } from '../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { ChatMessageModel } from '../../../feature/models/chatMsg.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [TranslateModule, StreamAutocompleteTextareaModule, StreamChatModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private route:ActivatedRoute,
    private store:Store
  ) {
    const apiKey = 'rbfpaja7tet9';
    const userId = 'yellow-voice-1';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieWVsbG93LXZvaWNlLTEifQ.0Fy7q02PCPFG-TVLq6Q9CZNPaldT4aSEACh1KTFrkUA';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  chats:ChatMessageModel[] = []
  text:string 
  message:string;
  @Select(FeatureState.getChats) chats$:Observable<ChatMessageModel[]>

  async ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.store.dispatch(new GetChatMessage(params['userName'])).subscribe(()=>{
        this.chats$.subscribe(async (res)=>{
          this.chats = res
          for(let i of res){
            for(let j of i.messages.reverse()){
              this.text = j.content
              const message = await channel.sendMessage({
                text: this.text,
            });
            }
          }
        })
      })
    }
  );
      const channel = this.chatService.chatClient.channel('messaging', 'travel', {
        name: 'Izrada aplikacija',
    });
    
      channel.create();
      await this.channelService.init({
        type: 'messaging',
        id: { $eq: "travel" },
      },
      );
  }
}


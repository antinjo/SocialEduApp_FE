import { Component } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent{

  openSavedFolder:boolean = true;
  openProjectFolder:boolean = true;
  folderName:string=""

  onTrigger(eventData:boolean){
    this.openSavedFolder = eventData
  }
  onTriggerName(name:string){
    this.folderName  = name
  }
  onTriggerProjectName(name:string){
    this.folderName  = name
  }
  onTriggerFolder(eventData:boolean){
    this.openProjectFolder = eventData
  }
  onGoBack(bool:boolean){
    this.openSavedFolder = bool;
  }
  onGoBackFromProject(bool:boolean){
    this.openProjectFolder = bool;
  }
}

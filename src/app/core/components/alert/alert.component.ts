import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
  message:string 
  constructor(private config:DynamicDialogConfig){}

  ngOnInit(): void {
    this.message = this.config.data.message
  }
}

import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pd-tabs',
  templateUrl: './pd-tabs.component.html',
  styleUrl: './pd-tabs.component.scss'
})
export class PdTabsComponent implements OnInit {

  @Input() selectedTab= ''
  @Output() selectedPdTab = ''

  ngOnInit(): void {
    
    this.selectedPdTab= this.selectedTab
  }
}

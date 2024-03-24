import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-tabs',
  templateUrl: './year-tabs.component.html',
  styleUrl: './year-tabs.component.scss'
})
export class YearTabsComponent {
  @Input() selectedPdTab =''
}

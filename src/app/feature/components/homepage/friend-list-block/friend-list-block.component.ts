import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-friend-list-block',
  templateUrl: './friend-list-block.component.html',
  styleUrl: './friend-list-block.component.scss'
})
export class FriendListBLockComponent implements OnInit {
  cities!: City[];

  selectedCity!: City ;
  
  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' },
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}

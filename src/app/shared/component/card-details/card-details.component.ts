import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
// @Input() cardDetails! : any;
@Input() sendIdToChild! : any;
  constructor() { }

  ngOnInit(): void {
  }

}

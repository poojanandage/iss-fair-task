import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cardsection',
  templateUrl: './cardsection.component.html',
  styleUrls: ['./cardsection.component.scss']
})
export class CardsectionComponent implements OnInit {
    @Input() getArr! : any;
    @Output() sendIdToParent : EventEmitter<string> = new EventEmitter<string>;
  constructor() { }

  ngOnInit(): void {
  }
 sendObjIdTocard(event : any){
    this.sendIdToParent.emit(event)
  }

}

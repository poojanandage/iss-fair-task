import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fairlist',
  templateUrl: './fairlist.component.html',
  styleUrls: ['./fairlist.component.scss']
})
export class FairlistComponent implements OnInit {
    @Input() getObjFromCard!: any;
    @Output() sendObjId : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
 public onclickCard(){
  this.sendObjId.emit(this.getObjFromCard.fairId);
  console.log(this.getObjFromCard.fairId);
  
 }

}

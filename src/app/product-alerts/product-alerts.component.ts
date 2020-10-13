import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input,Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  emitEvent(){
    this.notify.emit(this.product);
  }

}
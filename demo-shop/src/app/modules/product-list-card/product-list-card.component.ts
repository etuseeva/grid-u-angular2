import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IProduct} from "../../interfaces";
import {NOT_FOUND_IMAGE} from "../../constants";

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss']
})
export class ProductListCardComponent implements OnInit {
  @Input()
  product: IProduct;
  
  @Output()
  detailsEventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    this.detailsEventEmitter.emit(this.product.id);
  }
  
  getNotFoundImage() {
    return NOT_FOUND_IMAGE;
  }

}
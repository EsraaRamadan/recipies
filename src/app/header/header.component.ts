import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featsureSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(featsure: string) {
    this.featsureSelected.emit(featsure);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './input-ps-kw.component.html',
  styleUrls: ['./input-ps-kw.component.css']
})
export class InputPsKwComponent implements OnInit {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  @Input() uom = '0';
  @Output() uomChange = new EventEmitter<string>();

  private readonly onePsIsKw = 0.73549875;

  constructor() { }

  onPowerChanged(): void {
    this.valueChange.emit(this.value);
  }

  onUomChanged(): void {
    if (this.uom == 'kW') {
      this.value *= this.onePsIsKw;
    } else {
      this.value /= this.onePsIsKw;
    }

    this.valueChange.emit(this.value);
    this.uomChange.emit(this.uom);
  }

  ngOnInit(): void {
  }

}

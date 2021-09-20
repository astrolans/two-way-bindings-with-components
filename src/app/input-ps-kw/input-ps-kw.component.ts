import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './input-ps-kw.component.html',
  styleUrls: ['./input-ps-kw.component.css']
})
export class InputPsKwComponent implements OnInit {
  @Input() value = 30;
  @Output() valueChange = new EventEmitter<number>();

  @Input() uom = 'kW';
  @Output() uomChange = new EventEmitter<string>();

  private readonly onePsIsKw = 0.73549875;

  constructor() { }

  onPowerChanged(): void {
    this.valueChange.emit(this.value);
  }

  onUomChanged(): void {
    this.uomChange.emit(this.uom);
  }

  ngOnInit(): void {
  }

}

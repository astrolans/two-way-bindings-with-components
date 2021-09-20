import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './input-ps-kw.component.html',
  styleUrls: ['./input-ps-kw.component.css']
})
export class InputPsKwComponent implements OnInit {
  @Input() value = 30;
  @Input() uom = 'PS';
  constructor() { }

  ngOnInit(): void {
  }

}

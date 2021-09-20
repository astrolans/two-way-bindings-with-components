import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './input-ps-kw.component.html',
  styleUrls: ['./input-ps-kw.component.css']
})
export class InputPsKwComponent implements OnInit {
  value = 30;
  uom = 'PS';
  constructor() { }

  ngOnInit(): void {
  }

}

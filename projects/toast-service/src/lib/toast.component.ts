import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toast-service',
  template: `
    <div id="toast-box">
    </div>
  `,
  styles: [
    `#toast-box{
      position: absolute;
      top: 30px;
      right: 30px;
      width: fit-content;
      overflow-x: hidden;
  }`
  ]
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

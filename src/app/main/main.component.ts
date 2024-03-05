import { Component, OnInit } from '@angular/core';
import { ToastService } from 'toast-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(private _toast:ToastService) { }

  ngOnInit(): void {
    console.log("In main component")
  }
  displayToast(type:string,message:string,duration?:number){
    this._toast.displayToast(type,message);
  }
}

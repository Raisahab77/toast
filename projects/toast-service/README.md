# toast-service

## Installation

To install the `toast-service` library, you can use npm:
```bash
npm install toast-service
```

## Usage
**Import the ToastModule in your Angular module file:**
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'toast-service';

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    BrowserModule,
    ToastModule // Import the ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
**Inject the ToastService into your component:**
displayToast function takes two argument-
- **Type** 
    - success
    - error
    - warning
 - **Message**
```
import { Component } from '@angular/core';
import { ToastService } from 'toast-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _toast: ToastService) { }
  showToast(): void {
    //Call the displayToast method to show a toast
    this._toast.displayToast("success", "This is success toast");
    this._toast.displayToast("error", "This is error toast");
    this._toast.displayToast("warning", "This is warning toast");
  }
}
```
**Import the library's styles into your global CSS file:**
```css
@import '../node_modules/toast-service/assets/styles.css';
```
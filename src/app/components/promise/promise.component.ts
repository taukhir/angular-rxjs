import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent {

  constructor(){

  }

  myPromise() :Promise<any>{

    return new Promise<any>((resolve,reject)=>{

      console.log('promise');
      resolve("success");
      
    });
  } 

  myFunction(): void {
    console.log('myFunction called');

    this.myPromise().then((data)=>{
      console.log('then called');
      console.log(data);
    });
  }
}

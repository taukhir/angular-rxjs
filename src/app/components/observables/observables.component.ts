import { fromEvent, Observable, Subscription } from 'rxjs';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  public name!: string;

  public history: number[] = [];

  public myObserver$! : Observable<number>;

  public mySubscription! : Subscription;

  @ViewChild('add') button!: ElementRef;

  ngAfterViewInit(): void {
    console.log('initiated');
    fromEvent(this.button.nativeElement, 'click').subscribe((res:any) => {
      console.log(res);
    });
    this.consumeData();
  }

  constructor() {}

  submit(): void {}


  produceData() : Observable<number> {


    return new Observable((observer)=>{

      for(let i = 0 ; i< 50 ;i++ ){
      
        setTimeout(()=>{
          observer.next(i);
        },1000*i);
      }
    });
    
  }


  consumeData(): void {

    this.mySubscription = this.produceData().subscribe((data)=>this.history.push(data));

    setTimeout(()=> this.mySubscription.unsubscribe(),5000);
   
  }
  
}

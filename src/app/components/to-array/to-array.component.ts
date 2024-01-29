import { Component, OnInit } from '@angular/core';
import { interval, timer, toArray, take, Observable } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const myInterval = timer(1000,1000);


    let myObserver = new Observable((observer)=>{

      // emit some data
      for(let i of [1,2,3,4,5,1,1]){
        observer.next(i);
      }

      // emit error
      // observer.error();

      // completion
      observer.complete();
    });

    // myInterval.pipe(take(10),toArray()).subscribe(console.log);

    myObserver.pipe(toArray()).subscribe(console.log);

    /*
     * custom observer
     */
    
    

  }
}

import { interval, Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interval-time',
  templateUrl: './interval-time.component.html',
  styleUrls: ['./interval-time.component.scss']
})
export class IntervalTimeComponent {


  public mySubscriber!: Subscription;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const myInterval = interval(1000);

    this.mySubscriber= myInterval.subscribe(res => {
      console.log(res);
      if(res>5)
        this.mySubscriber.unsubscribe();
    });

    
  }

}

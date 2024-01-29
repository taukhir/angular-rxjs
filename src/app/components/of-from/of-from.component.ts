import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {

  public ofOpsNum = of(1,2,3);
  public ofOpsString = of("ahmed","tauqeer","tammana");

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.ofOpsNum.subscribe(console.log);
    this.ofOpsString.subscribe(console.log);

    
  }

}

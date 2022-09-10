import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

export class Hello{
  constructor(public msg:string)
  {

  }
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:WelcomeDataService) { }
  names:string = 'Airobosoft';
  data:any;

  ngOnInit(): void {
  }

  getWelcomeMessage()
  {

    let user = this.service.getMessage();
    user.subscribe(res => this.data = res);



  }

  // getWelcomeMessageWithParameter()
  // {
  //    this.service.handleWelcomeMessagewithParams(this.names);
  // }

}

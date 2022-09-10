import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  notFound:string = 'Please connect in some time!. Something went wrong!'
  constructor() { }

  ngOnInit(): void {
  }

}

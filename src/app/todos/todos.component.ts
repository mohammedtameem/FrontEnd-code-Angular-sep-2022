import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  users:any;
  // todos =[

  //   {id:1,description:'Angular',date:new Date(),author:'james'},
  //   {id:2,description:'Java',date:new Date(),author:'mark'},
  //   {id:3,description:'Devops',date:new Date(),author:'sara'}

  // ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void
  {
     this.http.get("http://localhost:8081/hello")
    .subscribe((res) => this.users = res);

  }

}

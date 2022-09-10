import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hello } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  data:any;

  getMessage()
  {
     return this.http.get("http://localhost:8081/hello-world");
  }

  getTodos()
  {
    return this.http.get("http://localhost:8081/hello");
  }

}



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  c;
  a: User;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log(`${environment.server}:${environment.port}/api/users`);

    this.http.get(`http://localhost:3000/api/users`).subscribe(data => {
      this.c = data;
    });
  }
}

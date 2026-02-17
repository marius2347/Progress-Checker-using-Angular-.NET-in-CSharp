import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  forecasts: any[] = [];

  tasks: any[] = [
    { id: 1, name: 'Learn Angular Components', status: 'In Progress' },
    { id: 2, name: 'Connect to .NET API', status: 'Pending' },
    { id: 3, name: 'Master Material UI', status: 'Pending' }
  ];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.http.get<any[]>('/weatherforecast').subscribe({
      next: (result) => {
        this.forecasts = result;
        console.log(result);
      },
      error: (error) => console.error(error)
    });
  }

  completeTask(task: any) {
    task.status = 'Completed';
    alert(`Task "${task.name}" marked as completed!`);
  }
}

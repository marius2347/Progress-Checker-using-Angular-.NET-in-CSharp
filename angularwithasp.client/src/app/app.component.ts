import { HttpClient, provideHttpClient } from '@angular/common/http';  // import the HttpClient module to make HTTP requests
import { Component, OnInit } from '@angular/core';  // import the Component decorator to define the component and OnInit interface to perform initialization logic
import { CommonModule } from '@angular/common';  // import CommonModule for common directives and loops like *ngFor

// Import Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

// Import Router module for navigation
import { RouterModule } from '@angular/router';

@Component({      
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define a public property like a C++ class member variable
  title: string = 'Angular Learning Path';

  // C# data
  forecasts: any[] = [];

  // calling the class constructor
  constructor(private http: HttpClient) { }

  // initialization logic that runs after the component is created
  ngOnInit() {
    this.getWeather();
  }


  // method to fetch weather data from the .NET API
  getWeather() {
    this.http.get<any[]>('/weatherforecast').subscribe({
      next: (result) => {
        this.forecasts = result;
        console.log(result);
      },
      error: (error) => console.error(error)
    });
  }

  // creating a list of objects (dummy data)
  tasks: any[] = [
    { id: 1, name: 'Learn Angular Components', status: 'In Progress' },
    { id: 2, name: 'Connect to .NET API', status: 'Pending' },
    { id: 3, name: 'Master Material UI', status: 'Pending' }
  ];

  // a method to mark task as completed
  completeTask(task: any) {
    task.status = 'Completed';
    alert(`Task "${task.name}" marked as completed!`);
  }
}


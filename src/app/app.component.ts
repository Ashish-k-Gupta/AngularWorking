<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeComponent } from "./pipe/pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, EmployeeListComponent, AddEmployeeComponent, DataBindingComponent],
  imports: [RouterOutlet, CommonModule, RouterModule, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tuotorial';
}
=======
import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeComponent } from "./pipe/pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, EmployeeListComponent, AddEmployeeComponent, DataBindingComponent],
  imports: [RouterOutlet, CommonModule, RouterModule, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tuotorial';
}
>>>>>>> master

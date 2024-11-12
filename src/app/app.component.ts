import { Component } from '@angular/core';
import { FlipbookComponent } from './flipbook/flipbook.component';  // Import the Flipbook component

@Component({
  selector: 'app-root',
  standalone: true, // Ensure it's marked as a standalone component
  imports: [FlipbookComponent], // Import necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipbook';
}

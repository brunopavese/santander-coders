import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: 'HOME' | 'CONTACT' | 'ABOUT' | 'ADDRESS' = 'HOME'

  goToHome(): void {
    this.currentPage = 'HOME'
  }

  goToAbout(): void {
    this.currentPage = 'ABOUT'
  }

  goToContact(): void {
    this.currentPage = 'CONTACT'
  }

  goToAddress(): void {
    this.currentPage = 'ADDRESS'
  }
}

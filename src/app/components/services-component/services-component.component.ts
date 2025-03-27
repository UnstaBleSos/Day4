import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-services-component',
  imports: [RouterLink,RouterOutlet,NavbarComponent],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.scss'
})
export class ServicesComponentComponent {
    title='services'
}

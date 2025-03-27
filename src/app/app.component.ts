import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet,ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] || 'Dashboard';
        })
      )
      .subscribe(title => (this.title = title));
  }
  
}

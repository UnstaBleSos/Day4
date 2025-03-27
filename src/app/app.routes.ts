import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';

export const routes: Routes = [
    {
       path:"",
       redirectTo:"navbar",
       pathMatch:'full'
    },
    
    {
        path: "services",
        title: "Services",
        component: ServicesComponentComponent,
        data: { title: "Services" },
        children: [
            {
                path: "todo",
                title: "Todo",
                component: NavbarComponent,
                data: { title: "Todo" }
            }
        ]
    },{
        path:"main",
        component:MaincomponentComponent
    }

];

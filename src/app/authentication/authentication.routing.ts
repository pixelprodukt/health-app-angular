import { Routes, RouterModule } from '@angular/router';
import { ViewAuthenticationComponent } from './view-authentication/view-authentication.component';

const routes: Routes = [
    {
        path: 'authentication', component: ViewAuthenticationComponent
    }
];

export const authenticationRoutes = RouterModule.forRoot(routes);
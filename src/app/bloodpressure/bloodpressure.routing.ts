import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRouteGuard } from '../authentication/shared/authentication-route-guard';
import { ViewBloodpressureComponent } from './view-bloodpressure/view-bloodpressure.component';

const routes: Routes = [
    /* {
        path: 'bloodpressure', component: ViewBloodpressureComponent, canActivate: [AuthenticationRouteGuard]
    } */
];

export const bloodpressureRoutes = RouterModule.forRoot(routes);
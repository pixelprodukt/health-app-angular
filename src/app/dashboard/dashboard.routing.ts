import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRouteGuard } from '../authentication/shared/authentication-route-guard';
import { ViewBloodpressureComponent } from '../bloodpressure/view-bloodpressure/view-bloodpressure.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: ViewDashboardComponent, 
        canActivate: [AuthenticationRouteGuard], 
        children: [
            { path: '', redirectTo: 'bloodpressure', pathMatch: 'full' },
            { path: 'bloodpressure', component: ViewBloodpressureComponent },
            { path: 'allergies', component: ViewDashboardComponent },
            { path: 'medication-plan', component: ViewDashboardComponent },
        ]
    }
];

export const dahsboardRoutes = RouterModule.forRoot(routes);
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/authentication', pathMatch: 'full' }
];

export const appRoutes = RouterModule.forRoot(routes);
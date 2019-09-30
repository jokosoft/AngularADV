import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );

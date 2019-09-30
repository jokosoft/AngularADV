
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_ROUTES } from '../app.routes';



@NgModule ({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        APP_ROUTES
    ]
})
export class ErrorsModule { }
import { NgModule } from "@angular/core";

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { LOGIN_ROUTES } from './login.routes';


@NgModule ({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        LOGIN_ROUTES
    ]
})

export class LoginModule { }
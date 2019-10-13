import { NgModule } from "@angular/core";

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { LOGIN_ROUTES } from './login.routes';
import { FormsModule } from '@angular/forms';


@NgModule ({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        LOGIN_ROUTES,
        FormsModule
    ]
})

export class LoginModule { }
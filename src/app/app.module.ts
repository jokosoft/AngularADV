import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    LoginModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

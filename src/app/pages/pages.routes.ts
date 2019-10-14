import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { PromesaComponent } from './promesa/promesa.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
            {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
            {path: 'grafica1', component: Graficas1Component, data: {titulo: 'Gráficas'} },
            {path: 'autocomplete', component: AutocompleteComponent, data: {titulo: 'Autocomplete'} },
            {path: 'promesas', component: PromesaComponent, data: {titulo: 'Promesas'} },
            {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes del Tema'} },
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
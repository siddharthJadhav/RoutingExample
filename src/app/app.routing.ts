import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {path : '' , component: HomeComponent},
    {path: 'servers', component: ServersComponent},
    {path: 'server/:id', component: ServerComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RouterComponent {}

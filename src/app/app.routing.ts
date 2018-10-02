import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    {path : '' , component: HomeComponent},
    {path: 'servers', component: ServersComponent},
    {path: 'server/:id', component: ServerComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id', component: UsersComponent}
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

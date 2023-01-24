import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';
import { dataResolver } from './resolves/data.resolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, resolve: {hola: dataResolver}},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuardGuard], resolve: {TodaLaData: dataResolver}},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

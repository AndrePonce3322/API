import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { dataResolver } from './resolves/data.resolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, resolve: {DataResolver: dataResolver}},
  {path: 'home', component: HomeComponent},
  // {path: 'home', loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule) },
  {path: '**', component: ErrorPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

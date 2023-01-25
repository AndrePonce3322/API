import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from '../lista/lista.component';
import { dataResolver } from '../resolves/data.resolver.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {DataResolver: dataResolver}},
  {path: 'lista', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

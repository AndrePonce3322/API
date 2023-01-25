import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppModule } from "../app.module";
import { ListaComponent } from '../lista/lista.component';

@NgModule({
    declarations: [ListaComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AppModule,
    ]
})
export class HomeModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	cityLogin!: string;
	results!:string;
	fecha!:string;

	constructor(private readonly resolverData: ActivatedRoute) { }

	Time(){
		let date = new Date();
		let hour = date.getHours();
		let minuts = date.getMinutes();
		let seconds = date.getSeconds();
		let hourValidacion;
		let secondsValidacion;
		let minutsValidacion;

		let ampm = (hour >= 13 ? 'p.m' : 'a.m');
		hourValidacion = (hour>=13 ? hour-12 : hour);

		if(hour < 10){
			hourValidacion = `0${hourValidacion}`;
		}
		minutsValidacion = (minuts<10 ? `0${minuts}`: minuts);
		secondsValidacion = (seconds < 10 ? `0${seconds}`: seconds);

		this.results = `${hourValidacion}:${minutsValidacion}:${secondsValidacion}${ampm}`;
	}


	ngOnInit(): void {
		this.resolverData.queryParams.subscribe(
			(parametros: Params) => {
				this.cityLogin = parametros['city'];
			}
		)
		this.Time();
		setInterval(()=>this.Time(),1000);
	}
}
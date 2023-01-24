import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos:string[] = [];

  constructor(private readonly resolverData: ActivatedRoute){}

  ngOnInit(): void {
    this.datos = this.resolverData.snapshot.data['TodaLaData'];
  }
}

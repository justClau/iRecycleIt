import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  slogan: string = `NU LĂSA PE MÂINE CE POȚI RECICLA ASTĂZI`;
  basicInfo: string = "SOLUȚII  ȘI SERVICII DE RECICLARE";
  imgUrl: string = "";

  constructor() { }

  ngOnInit() {
  }

}

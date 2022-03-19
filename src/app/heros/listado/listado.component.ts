import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaod_heroes = ["superman","batman","spiderman","deadpool","Dr,Stronge"]
  active = true

  heroes_borrados = ""

  active_btn (){
    this.active = !this.active
  }

  delete_lista () {
   this.heroes_borrados = this.listaod_heroes.shift() || ""

  }
}

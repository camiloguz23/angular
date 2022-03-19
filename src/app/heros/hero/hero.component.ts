import {Component} from '@angular/core'

@Component({
  selector:"app-hero",
  templateUrl:"./hero.component.html",
})
export class HeroComponent {

  nombre= "Iron Man"
  edad = 26

  info () {
    return `Mi nombre es ${this.nombre} y tengo ${this.edad}`
  }
}

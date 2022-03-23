import { Component } from "@angular/core"

@Component({
  selector:"app-counter",
  template:`
      <h1>{{ (title) ? title: "jeyson" }} </h1>

    <span class="span">{{contador}}</span>
    <button class="btn_counter" (click)="incrementar()">+1</button>
    <button class="btn_counter" (click)="desincrementar($event)">-1</button>

  `,
  styleUrls:["../app.component.scss"]
})
export class Counter {

  title = 'contador';
  contador = 0;
  base = 5

  incrementar ()  {
    this.contador += this.base
  }

  desincrementar (event : Event) {
    this.contador -= this.base
    const btn = event.target as HTMLButtonElement
    console.log(btn.classList[0] )
  }
}

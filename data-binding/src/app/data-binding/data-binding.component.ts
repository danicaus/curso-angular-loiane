import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = `http://loiane.training`;
  cursoAngular: boolean = true;
  urlImagem: string = `http://lorempixel.com.br/400/200`;
  valorAtual: string = ``;
  valorSalvo: string = ``;
  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(target: EventTarget | null) {
    this.valorSalvo = (<HTMLInputElement>target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}

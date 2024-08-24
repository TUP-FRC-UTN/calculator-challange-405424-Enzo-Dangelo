import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {

  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  @Output() resultado = new EventEmitter<number>();
  @Output() limpiarValores = new EventEmitter<void>();

  suma() {
    this.resultado.emit(this.valor1 + this.valor2);
  }

  resta() {
    this.resultado.emit(this.valor1 - this.valor2);
  }

  multiplicacion() {
    this.resultado.emit(this.valor1 * this.valor2);
  }

  division() {
    this.resultado.emit(this.valor1 / this.valor2);
  }

  potencia() {
    this.resultado.emit(Math.pow(this.valor1, this.valor2));
  }

  limpiar() {
    this.resultado.emit(0);
    this.limpiarValores.emit();
  }

}

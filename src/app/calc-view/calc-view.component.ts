import { Component} from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';


@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  onValor1Change(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valor1 = parseFloat(inputElement.value);
  }

  onValor2Change(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valor2 = parseFloat(inputElement.value);
  }
}

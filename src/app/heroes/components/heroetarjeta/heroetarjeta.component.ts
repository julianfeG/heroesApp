import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroetarjetaComponent {
  @Input() heroe!: Heroe;
}

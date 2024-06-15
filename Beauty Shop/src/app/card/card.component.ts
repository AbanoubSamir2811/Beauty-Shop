import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ICard } from './card.component.module';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) card : ICard = {} as ICard;
  @Input({required:true}) index! : number;
  @Output() viewCardEvent = new EventEmitter<ICard>();
  viewCard(): void  {
    this.viewCardEvent.emit(this.card);
  }
}

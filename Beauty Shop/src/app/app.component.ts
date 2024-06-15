import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CardComponent } from './card/card.component';
import { PhotosComponent } from './photos/photos.component';
import { ICard } from './card/card.component.module';
import { SliderComponent} from './slider/slider.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,CardComponent, PhotosComponent, SliderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-core';
  data = {
    title : 'core-title'
  }

  dataTitle(title:string): void{
    this.data.title=title;
  }

  slides: any[]=[
    {
      id:1,
      title: "Title : No. 1 Backpack, Fits 15 Laptops",
      price: "Price: $200",
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },

    {
      id:2,
      title: "Title : T-shirt",
      price: "Price: $300",
      url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },

    {
      id:3,
      title: "Title : Jacket",
      price: "Price: $350",
      url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
      id:4,
      title: "Title : Jacket",
      price: "Price: $350",
      url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    },
    {
      id:5,
      title: "Title : Jacket",
      price: "Price: $350",
      url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    },
    {
      id:6,
      title: "Title : Jacket",
      price: "Price: $350",
      url: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    },
  ]

  readonly cards: Array<ICard> =[
    {
      id:1,
      title: "Title : No. 1 Backpack, Fits 15 Laptops",
      price: "Price: $200",
      imgUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },

    {
      id:2,
      title: "Title : T-shirt",
      price: "Price: $300",
      imgUrl: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },

    {
      id:3,
      title: "Title : Jacket",
      price: "Price: $350",
      imgUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
      id:4,
      title: "Title : Jacket",
      price: "Price: $350",
      imgUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    },
    {
      id:5,
      title: "Title : Jacket",
      price: "Price: $350",
      imgUrl: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    },
    {
      id:6,
      title: "Title : Jacket",
      price: "Price: $350",
      imgUrl: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    },
    {
      id:7,
      title: "Title : Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "Price: $200",
      imgUrl: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },

    {
      id:8,
      title: "Title : T-shirt",
      price: "Price: $300",
      imgUrl: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
  ]

  first = this.cards[0];
  second = this.cards[1];
  third = this.cards[2];
  four = this.cards[3];
  five = this.cards[4];
  six = this.cards[5];

  onCardClicked(card: ICard): void {
    console.log(card.price)
  }
}


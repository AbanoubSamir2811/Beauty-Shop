import { CommonModule } from '@angular/common';
import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})

export class SliderComponent implements OnInit{
  @Input() slides: any[] = []; // Array of image URLs or content for slides
  currentSlide : number = 0;
  interval : any   ;

  next(){
    if(this.slides)
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previous(){
    if(this.slides)
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  ngOnInit(): void {
    debugger;
    this.interval=setInterval(this.next, 2000);
  }
}

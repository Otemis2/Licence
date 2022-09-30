import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {

    this.slides[0] = {
      src: './assets/img/menu/menu1.png',
    };
    this.slides[1] = {
      src: './assets/img/menu/menu2.png',
    }
    this.slides[2] = {
      src: './assets/img/menu/menu3.png',
    }

  }

}

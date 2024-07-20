import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public static Route = {
    path: 'home-page',
    title: 'Home Page',
    component: HomePageComponent,
    canActivate: []
  };

  images: string[] = [
    '/gallery/hello kitty.jpg',
    '/gallery/strawberry orange.jpg',
    '/gallery/strawberry1.jpg',
    '/gallery/strawberry2.jpg',
    '/gallery/orange1.jpg',
    '/gallery/orange2.jpg',
    '/gallery/winter.png',
    '/gallery/pink and blue 1.jpg',
    '/gallery/pink and blue 2.jpg',
    '/gallery/pink and blue 3.jpg',
    '/gallery/baseball.png',
    '/gallery/halloween.png',
    '/gallery/bluewhite.png',
    '/gallery/pinkflower.png',
    '/gallery/yellowflower.png',
    '/gallery/orangeflower.png',
    '/gallery/redflower.png',
    '/gallery/pinkwhiteombre.png',
    '/gallery/pearlwhite.png',
    '/gallery/pinkwhite.png',
    '/imgs/pink and white.png',
    '/gallery/purplesesa.png',
    '/gallery/black.png',
    '/gallery/blackbutterfly.png',
    '/gallery/pinkblack.png',
    '/gallery/green.png',
    '/gallery/bloodred.png',
    '/gallery/clearred.png',
    '/gallery/clearblack.png',
    '/gallery/purple.png',
    '/gallery/yellow.png',
    '/gallery/winterdesigns.png',
    '/imgs/millennium nails.jpg',
    '/imgs/ok.jpg'
  ];

  currentIndex: number = 0;
  constructor() {}
  // ngAfterViewInit(): void {
  //   const imageModal = document.getElementById('imageModal');
  //   if (imageModal) {
  //     imageModal.addEventListener('show.bs.modal', function (event: any) {
  //       const button = event.relatedTarget;
  //       const imageSrc = button.getAttribute('data-bs-image');
  //       const modalImage = imageModal.querySelector('#modalImage') as HTMLImageElement;
  //       if (modalImage) {
  //         modalImage.src = imageSrc;
  //       }
  //     });
  //   }
  // }

  ngAfterViewInit(): void {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
      imageModal.addEventListener('show.bs.modal', (event: any) => {
        const button = event.relatedTarget;
        const imageSrc = button.getAttribute('data-bs-image');
        this.currentIndex = this.images.indexOf(imageSrc);
        this.updateModalImage();
      });
    }
  }

  updateModalImage(): void {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    if (modalImage) {
      modalImage.src = this.images[this.currentIndex];
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateModalImage();
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateModalImage();
  }
}

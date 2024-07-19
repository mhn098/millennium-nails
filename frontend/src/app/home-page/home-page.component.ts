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
  constructor() {}
  ngAfterViewInit(): void {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
      imageModal.addEventListener('show.bs.modal', function (event: any) {
        const button = event.relatedTarget;
        const imageSrc = button.getAttribute('data-bs-image');
        const modalImage = imageModal.querySelector('#modalImage') as HTMLImageElement;
        if (modalImage) {
          modalImage.src = imageSrc;
        }
      });
    }
  }
}

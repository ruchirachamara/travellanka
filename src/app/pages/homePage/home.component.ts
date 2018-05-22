import { Component } from '@angular/core'

@Component({
    selector: 'home-page-content',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    items: Array<any> = []

    constructor() {
      this.items = [
        { name: 'assets/images/demo-content/guide-tour/sliderImage.jpg' },
        { name: 'assets/images/demo-content/guide-tour/sliderImage1.jpg' },
        { name: 'assets/images/demo-content/guide-tour/sliderImage2.jpg' },
        { name: 'assets/images/demo-content/guide-tour/sliderImage3.jpg' }
      ]
    }
}
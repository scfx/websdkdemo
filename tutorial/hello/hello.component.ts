import { Component } from '@angular/core';

/**
 * The hello.component shows a short introduction text and
 * a little list of things that you can discover within this
 * tutorial application.
 */
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  introductionText: string;
  featureList: string[];

  constructor() {
    this.introductionText =
      '... this basic Application will show you some concepts and components about';
  }
}

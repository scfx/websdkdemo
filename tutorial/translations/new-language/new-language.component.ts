import { Component } from '@angular/core';

@Component({
  selector: 'new-language',
  templateUrl: './new-language.component.html'
})
export class NewLanguageComponent {
  lang = {
    languages: {
      it: {
        name: 'Italian',
        nativeName: 'Italian'
      }
    }
  };
}

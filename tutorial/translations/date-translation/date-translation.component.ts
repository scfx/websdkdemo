import { Component } from '@angular/core';
import { gettext } from '@c8y/ngx-components';

@Component({
  selector: 'date-translation',
  templateUrl: './date-translation.component.html'
})
export class DateTranslationComponent {
  getText = gettext('Device');
  currentDate = new Date();
}

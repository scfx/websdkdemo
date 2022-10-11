import { Component } from '@angular/core';
import { gettext } from '@c8y/ngx-components';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'text-translation',
  templateUrl: './text-translation.component.html'
})
export class TextTranslationComponent {
  getText = gettext('Device');
  ngNonBindableTranslate = {
    filteredItemsCount: 1,
    allItemsCount: 8
  };
  translateInstant = '';

  constructor(private translateService: TranslateService) {
    // instant might fail, as it is sync and the language might not be loaded:
    this.translateInstant = this.translateService.instant(gettext('Device'));
    // alternative you can use the async get:
    // this.translateService.get(gettext('Device'));
  }

  deleteDeviceProfile() {
    const deviceProfileName = 'Johny';
    return this.translateService.instant(
      gettext('You are about to delete a device profile "{{ deviceProfileName }}".'),
      { deviceProfileName }
    );
  }
}

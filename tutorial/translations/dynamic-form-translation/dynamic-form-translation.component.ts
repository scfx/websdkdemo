import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { gettext } from '@c8y/ngx-components';

@Component({
  selector: 'dynamic-form-translation',
  templateUrl: './dynamic-form-translation.component.html'
})
export class DynamicFormTranslationComponent {
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: gettext('Select action'),
        description: gettext('some description…'),
        options: [
          {
            value: '1',
            label: gettext('Upload web application')
          },
          {
            value: '2',
            label: gettext('Upload microservice')
          }
        ]
      }
    },
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: gettext('Text input'),
        placeholder: gettext('You can provide some examples displayed as placeholder…'),
        description: gettext('…and some short description.')
      }
    }
  ];

  onSubmit() {
    console.log('The form is submitted.');
  }
}

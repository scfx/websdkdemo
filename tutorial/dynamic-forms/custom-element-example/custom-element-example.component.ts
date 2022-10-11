import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'c8y-custom-element-example',
  templateUrl: './custom-element-example.component.html'
})
export class CustomElementExampleComponent {
  readonly pageTitle = 'Dynamic forms';
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'custom',
      type: 'custom',
      templateOptions: {
        label: 'Custom checkbox',
        description: 'This custom checkbox always displays its label in UPPERCASE.'
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Standard checkbox'
      }
    },
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Simple text input',
        placeholder: 'You can provide some examples displayed as placeholder…',
        description: '…and some short description.'
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

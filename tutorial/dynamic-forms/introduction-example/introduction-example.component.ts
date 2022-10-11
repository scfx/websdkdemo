import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'c8y-introduction-example',
  templateUrl: './introduction-example.component.html'
})
export class IntroductionExampleComponent {
  readonly pageTitle = 'Dynamic forms';
  form = new FormGroup({});
  model = {
    readonly: 'This is a read-only value',
    disabled: 'This is a disabled field',
    'checkbox-disabled': true
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Simple text input',
        placeholder: 'You can provide some examples displayed as placeholder…',
        description: '…and some short description.'
      }
    },
    {
      key: 'required',
      type: 'input',
      templateOptions: {
        label: 'Required text input',
        placeholder: 'Enter some very important, required text',
        description:
          'A longer description can also be provided. It will be displayed in a tooltip next to the label.',
        required: true
      }
    },
    {
      key: 'readonly',
      type: 'input',
      templateOptions: {
        label: 'Read-only text input',
        description: 'This is a read-only field',
        readonly: true
      }
    },
    {
      key: 'disabled',
      type: 'input',
      templateOptions: {
        label: 'Disabled text input',
        description: 'This is a disabled field',
        disabled: true
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Checkbox',
        description: 'Checkboxes can have a description too.',
        required: true
      }
    },
    {
      key: 'checkbox-disabled',
      type: 'checkbox',
      templateOptions: {
        label: 'Disabled checkboxes cannot be interacted with',
        disabled: true
      }
    },
    {
      key: 'attachments',
      type: 'file',
      templateOptions: {
        label: 'Attachments',
        description: 'One or more text or image files can be uploaded',
        required: true,
        accept: 'image/*,text/*',
        icon: 'file-text-o',
        alwaysShow: true
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

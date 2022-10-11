import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { C8yJSONSchema } from '@c8y/ngx-components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { JSONSchema7 } from 'json-schema';

const exampleSchema: object = {
  $schema: 'https://json-schema.org/draft/2019-09/schema',
  type: 'object',
  properties: {
    fixedValue: {
      type: 'string',
      const: 'This is a constant value presented as hidden input'
    },
    text: {
      type: 'string',
      title: 'Simple text input',
      description: '…and some short description.',
      examples: ['You can provide some examples displayed as placeholder…']
    },
    'required-field': {
      type: 'string',
      title: 'Required text input',
      description:
        'A longer description can also be provided. It will be displayed in a tooltip next to the label.',
      examples: ['Enter some very important, required text']
    },
    'radio-group': {
      type: 'string',
      enum: ['Radio One', 'Radio Two', 'Radio Three'],
      title: 'Radio button group',
      description: 'Let the user select one option of a given range of options.'
    },
    checkbox: {
      type: 'boolean',
      title: 'Checkbox',
      description: 'Checkboxes can have a description too.',
      default: 'true'
    },
    list: {
      title: 'List of items',
      description: 'You can also declare a list of inputs',
      minItems: 1,
      type: 'array',
      items: {
        type: 'string',
        title: 'URL',
        pattern: '(http|https)://(\\S+)'
      }
    },
    password: {
      type: 'string',
      title: 'Password',
      examples: ['Some very secure password'],
      writeOnly: true
    },
    image: {
      type: 'string',
      title: 'File upload',
      description:
        'You can use file upload component to let users send files. This input would accept only a single PNG image file.',
      contentEncoding: 'base64',
      contentMediaType: 'image/png'
    }
  },
  required: ['provider', 'required-field', 'list', 'radio-group'],
  additionalProperties: false
};

@Component({
  selector: 'c8y-json-schema-example',
  templateUrl: './json-schema-example.component.html'
})
export class JSONSchemaExampleComponent {
  readonly pageTitle = 'Dynamic forms';
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    this.jsonschema.toFieldConfig(exampleSchema, {
      map(mappedField: FormlyFieldConfig, mapSource: JSONSchema7) {
        return mappedField;
      }
    })
  ];

  constructor(
    public jsonschema: C8yJSONSchema,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

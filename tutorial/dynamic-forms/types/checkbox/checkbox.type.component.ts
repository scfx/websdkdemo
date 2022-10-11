import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'c8y-field-checkbox',
  templateUrl: './checkbox.type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomFieldCheckbox extends FieldType {
  defaultOptions = {
    templateOptions: {
      indeterminate: true,
      formCheck: 'custom'
    }
  };
}

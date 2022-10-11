import { Component } from '@angular/core';

@Component({
  selector: 'cmp-lazy2',
  template: `
    <c8y-title>Lazy Component </c8y-title>
    <div class="card">
      <div class="card-block">
        <p>This module was lazy loaded</p>
      </div>
    </div>
  `,
  styles: [``]
})
export class ComponentTwo {}

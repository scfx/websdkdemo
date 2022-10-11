import { Component } from '@angular/core';

@Component({
  selector: 'c8y-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {
  sampleConfig: string = `ProviderConfigurationModule.config([
  {
    navigation: { ... },
    layout: { ... },
    endpoint: {
      definitionsEndpoint: {
        baseUrl: 'service/demo/providers', // replace with your provider definitions base URL part
        listUrl: 'definitions' // replace with your provider definitions list URL part
      },
      configurationEndpoint: {
        baseUrl: 'service/demo/providers', // replace with your provider configuration base URL part
        listUrl: 'configuration' // replace with your provider configuration list URL part
      }
    }
  }
])`;
}

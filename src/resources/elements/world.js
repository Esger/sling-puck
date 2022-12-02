import { inject } from 'aurelia-framework';
import { RenderService } from 'services/render-service';

@inject(RenderService)
export class WorldCustomElement {
  constructor(renderservice) {
    this.gameTitle = 'Sling|Puck';
    this._renderService = renderservice;
  }
  attached() {
    this._renderService.start();
  }

}

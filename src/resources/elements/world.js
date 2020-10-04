import { inject } from 'aurelia-framework';
import { PlanckJs } from 'planck-js';

export class WorldCustomElement {
  constructor() {
    this.message = 'Sling|Puck';
  }
  attached() {
    console.log('yo');
  }
}

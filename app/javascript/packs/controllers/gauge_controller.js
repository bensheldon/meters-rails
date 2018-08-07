import ActionCable from 'actioncable';
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["value"];

  connect() {
    const cable = ActionCable.createConsumer();
    cable.subscriptions.create('GaugesChannel', {
      received: (data) => {
        console.log(data);
        const element = this.valueTarget;
        element.innerHTML = data;
      }
    });
  }
}
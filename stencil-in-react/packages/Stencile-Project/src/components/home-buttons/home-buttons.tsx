import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'home-buttons',
  styleUrl: 'home-buttons.css',
  shadow: true
})
export class HomeButtons {
 
  @Prop() buttonTitle: string = 'Danger Button';
  @State() openModalState: boolean = false;

  render() {
    return (
    <div class ="button.css">
       {this.buttonTitle}
    </div>
    );
  }

}

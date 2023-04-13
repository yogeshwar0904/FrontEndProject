import { Component,Prop,State, h } from '@stencil/core';

@Component({
  tag: 'home-header',
  styleUrl: 'home-header.css',
  shadow: true,
})
export class HomeHeader {
  @Prop() haederTitle: string = 'Header';
  @State() openModalState: boolean = false;
  
  render() {
    return (
      <div class="my-header">
      {this.haederTitle}
  </div>
    );
  }

}

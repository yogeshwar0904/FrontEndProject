import { Component,  Prop, h, State } from '@stencil/core';

@Component({
  tag: 'home-footer',
  styleUrl: 'home-footer.css',
  shadow: true,
})
export class HomeFooter {
 @Prop() homeTitle : string ='Footer';
 @State() openModalState : boolean = false;

  render() {
    return (
     <div class='my-footer'>
       {this.homeTitle}
     </div>
    );
  }

}

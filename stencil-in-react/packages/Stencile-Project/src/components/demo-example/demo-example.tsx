import { Component, Host, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'demo-example',
  styleUrl: 'demo-example.css',
  shadow: true,
})

export class DemoExample {

/**
 * 
 * The first name 
 */
@Prop() title: string;

/**
 * The middle name
 */
 @Prop() content :string;
 @State() openModalState : boolean = false;

 @Method()
 openModal() {
  this.openModalState = true;
 }

 closeModal() {
  this.openModalState = false;
 }
  render() {
    if (!this.openModalState) {
      return <div></div>
    }
    return (
      <div class="backdrop-div">

      <div class="modal-div">
        <div onClick={() => this.closeModal()}>close</div>
        <h4 class="modal-header"> {this.title}</h4>
        <h4>{this.content}</h4>
      </div>
    </div>

    );
  }

}

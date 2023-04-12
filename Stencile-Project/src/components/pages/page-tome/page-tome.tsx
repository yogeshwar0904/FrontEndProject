import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-tome',
  styleUrl: 'page-tome.css',
  shadow: true,
})
export class PageTome {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

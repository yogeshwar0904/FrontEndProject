import { newSpecPage } from '@stencil/core/testing';
import { HomeButtons } from '../home-buttons';

describe('home-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeButtons],
      html: `<home-buttons></home-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <home-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-buttons>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { HomeCards } from '../home-cards';

describe('home-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeCards],
      html: `<home-cards></home-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <home-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-cards>
    `);
  });
});

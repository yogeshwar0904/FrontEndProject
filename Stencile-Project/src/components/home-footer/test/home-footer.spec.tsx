import { newSpecPage } from '@stencil/core/testing';
import { HomeFooter } from '../home-footer';

describe('home-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeFooter],
      html: `<home-footer></home-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <home-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-footer>
    `);
  });
});

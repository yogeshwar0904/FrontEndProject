import { newSpecPage } from '@stencil/core/testing';
import { HomeHeader } from '../home-header';

describe('home-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeHeader],
      html: `<home-header></home-header>`,
    });
    expect(page.root).toEqualHtml(`
      <home-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-header>
    `);
  });
});

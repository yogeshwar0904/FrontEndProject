import { newSpecPage } from '@stencil/core/testing';
import { PageTome } from '../page-tome';

describe('page-tome', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageTome],
      html: `<page-tome></page-tome>`,
    });
    expect(page.root).toEqualHtml(`
      <page-tome>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-tome>
    `);
  });
});

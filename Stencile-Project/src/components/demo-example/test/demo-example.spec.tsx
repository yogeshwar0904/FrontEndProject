import { newSpecPage } from '@stencil/core/testing';
import { DemoExample } from '../demo-example';

describe('demo-example', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoExample],
      html: `<demo-example></demo-example>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-example>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-example>
    `);
  });
});

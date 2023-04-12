import { newE2EPage } from '@stencil/core/testing';

describe('demo-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-example></demo-example>');

    const element = await page.find('demo-example');
    expect(element).toHaveClass('hydrated');
  });
});

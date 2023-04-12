import { newE2EPage } from '@stencil/core/testing';

describe('home-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-header></home-header>');

    const element = await page.find('home-header');
    expect(element).toHaveClass('hydrated');
  });
});

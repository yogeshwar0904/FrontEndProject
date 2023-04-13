import { newE2EPage } from '@stencil/core/testing';

describe('home-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-cards></home-cards>');

    const element = await page.find('home-cards');
    expect(element).toHaveClass('hydrated');
  });
});

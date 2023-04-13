import { newE2EPage } from '@stencil/core/testing';

describe('home-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-footer></home-footer>');

    const element = await page.find('home-footer');
    expect(element).toHaveClass('hydrated');
  });
});

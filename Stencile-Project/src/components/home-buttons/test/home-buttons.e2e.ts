import { newE2EPage } from '@stencil/core/testing';

describe('home-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-buttons></home-buttons>');

    const element = await page.find('home-buttons');
    expect(element).toHaveClass('hydrated');
  });
});

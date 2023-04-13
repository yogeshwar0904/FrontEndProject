import { newE2EPage } from '@stencil/core/testing';

describe('page-tome', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-tome></page-tome>');

    const element = await page.find('page-tome');
    expect(element).toHaveClass('hydrated');
  });
});

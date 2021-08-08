import {expect, fixture} from '@open-wc/testing';
import {html} from 'lit';
import WlIcon from './icon';

describe('Icon', () => {
  before(async () => {
    await import('./icon');
  });

  it('should render', async () => {
    const el = await fixture<WlIcon>(html` <wl-icon></wl-icon> `);

    await expect(el).shadowDom.to.equalSnapshot();
  });
});

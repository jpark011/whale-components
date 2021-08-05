import {expect, fixture} from '@open-wc/testing';
import {html} from 'lit';
import WlButton from './button';

describe('Button', () => {
  before(async () => {
    await import('./button');
  });

  it('should render', async () => {
    const el = await fixture<WlButton>(html` <wl-button></wl-button> `);

    await expect(el).shadowDom.to.equalSnapshot();
  });
});

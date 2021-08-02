import {expect, fixture, html} from '@open-wc/testing';
import WlButton from './button';

describe('Button', () => {
  beforeEach(async () => {
    await import('./button');
  });

  it('should render', async () => {
    const el = await fixture<WlButton>(html` <wl-button></wl-button> `);

    expect(el).shadowDom.to.equal('<button><slot></slot></button>');
  });
});

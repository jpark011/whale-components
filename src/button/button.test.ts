import {expect, fixture, html} from '@open-wc/testing';
import BwButton from './button';

describe('Button', () => {
  beforeEach(async () => {
    await import('./button');
  });

  it('should render', async () => {
    const el = await fixture<BwButton>(html` <bw-button></bw-button> `);

    expect(el).shadowDom.to.equal('<button><slot></slot></button>');
  });
});

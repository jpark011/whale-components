import {expect, fixture} from '@open-wc/testing';
import {html} from 'lit';
import {spy} from 'sinon';
import WlButton from './button';

describe('Button', () => {
  before(async () => {
    await import('./button');
  });

  it('should render', async () => {
    const el = await fixture<WlButton>(html`<wl-button></wl-button>`);

    await expect(el).shadowDom.to.equalSnapshot();
  });

  it('should be disabled', async () => {
    const el = await fixture<WlButton>(html`<wl-button disabled></wl-button>`);

    expect(el.disabled).to.equal(true);
    expect(el.shadowRoot?.querySelector('button')?.disabled).to.equal(true);
  });

  it('should dispatch click event', async () => {
    const el = await fixture<WlButton>(html`<wl-button></wl-button>`);
    const onClick = spy();

    el.addEventListener('click', onClick);
    el.shadowRoot?.querySelector('button')?.click();

    expect(onClick.calledOnce).to.equal(true);
  });
});

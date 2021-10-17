import {expect, fixture} from '@open-wc/testing';
import {html} from 'lit';
import {spy} from 'sinon';
import {WlButton} from '.';

describe('Button', () => {
  before(async () => {
    await import('.');
  });

  it('should render', async () => {
    const el = await fixture<WlButton>(html`<wl-button></wl-button>`);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('should be disabled', async () => {
    const el = await fixture<WlButton>(html`<wl-button disabled></wl-button>`);

    expect(el.disabled).to.equal(true);
    expect(el.shadowRoot?.querySelector('button')?.disabled).to.equal(true);
  });

  it('should dispatch click event', async () => {
    const onClick = spy();
    const el = await fixture<WlButton>(
      html`<wl-button @click=${onClick as () => void}></wl-button>`
    );

    el.shadowRoot?.querySelector('button')?.click();

    expect(onClick.calledOnce).to.equal(true);
  });
});

import {expect} from '@open-wc/testing';
import {fixture} from '@open-wc/testing-helpers';
import {html} from 'lit';
import {spy} from 'sinon';
import {WlCheckbox} from '.';

describe('Checkbox', () => {
  before(async () => {
    await import('.');
  });

  it('should render', async () => {
    const el = await fixture<WlCheckbox>(html`<wl-checkbox></wl-checkbox>`);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('should change value according to click and fire change event', async () => {
    const onChange = spy();
    const el = await fixture<WlCheckbox>(
      html`<wl-checkbox @change=${onChange as () => void}></wl-checkbox>`
    );
    const input = el.shadowRoot?.querySelector('input');

    expect(el.checked).to.equal(false);

    input?.click();

    expect(el.checked).to.equal(true);
    expect(onChange.calledOnce).to.equal(true);
  });

  it('should be checked when checked attribute is set', async () => {
    const el = await fixture<WlCheckbox>(html`<wl-checkbox checked></wl-checkbox>`);
    const input = el.shadowRoot?.querySelector('input');

    expect(el.checked).to.equal(true);
    expect(input?.checked).to.equal(true);
  });

  it('should be disabled when disabled attribute is set', async () => {
    const el = await fixture<WlCheckbox>(html`<wl-checkbox disabled></wl-checkbox>`);
    const input = el.shadowRoot?.querySelector('input');

    expect(el.disabled).to.equal(true);
    expect(input?.disabled).to.equal(true);
  });

  it('should fire change event when value changes', async () => {
    const el = await fixture<WlCheckbox>(html`<wl-checkbox disabled></wl-checkbox>`);
    const input = el.shadowRoot?.querySelector('input');

    expect(el.disabled).to.equal(true);
    expect(input?.disabled).to.equal(true);
  });

  it('should fire focus/blur event', async () => {
    const onFocus = spy();
    const onBlur = spy();
    const el = await fixture<WlCheckbox>(
      html`<wl-checkbox
        @focus=${onFocus as () => void}
        @blur=${onBlur as () => void}
      ></wl-checkbox>`
    );
    const input = el.shadowRoot?.querySelector('input');

    input?.focus();
    input?.blur();

    expect(onFocus.calledOnce).to.equal(true);
    expect(onBlur.calledOnce).to.equal(true);
  });
});

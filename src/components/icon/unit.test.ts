import {elementUpdated, expect, fixture} from '@open-wc/testing';
import {html} from 'lit';
import {spy} from 'sinon';
import WlIcon from '.';

describe('Icon', () => {
  before(async () => {
    await import('.');
  });

  it('should render', async () => {
    const el = await fixture<WlIcon>(html`<wl-icon></wl-icon>`);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('should re-render when name changes', async () => {
    const el = await fixture<WlIcon>(html`<wl-icon></wl-icon>`);
    const renderSpy = spy(el, 'render');
    const name = 'video-outline';

    el.name = name;
    await elementUpdated(el);

    expect(el.getAttribute('name')).to.equal(name);
    expect(renderSpy.called).to.equal(true);
  });

  it('should re-render when size changes', async () => {
    const el = await fixture<WlIcon>(html`<wl-icon></wl-icon>`);
    const renderSpy = spy(el, 'render');
    const size = 64;

    el.size = size;
    await elementUpdated(el);

    expect(el.getAttribute('size')).to.equal(`${size}`);
    expect(renderSpy.called).to.equal(true);
  });
});

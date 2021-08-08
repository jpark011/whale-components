import {css, LitElement, PropertyValues, svg, TemplateResult} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

const style = css``;

@customElement('wl-icon')
export default class WlIcon extends LitElement {
  static styles = [style];

  @property({reflect: true})
  name = 'question-mark-circle-outline';

  @state()
  icon = '';

  async updated(changedProps: PropertyValues): Promise<void> {
    if (changedProps.has('name')) {
      this.icon = await import(`../../assets/icons/eva/${this.name}.svg`).then(
        (module) => module.default
      );
    }
  }

  render(): TemplateResult {
    return svg` ${unsafeSVG(this.icon)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-icon': WlIcon;
  }
}

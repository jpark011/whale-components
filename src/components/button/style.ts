import {css} from 'lit';
import {grey, primary, primaryDark, primaryLight, white, whiteDark} from '../../utils/colors';

export const primaryStyle = css`
  :host {
    --wl-button-text-color: var(--wl-color-grey-100, ${white});

    --wl-button-background-color: var(--wl-color-primary-500, ${primary});
    --wl-button-hover-background-color: var(--wl-color-primary-300, ${primaryLight});
    --wl-button-active-background-color: var(--wl-color-primary-700, ${primaryDark});
    --wl-button-disabled-background-color: var(--wl-color-grey-500, ${grey});

    display: inline-block;
  }

  button {
    background-color: var(--wl-button-background-color);
    color: var(--wl-button-text-color);
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  button:hover {
    background-color: var(--wl-button-hover-background-color);
    color: var(--wl-button-text-color);
  }

  button:active {
    background-color: var(--wl-button-active-background-color);
  }

  button:disabled {
    background-color: var(--wl-button-disabled-background-color);
    cursor: not-allowed;
  }
`;

export const secondaryStyle = css`
  :host([type='secondary']) {
    --wl-button-text-color: var(--wl-color-primary-500, ${primary});

    --wl-button-background-color: var(--wl-color-grey-100, ${white});
    --wl-button-hover-background-color: var(--wl-color-grey-300, ${whiteDark});
    --wl-button-active-background-color: var(--wl-color-grey-500, ${primaryLight});
  }

  button.secondary {
    border: 2px solid var(--wl-button-text-color);
  }
`;

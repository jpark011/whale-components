export function buildEvent(name: string, options?: CustomEventInit) {
  return new CustomEvent(name, {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail: {},
    ...options,
  });
}

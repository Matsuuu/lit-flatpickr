// @ts-ignore
const FLATPICKR_VERSION = window._FLATPICKR_VERSION || '4.6.13';

let CDN_BASE = `https://unpkg.com/flatpickr@${FLATPICKR_VERSION}/dist/`;

export function setCDNBase(cdnBaseUrl: string) {
  CDN_BASE = cdnBaseUrl;
}

export function getCDNBase() {
  return CDN_BASE;
}

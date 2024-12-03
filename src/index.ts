import { registerPlugin } from '@capacitor/core';

import type { NfcReaderPlugin } from './definitions';

const NfcReader = registerPlugin<NfcReaderPlugin>('NfcReader', {
  web: () => import('./web').then((m) => new m.NfcReaderWeb()),
});

export * from './definitions';
export { NfcReader };

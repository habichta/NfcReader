import { WebPlugin } from '@capacitor/core';

import type { NfcReaderPlugin } from './definitions';

export class NfcReaderWeb extends WebPlugin implements NfcReaderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async testPluginMethod(options: { value: string }): Promise<{ value: string }> {
    console.log('testPluginMethod', options);
    return options;
  }
}

declare module '@capacitor/core' {
  interface PluginRegistry {
    NfcReader: NfcReaderPlugin;
  }
}

export interface NfcReaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  testPluginMethod(options: { value: string }): Promise<{ value: string }>;
}

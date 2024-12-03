export interface NfcReaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

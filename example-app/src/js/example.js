import { NfcReader } from 'capacitor-nfc-reader';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    NfcReader.echo({ value: inputValue })
}

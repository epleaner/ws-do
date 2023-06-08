export class MIDIHandler {
  constructor(synth) {
    console.log('Midihandler constructor', navigator);
    // Request access to Web MIDI API
    navigator.requestMIDIAccess().then(this.onMIDISuccess, this.onMIDIFailure);
    this.synth = synth;
  }

  onMIDIMessage(message) {
    // Extract MIDI data
    const [status, note, velocity] = message.data;

    // Check if the message is from the selected input device
    const selectedInput = this.midiAccess.inputs.get(this.selectedDeviceId);
    if (selectedInput === message.target) {
      if (status === 144 && velocity > 0) {
        // Note-on message
        // this.synth.playSynth(note, velocity);
        console.log('note on', note);
      } else if (status === 128 || (status === 144 && velocity === 0)) {
        // Note-off message
        // this.stopSynth(note);
        console.log('note on', note);
      }
    }
  }

  onMIDISuccess(access) {
    this.midiAccess = access;

    // Get the list of available MIDI devices
    const devices = this.midiAccess.inputs.values();
    const selectElement = document.getElementById('device-select');

    // Populate the device select options
    for (let device of devices) {
      const optionElement = document.createElement('option');
      optionElement.value = device.id;
      optionElement.text = device.name;
      selectElement.appendChild(optionElement);
    }

    // Add event listener for device selection
    selectElement.addEventListener('change', this.onDeviceSelect);

    // Listen for MIDI messages
    for (let input of this.midiAccess.inputs.values()) {
      input.onmidimessage = this.onMIDIMessage;
    }
  }

  onMIDIFailure() {
    console.log('Failed to access MIDI devices');
  }

  onDeviceSelect(event) {
    this.selectedDeviceId = event.target.value;

    // Close existing MIDI inputs
    navigator.requestMIDIAccess().then((midiAccess) => {
      for (let input of midiAccess.inputs.values()) {
        input.onmidimessage = null;
      }

      // Stop all active voices
      for (let voice of this.synth.voices) {
        voice.stop();
      }
      this.synth.voices = []; // Clear the voices array

      // Listen for MIDI messages on the selected input
      const selectedInput = midiAccess.inputs.get(this.selectedDeviceId);
      if (selectedInput) {
        selectedInput.onmidimessage = this.onMIDIMessage;
      }
    });
  }

  setupKeyboardListener() {
    // Keyboard event listener for Shift + Spacebar
    document.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.code === 'Space') {
        this.toggleMIDIDeviceSelect();
      }
    });
  }

  toggleMIDIDeviceSelect() {
    const deviceSelectContainer = document.getElementById(
      'device-select-container'
    );

    if (!deviceSelectContainer) return;

    if (deviceSelectContainer.style.display === 'none') {
      // Show MIDI device select container
      deviceSelectContainer.style.display = 'block';
    } else {
      // Hide MIDI device select container
      deviceSelectContainer.style.display = 'none';
    }
  }
}

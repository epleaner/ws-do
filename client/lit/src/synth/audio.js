//
//   synth + midi
//

// Request access to Web MIDI API
navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
let midiAccess;
let selectedDeviceId;

function onMIDISuccess(access) {
  midiAccess = access;

  // Get the list of available MIDI devices
  const devices = midiAccess.inputs.values();
  const selectElement = document.getElementById('device-select');

  // Populate the device select options
  for (let device of devices) {
    const optionElement = document.createElement('option');
    optionElement.value = device.id;
    optionElement.text = device.name;
    selectElement.appendChild(optionElement);
  }

  // Add event listener for device selection
  selectElement.addEventListener('change', onDeviceSelect);

  // Listen for MIDI messages
  for (let input of midiAccess.inputs.values()) {
    input.onmidimessage = onMIDIMessage;
  }
}

function onMIDIFailure() {
  console.log('Failed to access MIDI devices');
}

// Create the audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create a polyphonic synthesizer
function PolySynth() {
  this.voices = [];
}

PolySynth.prototype.playNote = function (note, velocity) {
  console.log('playing note');
  // Create a voice for the note
  const voice = new Voice(audioContext, note, velocity);
  this.voices.push(voice);

  // Start the voice
  voice.start();
};

PolySynth.prototype.stopNote = function (note) {
  console.log('stopping note');
  // Find the voice playing the note
  const voiceIndex = this.voices.findIndex((voice) => voice.note === note);

  if (voiceIndex !== -1) {
    // Stop and remove the voice
    const voice = this.voices[voiceIndex];
    voice.stop();
    this.voices.splice(voiceIndex, 1);
  }
};

function Voice(audioContext, note, velocity) {
  this.audioContext = audioContext;
  this.note = note;
  this.velocity = velocity;

  // Create an oscillator
  this.oscillator = this.audioContext.createOscillator();
  this.oscillator.frequency.value = getFrequency(note);

  // Create a gain node
  this.gainNode = this.audioContext.createGain();
  this.gainNode.gain.value = velocity / 127;

  // Connect the oscillator to the gain node and the gain node to the audio context destination
  this.oscillator.connect(this.gainNode);
  this.gainNode.connect(this.audioContext.destination);
}

Voice.prototype.start = function () {
  // Start the oscillator
  this.oscillator.start();
};

Voice.prototype.stop = function () {
  // Stop the oscillator smoothly over 500ms
  this.gainNode.gain.linearRampToValueAtTime(
    0,
    this.audioContext.currentTime + 0.5
  );

  // Stop the oscillator completely after 500ms
  this.oscillator.stop(this.audioContext.currentTime + 0.5);
};

// Helper function to calculate frequency from MIDI note number
function getFrequency(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

// Create an instance of the polyphonic synthesizer

const synth = new PolySynth();

function onMIDIMessage(message) {
  console.log('midi message', message);
  // Extract MIDI data
  const [status, note, velocity] = message.data;

  // Check if the message is from the selected input device
  const selectedInput = midiAccess.inputs.get(selectedDeviceId);
  if (selectedInput === message.target) {
    console.log('its target');
    if (status === 144 && velocity > 0) {
      // Note-on message
      playSynth(note, velocity);
    } else if (status === 128 || (status === 144 && velocity === 0)) {
      // Note-off message
      stopSynth(note);
    }
  }
}

function playSynth(note, velocity) {
  // Play the note using the synthesizer
  synth.playNote(note, velocity);
}

function stopSynth(note) {
  // Stop the note using the synthesizer
  synth.stopNote(note);
}

function onDeviceSelect(event) {
  selectedDeviceId = event.target.value;

  // Close existing MIDI inputs
  navigator.requestMIDIAccess().then(function (midiAccess) {
    for (let input of midiAccess.inputs.values()) {
      input.onmidimessage = null;
    }

    // Stop all active voices
    for (let voice of synth.voices) {
      voice.stop();
    }
    synth.voices = []; // Clear the voices array

    // Listen for MIDI messages on the selected input
    const selectedInput = midiAccess.inputs.get(selectedDeviceId);
    if (selectedInput) {
      selectedInput.onmidimessage = onMIDIMessage;
    }
  });
}

// Keyboard event listener for Shift + Spacebar
document.addEventListener('keydown', function (event) {
  if (event.shiftKey && event.code === 'Space') {
    toggleMIDIDeviceSelect();
  }
});

function toggleMIDIDeviceSelect() {
  const deviceSelectContainer = document.getElementById(
    'device-select-container'
  );

  if (deviceSelectContainer.style.display === 'none') {
    // Show MIDI device select container
    deviceSelectContainer.style.display = 'block';
  } else {
    // Hide MIDI device select container
    deviceSelectContainer.style.display = 'none';
  }
}

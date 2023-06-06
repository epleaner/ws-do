export class PolySynth {
  constructor() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.voices = [];
  }

  playNote(note, velocity) {
    // Create a voice for the note
    const voice = new Voice(this.audioContext, note, velocity);
    this.voices.push(voice);

    // Start the voice
    voice.start();
  }

  stopNote(note) {
    // Find the voice playing the note
    const voice = this.voices.find((voice) => voice.note === note);

    if (voice) {
      // Stop and remove the voice
      voice.stop();
      this.voices = this.voices.filter((v) => v !== voice);
    }
  }
}

class Voice {
  constructor(audioContext, note, velocity) {
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

  start() {
    // Start the oscillator
    this.oscillator.start();
  }

  stop() {
    // Stop the oscillator smoothly over 500ms
    this.gainNode.gain.linearRampToValueAtTime(
      0,
      this.audioContext.currentTime + 0.5
    );

    // Stop the oscillator completely after 500ms
    this.oscillator.stop(this.audioContext.currentTime + 0.5);
  }
}

function getFrequency(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

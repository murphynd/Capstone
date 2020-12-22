export class Bass {
  constructor(ctx) {
    this.ctx = ctx;
    this.tone = 167.1;
    this.decay = 0.5;
    this.volume = 1;
  }

  setup() {
    this.osc = this.ctx.createOscillator();
    this.gain = this.ctx.createGain();
    this.osc.connect(this.gain);
    this.gain.connect(this.ctx.destination);
  }
  trigger(time) {
    if (this.volume === 0) {
      return;
    }
    this.setup();

    this.osc.frequency.setValueAtTime(this.tone, time);
    this.gain.gain.linearRampToValueAtTime(this.volume, time);
    this.osc.frequency.exponentialRampToValueAtTime(1, time);
    this.gain.gain.linearRampToValueAtTime(0, time);
    this.osc.start(time);
    this.osc.stop(time);
  }
  setTone = (tone) => {
    this.tone = tone;
  };
  setVolume = (vol) => {
    this.volume = vol;
  };
}

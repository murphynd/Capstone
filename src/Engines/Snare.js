export class Snare {
  constructor(ctx) {
    this.ctx = ctx;
    this.tone = 100;
    this.decay = 0.2;
    this.volume = 1;
  }

  setup() {
    this.noise = this.ctx.createBufferSource();
    this.noise.buffer = this.noiseBuffer();

    let noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 1000;
    this.noise.connect(noiseFilter);

    this.noiseEnvelope = this.ctx.createGain();
    noiseFilter.connect(this.noiseEnvelope);

    this.noiseEnvelope.connect(this.ctx.destination);

    this.osc = this.ctx.createOscillator();
    this.osc.type = "triangle";

    this.oscEnvelope = this.ctx.createGain();
    this.osc.connect(this.oscEnvelope);
    this.oscEnvelope.connect(this.ctx.destination);
  }
  trigger(time) {
    if (this.volume === 0) {
      return;
    }
    this.setup();
    this.noiseEnvelope.gain.setValueAtTime(this.volume, time);
    this.noiseEnvelope.gain.exponentialRampToValueAtTime(
      0.01,
      time + this.decay
    );
    this.noise.start(time);

    this.osc.frequency.setValueAtTime(this.tone, time);
    this.oscEnvelope.gain.setValueAtTime(0.7 * this.volume, time);
    this.oscEnvelope.gain.exponentialRampToValueAtTime(
      0.01 * this.volume,
      time + this.decay / 2
    );

    this.osc.start(time);
    this.osc.stop(time + this.decay);
    this.noise.stop(time + this.decay);
  }
  setTone = (tone) => {
    this.tone = tone;
  };
  setVolume = (vol) => {
    this.volume = vol;
  };
}

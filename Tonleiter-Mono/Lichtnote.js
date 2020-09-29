var scale;
var dist;

var violin;

var dev;
var doremi;
var ckeys;

var polySynth;
var piano;
var guitar;
var organ;
var edm;

var title;
var solmisation;
var notennamen;
var knaben;
var bass;
var tonartenDiv;
var tonarten;

function setup() {
  title = createP('Lichtnote');
  title.class('title')

  subtitleDiv = createDiv();
  subtitleDiv.class('subtitleDiv');
  solmisation = createCheckbox('Solmisation', false);
  solmisation.changed(toggleSolmisation);
  solmisation.parent(subtitleDiv);
  notennamen = createCheckbox('Notennamen', false);
  notennamen.changed(toggleNotennamen);
  notennamen.parent(subtitleDiv);

  tonartenDiv = createDiv();
  tonartenDiv.class('dropdown');
  tonarten = createSelect('tonarten');

  bass = createCheckbox('Bassschlüssel', false);
  bass.id('bass');

  sound = createCheckbox('Sound', false);
  sound.id('sound');
  //tonarten.position(10, 10);
  tonarten.option('B-Dur');
  tonarten.option('F-Dur');
  tonarten.option('C-Dur');
  tonarten.option('G-Dur');
  tonarten.option('D-Dur');
  tonarten.option('d-Moll');
  tonarten.option('a-Moll');
  tonarten.option('e-Moll');
  tonarten.class('dropdown');
  tonarten.value('C-Dur');
  tonarten.parent(tonartenDiv);
  tonarten.changed(changeTonart);

  pixelDensity(4.0);
  createCanvas(windowWidth, windowHeight/2);

  scale = 0.1;
  dist = 250 * scale;

  dev = false;
  doremi = "";
  ckeys = 0;

  polySynth = new p5.PolySynth();
  piano = Synth.createInstrument('piano');
  organ = Synth.createInstrument('organ');
  guitar = Synth.createInstrument('acoustic');
  edm = Synth.createInstrument('edm');

  eins = new NotenzeileViolin(new CDur());

  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(height/18);

  violin = loadImage('violin.png');

  smooth();
}

function draw() {
  background(255,255,255);
  eins.show();
  gui();
}

function noteWo(s) {
  return (height / 2 + dist * 3 - dist / 2 * s);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight/2);
}

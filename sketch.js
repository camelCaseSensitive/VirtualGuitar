let A = () => new Audio ("A.mp3")
let Bb = () => new Audio ("Bb.mp3")
let B = () => new Audio ("B.mp3")
let C = () => new Audio ("C.mp3")
let Db = () => new Audio ("Db.mp3")
let D = () => new Audio ("D.mp3")
let Eb = () => new Audio ("Eb.mp3")
let E = () => new Audio ("E.mp3")
let F = () => new Audio ("F.mp3")
let Gb = () => new Audio ("Gb.mp3")
let G = () => new Audio ("G.mp3")
let Ab = () => new Audio ("Ab.mp3")
let A2 = () => new Audio ("A2.mp3")

let aString = [A, Bb, B, C, Db, D, Eb, E, F, Gb]
let aKeys = [90, 88, 67, 86, 66, 78, 77, 188, 190, 191];
let a = {0: A, 90: Bb, 88: B, 67: C, 86: Db, 66: D, 78: Eb, 77: E, 188: F, 190: Gb, 191: G}

let DD = () => new Audio ("DD.mp3")
let DEb = () => new Audio ("DEb.mp3")
let DE = () => new Audio ("DE.mp3")
let DF = () => new Audio ("DF.mp3")
let DGb = () => new Audio ("DGb.mp3")
let DG = () => new Audio ("DG.mp3")
let DAb = () => new Audio ("DAb.mp3")
let DA = () => new Audio ("DA.mp3")
let DBb = () => new Audio ("DBb.mp3")
let DB = () => new Audio ("DB2.mp3")
let DC = () => new Audio ("DC.mp3")
let DDb = () => new Audio ("DDb.mp3")
let DD2 = () => new Audio ("DD2.mp3")

let dString = [DD, DEb, DE, DF, DGb, DG, DAb, DA, DBb, DB, DC, DDb, DD2]
let dKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222]
let d = {0: DD, 65: DEb, 83: DE, 68: DF, 70: DGb, 71: DG, 72: DAb, 74: DA, 75: DBb, 76: DB, 186: DC, 222: DDb}

let GG = () => new Audio ("GG.mp3")
let GAb = () => new Audio ("GAb.mp3")
let GA = () => new Audio ("GA.mp3")
let GBb = () => new Audio ("GBb.mp3")
let GB = () => new Audio ("GB2.mp3")
let GC = () => new Audio ("GC.mp3")
let GDb = () => new Audio ("GDb.mp3")
let GD = () => new Audio ("GD.mp3")
let GEb = () => new Audio ("GEb.mp3")
let GE = () => new Audio ("GE.mp3")
let GF = () => new Audio ("GF.mp3")
let GGb = () => new Audio ("GGb.mp3")
let GG2 = () => new Audio ("GG2.mp3")

let gString = [GG, GAb, GA, GBb, GB, GC, GDb, GD, GEb, GE, GF, GGb, GG2]
let gKeys = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219]
let g = {0: GG, 81: GAb, 87: GA, 69: GBb, 82: GB, 84: GC, 89: GDb, 85: GD, 73: GEb, 79: GE, 80: GF, 219: GGb}

function setup() {
  createCanvas(800, 400);
  yPrev = 0;
  stringSpacing = 75;
  fretSpacing = 50
  gY = 100;
  gFret = [0, 0, 0]
  dFret = [0, 0, 0]
  aFret = [0, 0, 0]
  dY = gY + stringSpacing;
  aY = dY + stringSpacing;
  counter = 0;
  gBuzz = 0;
  dBuzz = 0;
  aBuzz = 0;
}

function draw() {
  counter += 0.8
  gBuzz *= 0.96;
  dBuzz *= 0.975;
  aBuzz *= 0.98;
  let bgc = 230
  background(bgc);
  
  fill('#4E1C08')
  stroke('#4E1C08')
  rect(0, gY - 10, 50, stringSpacing*2 + 20)
  fill(240)
  rect(45, gY-10, 5, stringSpacing*2 + 20)
  
  fill('#DCB482')
  circle(width + 10, aY + 10, 400)
  rect(width - 185, 0, 300, 100)
  fill(bgc)
  stroke(bgc)
  circle(width - 175, -125, 410)
  
  // Fretboard
  fill('#1D191B')
  rect(50, gY - 10, width, stringSpacing*2 + 20)
  
  // Frets
  stroke('#A29D9E')
  for(let i = 0; i < 11; i++){
    line(50 + i*fretSpacing, gY-10, 50 + i*fretSpacing, aY + 10)
  }
  
  
  stroke('#DCB482')
  strokeWeight(0)
  fill(0)
  circle(width + 75, dY, 285)
  
  
  // Strings
  stroke('#EECB78')
  strokeWeight(1)
  line(50, gY + cos(counter)*gBuzz, width, gY + sin(counter)*gBuzz)
  strokeWeight(2)
  stroke('#BB933C')
  line(50, dY + cos(counter)*dBuzz, width, dY + sin(counter)*dBuzz)
  strokeWeight(3)
  stroke('#BB9748')
  line(50, aY + cos(counter)*aBuzz, width, aY + sin(counter)*aBuzz)
  
  
  
  
  stroke(255)
  fill(100)
  circle(mouseX, mouseY, 20)
  strokeWeight(1)
  
  let fretSet = false;
  // G String
  for(let i = 9; i >= 0; i--){
    if(keyIsDown(gKeys[i]) && fretSet == false){
      gFret = [50 + i*fretSpacing + fretSpacing/2, gY, 20]
      fretSet = true;
    }
  }
  if (fretSet == false){
    gFret = [50, gY, 20]
  }
  fill('red')
  circle(gFret[0], gFret[1], gFret[2])
  
  // D String
  fretSet = false;
  for(let i = 9; i >= 0; i--){
    if(keyIsDown(dKeys[i]) && fretSet == false){
      dFret = [50 + i*fretSpacing + fretSpacing/2, dY, 20]
      fretSet = true;
    }
  }
  if (fretSet == false){
    dFret = [50, dY, 20]
  }
  fill('green')
  circle(dFret[0], dFret[1], dFret[2])
  
  // A String
  fretSet = false;
  for(let i = 9; i >= 0; i--){
    if(keyIsDown(aKeys[i]) && fretSet == false){
      aFret = [50 + i*fretSpacing + fretSpacing/2, aY, 20]
      fretSet = true;
    }
  }
  if (fretSet == false){
    aFret = [50, aY, 20]
  }
  fill('blue')
  circle(aFret[0], aFret[1], aFret[2])
  
  
  // Detect strumming
  if(sign(mouseY-gY) != sign(yPrev-gY) && mouseX > 50){
    gBuzz = 2;
    let played = false;
    for(let i = 9; i >= 0; i--){
      if(keyIsDown(gKeys[i]) && played == false){
        g[gKeys[i]]().play()
        played = true
      }
    }
    
    if(played == false) {
      g[0]().play()
    }
  }
  
  if(sign(mouseY-dY) != sign(yPrev-dY) && mouseX > 50){
    dBuzz = 2;
    let played = false;
    for(let i = 9; i >= 0; i--){
      if(keyIsDown(dKeys[i]) && played == false){
        d[dKeys[i]]().play()
        played = true;
      }
    }
    
    if(played == false) {
      d[0]().play()
    }
  }
  if(sign(mouseY-aY) != sign(yPrev-aY) && mouseX > 50){
    aBuzz = 2;
    let played = false;
    for(let i = 9; i >= 0; i--){
      if(keyIsDown(aKeys[i])  && played == false){
        a[aKeys[i]]().play()
        played = true;
      }
    }
    
    if(played == false) {
      a[0]().play()
    }
  }
  yPrev = mouseY;
}

function sign(n) {
  if(n > 0) {
    return 1
  } else {
    return -1
  }
}
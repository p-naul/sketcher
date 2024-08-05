client.init(uid, { autostart: 1, autospin: 0, success: success, error: error });
//-----------------------------------------------------------
function dialogue1(phrase) {
  popup1.textContent = "";
  Go = 0;
  const mots = phrase.split(" ");
  let indexMot = 0;
  const intervalId = setInterval(() => {
    // window.console.log(indexMot, Go);
      if (indexMot < mots.length) {
          popup1.textContent += mots[indexMot] + " ";
          indexMot++;
      } else {
          clearInterval(intervalId); // Arrête l'affichage en fin de phrase
          setTimeout(() => { Go = 1;}, 2000);
      }
  }, 250); // Délai entre chaque mot (en millisecondes)
}
//-----------------------------------------------------------
function move(ID, TX, TY, TZ) {
  api.getMatrix(ID, function(err, matrix) {
    // window.console.log('matrix', matrix);
    matrix.local[12]=TX/1000;
    matrix.local[13]=TZ/1000;
    matrix.local[14]=TY/1000;
    matrice = matrix.local;
    // window.console.log('matrix', matrice);
    api.setMatrix(ID, matrice, function(err, matrix) {
    });
  });
}


function moveRotate(ID, vX1, vX2, vX3, vY1, vY2, vY3, vZ1, vZ2, vZ3, TX, TY, TZ) {
  api.getMatrix(ID, function(err, matrix) {
    // window.console.log('matrix', matrix);
    matrix.local[0]=vX1;
    matrix.local[1]=vX2;
    matrix.local[2]=vX3;
    matrix.local[4]=vY1;
    matrix.local[5]=vY2;
    matrix.local[6]=vY3;
    matrix.local[8]=vZ1;
    matrix.local[9]=vZ2;
    matrix.local[10]=vZ3;
    matrix.local[12]=TX/1000;
    matrix.local[13]=TZ/1000;
    matrix.local[14]=TY/1000;
    matrice = matrix.local;
    // window.console.log('matrix', matrice);
    api.setMatrix(ID, matrice, function(err, matrix) {
    });
  });
}
//-----------------------------------------------------------
function changerModeleSketchfab(nouvelIdentifiant) {
  // const iframe = document.getElementById('votre-iframe-id'); // Remplacez 'votre-iframe-id' par l'ID de votre balise <iframe>
  const nouvelleURL = `https://sketchfab.com/models/${nouvelIdentifiant}/embed`;
  iframe.src = nouvelleURL;
}

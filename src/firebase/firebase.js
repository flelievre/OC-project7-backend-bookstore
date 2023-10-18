const firebase = require('firebase-admin');
const serviceAccountSecrets = require('./secrets/dev.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccountSecrets),
  storageBucket: 'openclassrooms-bucket.appspot.com',
})

exports.default = firebase;

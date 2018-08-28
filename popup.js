// require('dotenv').config()
// const { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN } = process.env;

// // Initialize Firebase
// var config = {
// apiKey: FIREBASE_API_KEY,
// authDomain: FIREBASE_AUTH_DOMAIN,
// databaseURL: "https://tabby-3ece8.firebaseio.com",
// projectId: "tabby-3ece8",
// storageBucket: "tabby-3ece8.appspot.com",
// messagingSenderId: "142571884018"
// };
// firebase.initializeApp(config);

let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

  
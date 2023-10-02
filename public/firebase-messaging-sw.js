importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALoH5EEl4Lx0FvR-gVMTlrFznvyTrB0KY",
    authDomain: "agrotechpwa.firebaseapp.com",
    projectId: "agrotechpwa",
    storageBucket: "agrotechpwa.appspot.com",
    messagingSenderId: "749437763151",
    appId: "1:749437763151:web:fc7c1a6bcab71ccae8f43a"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

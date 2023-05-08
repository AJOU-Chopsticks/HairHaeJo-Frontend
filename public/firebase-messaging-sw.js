importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js"
);

const config = {
  apiKey: "AIzaSyCvGahWcp_S3NqEjoYmS80Gei6oHzDN2OI",
  authDomain: "hairhaejo-91afb.firebaseapp.com",
  projectId: "hairhaejo-91afb",
  storageBucket: "hairhaejo-91afb.appspot.com",
  messagingSenderId: "688506475138",
  appId: "1:688506475138:web:5b311f893315edea651a9b",
  measurementId: "G-7R2HCCSCES",
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();

//백그라운드 서비스워커 설정
messaging.onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: payload,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

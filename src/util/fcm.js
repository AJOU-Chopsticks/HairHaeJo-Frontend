import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const config = {
  apiKey: "AIzaSyCvGahWcp_S3NqEjoYmS80Gei6oHzDN2OI",
  authDomain: "hairhaejo-91afb.firebaseapp.com",
  projectId: "hairhaejo-91afb",
  storageBucket: "hairhaejo-91afb.appspot.com",
  messagingSenderId: "688506475138",
  appId: "1:688506475138:web:5b311f893315edea651a9b",
  measurementId: "G-7R2HCCSCES",
};

const app = initializeApp(config);
const messaging = getMessaging();

//토큰값 얻기
getToken(messaging, {
  vapidKey:
    "BDL_b33Cnjf7ohhAKM1Zba-ym7POtMSBEE4Jaajwq9ByC0TIZuT8t_m9CNRxKLjhbNJnJajbhKGd4d_6g-VRKgw",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      localStorage.setItem("fcmToken", currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

//포그라운드 메시지 수신
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUNIpAlkbhi-AEnmy-CGxQLRdp1tvDkpQ",
  authDomain: "dhana-photos.firebaseapp.com",
  projectId: "dhana-photos",
  storageBucket: "dhana-photos.firebasestorage.app",
  messagingSenderId: "785350883394",
  appId: "1:785350883394:web:dab26e07df8bfb797015db"
};

const app = initializeApp(firebaseConfig);

export { app };
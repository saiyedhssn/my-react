
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEAx9CSyJW3L4btYfmESp520fldigCMg4",
  authDomain: "raproject-f67cb.firebaseapp.com",
  projectId: "raproject-f67cb",
  storageBucket: "raproject-f67cb.appspot.com",
  messagingSenderId: "261949024309",
  appId: "1:261949024309:web:07ce7172519dfad162697c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
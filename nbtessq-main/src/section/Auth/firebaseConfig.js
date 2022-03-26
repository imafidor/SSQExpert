import firebase from 'firebase';


    const firebaseConfig = {
        apiKey: "AIzaSyBTveg9GZncE5xHmmx3S0QUKn2mXD_tfVo",
        authDomain: "ssq2-2f329.firebaseapp.com",
        databaseURL: "https://ssq2-2f329.firebaseio.com",
        projectId: "ssq2-2f329",
        storageBucket: "ssq2-2f329.appspot.com",
        messagingSenderId: "390721573554",
        appId: "1:390721573554:web:cdacfb6e676c3a41756fab",
        measurementId: "G-K1ERTBNL7W"
      };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBnHnI9YvJ9EfEpqiKw650ePwBEWm2xoa4',
  authDomain: 'shop-f8305.firebaseapp.com',
  databaseURL: 'https://shop-f8305.firebaseio.com',
  projectId: 'shop-f8305',
  storageBucket: 'shop-f8305.appspot.com',
  messagingSenderId: '595219225890',
  appId: '1:595219225890:web:02edda87de2c2aae49197b',
  measurementId: 'G-EN562DVL3V'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

// import firebase from "firebase";


// const firebaseConfig = {
//   apiKey: "AIzaSyDSjpStfjVpqSCZaffSQfO0BGWrNSjxDU8",
//   authDomain: "e-learning-da216.firebaseapp.com",
//   projectId: "e-learning-da216",
//   storageBucket: "e-learning-da216.appspot.com",
//   messagingSenderId: "173515189662",
//   appId: "1:173515189662:web:845c86e1796d020214ba8f"           
// };

// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// const db = app.firestore();

// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// // const sendPasswordResetEmail = async (email) => {
// //   try {
// //     await auth.sendPasswordResetEmail(email);
// //     alert("Password reset link sent!");
// //   } catch (err) {
// //     console.error(err);
// //     alert(err.message);
// //   }
// // };

// const logout = () => {
//   auth.signOut();
// };

// export {
//   auth,
//   db,
//   signInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   logout,
// };


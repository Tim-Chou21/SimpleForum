// Initialize Firebase
/// TODO 1: Change to your firebase config
///         1. New a Firebase project
///         2. Copy and paste firebase config below
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>"
};
firebase.initializeApp(config);
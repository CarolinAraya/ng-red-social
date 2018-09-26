const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createUser = functions.auth.user().onCreate(user => {
    let userDefault = 'http://d28hp0i0mf9k3x.cloudfront.net/assets/default_person-3886b66ad5ca85d57ed2a0d12fd2b2e4.png'
    var userObject = {
        displayName: user.displayName || user.email || user.providerData[0].email,
        email: user.email || user.providerData[0].email,
        photoUrl: user.photoURL || userDefault,
        rol: 'asigne su rol',
        pais: 'asigne su pais'
    };
    admin.database().ref('users/' + user.uid).set(userObject);
}); 
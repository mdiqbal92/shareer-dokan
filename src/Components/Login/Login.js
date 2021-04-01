import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
        const handleGoogleLogIn = () => {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(res => {
                    const { displayName, email } = res.user;
                    const user = res.user;
                    const signedInUser = {
                        isSignedIn: true,
                        name: displayName,
                        email: email,
                        success: true
                    }
                    console.log(user, displayName);
                    setUser(signedInUser);
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUser = { ...user }
                        newUser.error = error.message;
                        newUser.success = false;
                        setUser(newUser);
                });
        }
        const handleSignOut = () => {
            firebase.auth().signOut()
                .then((res) => {
                    const signedOutUser = {
                        isSignedIn: false,
                        name: '',
                        email: ''
                    }
                    setUser(signedOutUser);
                    console.log(res);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
    }
    return (
        <div style={{textAlign: 'center', margin:'40px'}}>
            <h3 >Log In with Your Google Account</h3>
            {
                    user.isSignedIn ?
                        <button className="btn btn-danger" onClick={handleSignOut}>Log Out </button> :
                        <button className="btn btn-primary" onClick={handleGoogleLogIn}>Login With Google </button>
            }
        </div>
    );
};

export default Login;
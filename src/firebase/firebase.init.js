import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*Steps for authentication
--------------------------
Step-1: Initial setup
1.firebase: create project
2.create web app
3.get configuration
4.initialize firebase
5.enable auth method
---------------------------
Step-2: setup components
1.Create Login components
2.Create Register components
3.Create Route for Login and Register
-----------------------------------
Step-3.set auth system
1.set up sign in method
2.set up logOut method
3.set useState
4.special observer
4.return necessary methods and states from firebase
---------------------------
Steps-4:Create auth context hook (useAuth)
1.Create an auth context
2.Create Context Provider
3.set Context provider context value
4.Use Auth Provider
5.Create UseAuth Hook
-----------------------
Step 5:Create private route
1.create private route
2.set private route

-----------------------
Step-6: Redirect after login
1.After login redirect user to desired destination
*/
import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`Admins/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
export function saveHospital (hospitalname,hospitalno,hospitaladdress,pincode,company,title) {
  return ref.child(`QueryData/${hospitalno}`)
    .set({
      Name:hospitalname,
      Message:pincode,
      Phoneno: hospitalno,
      Emailaddress:hospitaladdress,
      Company:company,
      Title:title
    })

}

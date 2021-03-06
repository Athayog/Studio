import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
export function createUser(uid, data) {
     return firestore
          .collection('users')
          .doc(uid)
          .set(
               {
                    uid,
                    ...data,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
               },
               { merge: true }
          );
}

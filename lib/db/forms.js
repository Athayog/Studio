import firebase from '@/lib/firebase';
const firestore = firebase.firestore();
import { v4 as uuidv4 } from 'uuid';
export async function registerForm(
     uid,
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type
) {
     const storeLinks = firestore.collection('forms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
}

export async function registerFormFree(
     uid,
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type,
     courseName,
     courseId,
     price,
     duration
) {
     const storeLinks = firestore.collection('forms').doc();
     await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
     const refUsers = firestore.collection('users').doc(uid);
     const orderId = uuidv4();
     await refUsers.set(
          {
               orderId
          },
          { merge: true }
     );

     await firestore
          .collection('users')
          .doc(uid)
          .collection('payments')
          .doc(courseId)
          .set({
               courseId,
               courseName,
               duration,
               price,
               orderId
          });
}

export async function enquiryForm(name, email, phone, details, type) {
     const storeLinks = firestore.collection('enquiryForms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          details,
          type
     });
}

export async function leadForm(name, email, phone) {
     const storeLinks = firestore.collection('leadForms').doc();

     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone
     });
}

export async function informationForm(
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type
) {
     const storeLinks = firestore.collection('forms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type
     });
}

export async function checkForTrial(email, phone) {
     const storeRef = firestore
          .collection('forms')
          .where('course', '==', 'Trial');
     const snapshot = await storeRef.where('email', '==', email).get();
     const snapshot_phone = await storeRef.where('phone', '==', phone).get();

     let total_count = 0;
     snapshot.forEach((doc) => {
          total_count++;
     });

     let total_phone = 0;
     snapshot_phone.forEach((doc) => {
          total_phone++;
     });

     if (snapshot.empty || (total_count <= 1 && total_phone <= 1)) {
          return { message: 'Success', code: 200 };
     } else {
          return { message: 'Error', code: 400 };
     }
}

export async function registerFormTrial(
     name,
     email,
     phone,
     gender,
     experience,
     style,
     course,
     referral,
     conditions,
     type,
     date,
     selected_calendar,
     location
) {
     const storeLinks = firestore.collection('forms').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),

          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions,
          type,
          date,
          selected_calendar,
          location
     });
}
export async function checkForArambha(email) {
     const storeRef = firestore.collection('arambhaForm');
     const snapshot = await storeRef.where('email', '==', email).get();

     const response = null;
     if (snapshot.empty) {
          return { message: 'Success', code: 200 };
     } else {
          return { message: 'Error', code: 400 };
     }
}

export async function registerForArambha(
     name,
     email,
     phone,
     age,
     tshirt,
     gender,
     ticketID,
     location,
     member
) {
     const storeLinks = firestore.collection('arambhaForm').doc();

     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          age,
          tshirt,
          gender,
          ticketID,
          location,
          member
     });
}

export async function registerForJayanti(
     name,
     email,
     phone,
     age,
     tshirt,
     gender,
     ticketID,
     location,
     member,
     events
) {
     const storeLinks = firestore.collection('jayantiForm').doc();

     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name,
          email,
          phone,
          age,
          tshirt,
          gender,
          ticketID,
          location,
          member,
          events
     });
}

export async function registerCareer(
     current_company,
     current_ctc,
     desigation,
     email,
     expected_ctc,
     experience,
     flexible,
     location,
     name,
     notice_period,
     number,
     offer,
     questions,
     relocate,
     pdf_url
) {
     const storeLinks = firestore.collection('career').doc();
     return await storeLinks.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          current_company,
          current_ctc,
          desigation,
          email,
          expected_ctc,
          experience,
          flexible,
          location,
          name,
          notice_period,
          number,
          offer,
          questions,
          relocate,
          pdf_url
     });
}

export async function uploadPDF(directory, file) {
     const storageRef = firebase.storage().ref();
     const fileName = new Date().getTime();
     const uploadRef = storageRef.child(directory).child(`${fileName}`);
     await uploadRef.put(file);
     return await uploadRef.getDownloadURL().then(function (url) {
          return url;
     });
}

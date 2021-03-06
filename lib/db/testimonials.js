import firebase from '@/lib/firebase';
const firestore = firebase.firestore();

export async function updateTestimonialsStatus(id, status) {
     await firestore
          .collection('testimonials')
          .doc(id)
          .update({ isActive: status });
}

export async function createTestimonial(name, review, rating, isActive) {
     const testimonials = firestore.collection('testimonials').doc();
     return await testimonials.set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name: name,
          review: review,
          stars: rating,
          isActive: isActive
     });
}

export async function deleteTestimonialsStatus(id) {
     return await firestore.collection('testimonials').doc(id).delete();
}

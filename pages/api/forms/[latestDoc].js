import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { registerForm } from '@/lib/db/forms';
import { db } from '@/lib/firebase-admin';

// Initialize the cors middleware
const cors = initMiddleware(
     // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
     Cors({
          // Only allow requests with GET, POST and OPTIONS
          methods: ['GET', 'POST', 'OPTIONS'],
          origin: true
     })
);

export default async function handler(req, res) {
     // Run cors
     await cors(req, res);

     if (req.method === 'POST') {
          const {
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
          } = req.body;
          await registerForm(
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
          );
          return res.status(200).json({
               message: 'Updated Form'
          });
     }
     if (req.method === 'GET') {
          const latestDoc = req.query.latestDoc;
          console.log(latestDoc);

          const snapshot = await db
               .collection('forms')
               .orderBy('createdAt', 'desc')
               .startAfter(latestDoc || 0)
               .limit(20)
               .get();
          const submissions = [];

          snapshot.forEach((doc) => {
               submissions.push({ id: doc.id, ...doc.data() });
          });

          res.status(200).json({ submissions });
     }
}

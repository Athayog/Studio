// components/RecaptchaComponent.js
import { useEffect } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const RecaptchaComponent = ({ onVerify }) => {
     const { executeRecaptcha } = useGoogleReCaptcha();

     useEffect(() => {
          const handleReCaptchaVerify = async () => {
               if (!executeRecaptcha) {
                    console.log('Execute recaptcha not yet available');
                    return;
               }

               const token = await executeRecaptcha('register');
               onVerify(token);
          };

          handleReCaptchaVerify();
     }, [executeRecaptcha, onVerify]);

     return null;
};

const RecaptchaProvider = ({ children }) => <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>{children}</GoogleReCaptchaProvider>;

export { RecaptchaComponent, RecaptchaProvider };

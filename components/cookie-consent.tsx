"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import CookieConsent from 'react-cookie-consent';

const CookieConsentComponent = ({ onConsentChange }: { onConsentChange: (value: boolean) => void }) => {
   const [consentAccepted, setConsentAccepted] = useState(false);

   useEffect(() => {
     onConsentChange(consentAccepted);
   }, [consentAccepted]);

   const handleAcceptCookies = () => {
       Cookies.set('cookie_consent_is_true', 'true', { expires: 365 });
       setConsentAccepted(true);
   };

   const handleRejectCookies = () => {
       Cookies.remove('cookie_consent_is_true');
       setConsentAccepted(false);
   };

   return (
    <div>
    <CookieConsent
    location="bottom"
    buttonText="Accepteren"
    declineButtonText="Weigeren"
    style={{
        background: '#000',
        borderTop: "1px solid #cfb968",
        boxShadow: "0 0 10px rgba(207, 185, 104, 0.7)",
    }}
    buttonStyle={{ 
        background: "#625835", 
        color: "#fff",
        fontSize: "14px",
    }}
    declineButtonStyle={{ 
        color: "fffffff", 
        fontSize: "14px", 
    }}
    expires={150}
    enableDeclineButton
    onAccept={handleAcceptCookies}
    onDecline={handleRejectCookies}
  >
    Deze website maakt gebruik van cookies om uw ervaring te verbeteren.{' '}
    <Link href="/cookies" className='text-primary underline'>Meer informatie</Link> over ons cookiebeleid.
  </CookieConsent>
  </div>
   );
};

export default CookieConsentComponent;
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import CookieConsent from 'react-cookie-consent';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import { GoogleTagManager } from '@next/third-parties/google';

const CookieConsentComponent = () => {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent_is_true');
    setConsentAccepted(cookieConsent === 'true');
  }, []);

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
  {consentAccepted && <SpeedInsights />}
    {consentAccepted && <Analytics />}
    {consentAccepted && <GoogleTagManager gtmId="G-RQ7YBPG1QK" />}
  </div>
   );
};

export default CookieConsentComponent;
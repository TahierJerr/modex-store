"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import CookieConsent from 'react-cookie-consent';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'

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
    buttonText="Accept"
    declineButtonText="Decline"
    style={{
        background: '#ffffff',
        borderTop: "1px solid #000000",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    }}
    buttonStyle={{ 
        background: "#007600", 
        color: "#fff",
        fontSize: "14px",
        borderRadius: "4px",
    }}
    declineButtonStyle={{ 
        color: "#fffffff", 
        fontSize: "14px", 
        borderRadius: "4px",
    }}
    expires={150}
    enableDeclineButton
    onAccept={handleAcceptCookies}
    onDecline={handleRejectCookies}
  >
    <p className='text-black'>
    Our website uses cookies and analytics to improve our services.{' '}
    <Link href="/cookies" prefetch={false} className='text-primary underline'>Click here for more information</Link> about our cookies.</p>
  </CookieConsent>
  {consentAccepted && <SpeedInsights />}
    {consentAccepted && <Analytics />}
  </div>
   );
};

export default CookieConsentComponent;
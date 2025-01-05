"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Script from 'next/script'

export default function CookieConsentComponent() {
    const [consentAccepted, setConsentAccepted] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        const cookieConsent = Cookies.get('cookie_consent')
        if (cookieConsent === undefined) {
            setIsVisible(true)
        } else {
            setConsentAccepted(cookieConsent === 'true')
        }
    }, [])
    
    const handleConsent = (accepted: boolean) => {
        Cookies.set('cookie_consent', accepted.toString(), { expires: 365 })
        setConsentAccepted(accepted)
        setIsVisible(false)
    }
    
    if (!isVisible) {
        return (
        <>
        {consentAccepted && <SpeedInsights />}
        {consentAccepted && <Analytics />}
        {consentAccepted && <Script type='text/javascript' src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js' async />
    }
    </>
    )
}

return (
<div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl">
    <Card className="bg-background/80 backdrop-blur-sm">
        <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
                We use cookies and analytics to improve our services. By using our site, you agree to our use of cookies.
            </p>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => handleConsent(false)}>
                Decline
            </Button>
            <div className="space-x-2">
                <Button variant="outline" size="sm" onClick={() => router.push('/cookies')}>
                    Learn More
                </Button>
                <Button size="sm" onClick={() => handleConsent(true)}>
                    Accept
                </Button>
            </div>
        </CardFooter>
    </Card>
</div>
)
}
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX Cookies | MODEX',
    description: 'Here you will find the cookie policy of MODEX.'
}

export default function Cookies() { 
    return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 mt-32">
        <h1 className="text-4xl font-bold mb-8 text-center">Cookie Policy of MODEX</h1>
        <p className="text-2xl font-bold mb-4">What are cookies</p>
        <p className="text-lg mb-4">As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however, this may downgrade or &apos;break&apos; certain elements of the sites functionality.</p>
        <p className="text-2xl font-bold mb-4">How we use cookies</p>
        <p className="text-lg mb-4">We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service that you use.</p>
        <p className="text-2xl font-bold mb-4">Disabling cookies</p>
        <p className="text-lg mb-4">You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies. This Cookie Policy was created with the help of the <a className="text-blue-500 underline" href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookie Policy Generator</a>.</p>
        <p className="text-2xl font-bold mb-4">The cookies we set</p>
        <ul className="list-disc list-inside">
            <li className="mb-4 list-none">
                <p className="text-lg font-bold">Order processing related cookies</p>
                <p className="text-lg">This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it correctly.</p>
            </li>
        </ul>
        <p className="text-2xl font-bold mb-4">Third-party cookies</p>
        <p className="text-lg mb-4">In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
        <ul className="list-disc list-inside">
            <li className="mb-4 list-none">
                <p className="text-lg font-bold">Testing new features cookies</p>
                <p className="text-lg">From time to time, we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience on the site while ensuring we understand which optimizations our users appreciate the most.</p>
            </li>
        </ul>
        <p className="text-2xl font-bold mb-4">More information</p>
        <p className="text-lg mb-4">Hopefully, that has clarified things for you and as was previously mentioned if there is something that you aren&apos;t sure whether you need or not it&apos;s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        <p className="text-lg mb-4">For more general information on cookies, please read the article on <a className="text-blue-500 underline" href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">Cookie Policy</a>.</p>
        <p className="text-lg mb-4">However, if you are still looking for more information, you can contact us through one of our preferred contact methods:</p>
        <ul className="list-disc list-inside">
            <li className="mb-12 text-lg">Email: info@modex-pc.nl</li>
        </ul>
    </div>
    
    )
}
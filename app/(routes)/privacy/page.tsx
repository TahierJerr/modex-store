import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX Privacy | MODEX',
    description: 'This is the privacy page of MODEX.',
    keywords: ['MODEX Privacy', 'MODEX Privacy Policy', 'MODEX Privacy Statement']
}

const PrivacyPage = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 mt-32">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">Cookies, or similar techniques, that we use</h2>
        <h2 className="text-xl mb-4">MODEX, located at Draakstraat 7 9742TD Groningen, is responsible for the processing of personal data as shown in this privacy statement.</h2>
            
        <ul><h2 className="text-2xl font-bold mb-4">Contact information:</h2>
        <li><p className="text-lg mb-4">https://www.modex-pc.nl</p></li>
            <li><p className="text-lg mb-4">Draakstraat 7 9742TD Groningen</p></li>
            <li><p className="text-lg mb-4">+31649146060</p></li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4">Personal data that we process</h2>
            <p className="text-lg mb-4">MODEX processes your personal data because you use our services and/or because you provide this information to us.</p>
            
            <ul><h2 className="text-2xl font-bold mb-4">Below you will find an overview of the personal data that we process:</h2>
            <li><p className="text-lg mb-4">- Address details</p></li>
            <li><p className="text-lg mb-4">- Phone number</p></li>
            <li><p className="text-lg mb-4">- Email address</p></li>
            <li><p className="text-lg mb-4">- Bank account number</p></li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4">Special and/or sensitive personal data that we process</h2>
            <p className="text-lg mb-4">Our website and/or service does not intend to collect data about website visitors who are younger than 16 years old. Unless they have permission from parents or guardian. However, we cannot verify the age of visitors. We therefore recommend that parents be involved in their children's online activities to prevent data from being collected about children without parental consent. If you are convinced that we have collected personal information about a minor without permission, please contact us at info@modex-pc.nl and we will delete this information.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">For what purpose and on what basis we process personal data</h2>
            <p className="text-lg mb-4">
            MODEX processes your personal data for the following purposes:
            - Handling your payment
            - Being able to call or email you if necessary to perform our services
            - Informing you about changes to our services and products
            - Delivering goods and services to you
            - MODEX tracks your browsing behavior across different websites in order to tailor our products and services to your needs.
            - MODEX also processes personal data if we are legally obliged to do so, such as data that we need for our tax return. 
            
            
            Automated decision making
            MODEX takes responsibility for making decisions about matters that can have (significant) consequences for individuals based on automated processing. These are decisions that are made by computer programs or systems, without the involvement of a human being (for example, an employee of MODEX). MODEX uses the following computer programs or systems:
            
            Stripe
            
            </p>
            <h2 className="text-2xl font-bold mb-4">How long we keep personal data</h2>
            <p className="text-lg mb-4">
            MODEX does not keep your personal data longer than is strictly necessary to achieve the purposes for which your data is collected. We use the following retention periods for the following (categories) of personal data: 2 years
            
            
            Sharing personal data with third parties
            MODEX shares your personal data with various third parties if this is necessary for the performance of the agreement and to comply with any legal obligation. We conclude a data processing agreement with companies that process your data on our behalf to ensure the same level of security and confidentiality of your data. MODEX remains responsible for these processing operations. In addition, MODEX provides your personal data to other third parties. We only do this with your explicit consent.
            
            Stripe: name, address, email, payment details to complete purchase agreement
            
            
            Cookies, or similar techniques, that we use
            MODEX only uses technical and functional cookies. And analytical cookies that do not infringe on your privacy. A cookie is a small text file that is stored on your computer, tablet or smartphone when you first visit this website. The cookies we use are necessary for the technical operation of the website and your ease of use. They ensure that the website works properly and remember, for example, your preferences. We can also optimize our website with this. You can opt out of cookies by setting your internet browser so that it no longer stores cookies. In addition, you can also delete all information previously stored via the settings of your browser.
            
            </p>
            <h2 className="text-2xl font-bold mb-4">View, modify or delete data</h2>
            <p className="text-lg mb-4">You have the right to access, correct or delete your personal data. You also have the right to withdraw your consent to the data processing or to object to the processing of your personal data by MODEX and you have the right to data portability. This means that you can submit a request to us to send the personal data we hold about you in a computer file to you or another organization mentioned by you.
            
            You can send a request for access, correction, deletion, data transfer of your personal data or request for withdrawal of your consent or objection to the processing of your personal data to info@modex-pc.nl.
            
            We will respond to your request as soon as possible, but within four weeks.
            
            MODEX also wants to point out that you have the possibility to file a complaint with the national supervisory authority, the Dutch Data Protection Authority. This can be done via the following link: https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
            </p>
            <h2 className="text-2xl font-bold mb-4">How we secure personal data</h2>
            <p className="text-lg mb-16">
            MODEX takes the protection of your data seriously and takes appropriate measures to prevent misuse, loss, unauthorized access, unwanted disclosure and unauthorized alteration. If you have the impression that your data is not properly secured or there are indications of abuse, please contact our customer service or via info@modex-pc.nl
        </p>
    </div>
    );
};

export default PrivacyPage;

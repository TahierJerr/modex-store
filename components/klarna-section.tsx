import Image from 'next/image'

const KlarnaSection = () => {
    return (
        <div className="grid grid-cols-1 gap-4 bg-klarna text-black rounded-lg py-4 px-2 mb-6 -mt-4">
            <div className="px-4 py-2">
                <div className='mb-4'>
                    <Image src='/klarna.svg' width={100} height={100} alt='klarna' quality={100}/>
                </div>
                <h4 className='text-black font-semibold text-2xl flex items-center mb-4'>Betaal later met Klarna.</h4>
                <p className='font-medium text-lg max-w-2xl mb-2'>
                    Bij MODEX accepteren we Klarna als betaalmethode. Kies uit betalen in 3 termijnen of betalen op een later tijdstip.
                </p>
                <h5 className='text-black font-semibold text-xl flex items-center mb-2 mt-2'>Betalen in 3 termijnen:</h5>
                <p className='font-medium text-lg max-w-2xl'>
                    Selecteer Klarna als betaalmethode tijdens het afrekenen. Klarna verdeelt je betaling in 3 gelijke termijnen, waarbij de eerste termijn direct wordt afgeschreven. Je ontvangt een factuur met de vervaldatums van de volgende termijnen.
                </p>
                <h5 className='text-black font-semibold text-xl flex items-center mb-2 mt-2'>Betalen op een later tijdstip:</h5>
                <p className='font-medium text-lg max-w-2xl'>
                    Selecteer Klarna als betaalmethode tijdens het afrekenen. Je ontvangt een factuur van Klarna met de betalingsinstructies. Houd er rekening mee dat er mogelijk kosten verbonden zijn aan het betalen op een later tijdstip.
                </p>
            </div>
        </div>
    )
}

export default KlarnaSection
import Image from 'next/image'

const KlarnaSection = () => {
    return (
        <div className="grid grid-cols-1 gap-4 bg-klarna text-black rounded-lg py-4 px-2 mb-6 -mt-4">
            <div className="px-4 py-2">
                <div className='mb-6'>
                    <Image src='/klarna.svg' width={100} height={100} alt='klarna' quality={100}/>
                </div>
                <h4 className='text-black font-semibold text-2xl flex items-center mb-4'>Betaal later met Klarna.</h4>
                <p className='font-medium text-lg max-w-2xl'>
                    Bij MODEX accepteren we Klarna als betaalmethode. Met Klarna kun je ervoor kiezen om later te betalen of in 3 termijnen te betalen. Zo kun jij sneller van jouw nieuwe game pc genieten. Het enige wat je hoeft te doen is afrekenen en Klarna selecteren als betaalmethode.
                </p>
            </div>
        </div>
    )
}

export default KlarnaSection
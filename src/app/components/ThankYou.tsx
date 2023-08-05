import Image from 'next/image'

export const ThankYou = () => {
    return (
        <>
            <div className='p-5 flex flex-col items-center'>
                <div className="w-full max-w-sm flex flex-col items-center">
                    <Image src={"/images/icon-thank-you.svg"} alt="background image" priority={true} width={50} height={50} />
                    <h1 className="text-2xl font-semibold text-blue-900 py-4">Thank you!</h1>
                </div>
                    <p className="text-gray-500 py-2 text-xl">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </>
    )
}
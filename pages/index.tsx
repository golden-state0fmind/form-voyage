
import Image from 'next/image'
import { useAppSelector } from '@/app/hooks';
import { CustomCircle } from '../src/app/components/utilities';
import { SignupForm } from '@/app/components/SignupForm';
import { SelectPlan } from '@/app/components/SelectPlan';

export default function Home() {

    const user = useAppSelector(state => state.userObject.value)
    const currentStep = useAppSelector(state => state.stepTracker.value)

    // TODO::
    // 2. track the steps either with formik or redux
    // 3. fix error message by tracking the steps
    
    console.log(user, 'form data', '..step', currentStep)

    return (

        <>
            <div className='-z-10 top-0 absolute md:hidden'>
                <Image
                    src="/images/bg-sidebar-mobile.svg" // The path is relative to the `public` directory
                    alt="background image"
                    priority={true}
                    width={450} // Set the desired width for the image (in pixels)
                    height={300} // Set the desired height for the image (in pixels)
                />
            </div>
            <div className="flex flex-row justify-center mt-5">
                <div className='flex flex-row md:flex-col justify-between w-48' >
                    <CustomCircle step={1} activeStep={currentStep} />
                    <CustomCircle step={2} activeStep={currentStep} />
                    <CustomCircle step={3} activeStep={currentStep} />
                    <CustomCircle step={4} activeStep={currentStep} />
                </div>
            </div>

            <main className="flex min-h-screen flex-col items-center p-5">\
                <div className="bg-white rounded-lg shadow-lg min-h-full min-w-full">
                    {
                        currentStep === 1 ? <SignupForm /> : <></>
                    }
                    {
                        currentStep === 2 ? <SelectPlan /> : <></>
                    }
                </div>
            </main>
            
        </>
    )
}
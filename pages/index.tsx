
import Image from 'next/image'
import { useAppSelector } from '@/app/hooks';
import { CustomCircle } from '../src/app/components/utilities';
import { SignupForm } from '@/app/components/SignupForm';
import { SelectPlan } from '@/app/components/SelectPlan';
import { PickAddOns } from '@/app/components/PickAddOns';
import { FinishUp } from '@/app/components/FinishUp';

export default function Home() {
    const totalSteps = 4;
    const customCircles = [];
    const user = useAppSelector(state => state.userObject.value)
    const currentStep = useAppSelector(state => state.stepTracker.value)

    for (let step = 1; step <= totalSteps; step++) {
        customCircles.push(
            <CustomCircle key={step} step={step} activeStep={currentStep} />
        );
    }

    return (

        <>
            <div className='-z-10 top-0 absolute md:hidden'>
                <Image
                    src="/images/bg-sidebar-mobile.svg" // The path is relative to the `public` directory
                    alt="background image"
                    priority={true}
                    width={769} // Set the desired width for the image (in pixels)
                    height={300} // Set the desired height for the image (in pixels)
                />
            </div>
            <div className="flex flex-row justify-center mt-5">
                <div className='flex flex-row md:flex-col justify-between w-48' >
                    {customCircles}
                </div>
            </div>

            <main className="flex flex-col items-center p-4">
                <div className="bg-white rounded-lg shadow-lg min-h-full min-w-full pb-4">
                    {currentStep === 1 && <SignupForm />}
                    {currentStep === 2 && <SelectPlan />}
                    {currentStep === 3 && <PickAddOns />}
                    {currentStep === 4 && <FinishUp />}
                </div>
            </main>
            
        </>
    )
}
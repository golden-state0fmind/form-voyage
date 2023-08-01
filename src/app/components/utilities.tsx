import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setStep } from '../store/stepSlice';


interface ICustomCircle {
    step: number
    activeStep: number
}

const CustomCircle: React.FC<ICustomCircle> = ({ step, activeStep }) => {

    useEffect(() => {
        const stepAsDiv = document.getElementById(`step-${step}`);
        if (stepAsDiv) {
            if (step === activeStep) {
                stepAsDiv.setAttribute('active', '');
            } else {
                stepAsDiv.removeAttribute('active');
            }
        }
    }, [activeStep]);

    return (
        <div id={`step-${step}`} className="custom-circle">
            {step}
        </div>
    );
};

interface IFooter {
    currentStep: number
}

const Footer = ({currentStep}: IFooter) => {
    const dispatch = useAppDispatch()
    
    return (
        <footer className='bg-white md:hidden p-4 text-center fixed bottom-0 w-full flex justify-between items-center' >
            {
                currentStep > 1
                    ? <button
                        onClick={() => dispatch(setStep(currentStep - 1))}
                        className='px-4 py-2 text-gray-400 rounded'>
                        Go Back
                    </button>
                    : <div></div>
            }
            <button
                type='submit'
                className='px-4 py-2 bg-blue-900 text-white rounded'>
                Next Step
            </button>
        </footer>
    )
}

export { CustomCircle, Footer };

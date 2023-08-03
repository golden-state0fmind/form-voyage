import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setStep } from '../store/stepSlice';
import { setPlan } from '../store/planSlice';


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

type PlanOptionProps = {
    name: string;
    price: number;
    monthlyBilling: boolean;
    imageSrc: string;
};


const PlanOption: React.FC<PlanOptionProps> = ({ name, price, monthlyBilling, imageSrc }) => {
    const selectedPlanName = useAppSelector(state => state.trackPlan.value.name)

    return (
        <div className={`flex items-center px-3 w-full outline outline-offset-2 outline-2 ${name === selectedPlanName ? 'outline-purple-600 bg-fuchsia-100' : 'outline-gray-200'} mt-1 h-20 rounded-lg cursor-pointer`}>
            <div className='mb-5'>
            <Image src={imageSrc} alt="background image" priority={true} width={45} height={45} />
            </div>
            <div className='ms-3'>
                <span className='font-semibold text-blue-900'>
                    {name}
                </span>
                <br />
                <span className='text-gray-500 flex flex-col'>
                    {`$${price}/${monthlyBilling ? 'mo' : 'yr'}`}
                    {!monthlyBilling && <span className='text-blue-900'>2 months free</span>}
                    {monthlyBilling && <span className='text-transparent'>__________</span>}
                </span>
            </div>
        </div>
    );
};



const AddOn: React.FC<PlanOptionProps> = ({ name, price, monthlyBilling, imageSrc }) => {
    const selectedPlanName = useAppSelector(state => state.trackPlan.value.name)

    return (
        <div className={`flex items-center px-3 w-full outline outline-offset-2 outline-2 ${name === selectedPlanName ? 'outline-purple-600 bg-fuchsia-100' : 'outline-gray-200'} mt-1 h-20 rounded-lg cursor-pointer`}>
            <div className='mb-5'>
                <Image src={imageSrc} alt="background image" priority={true} width={45} height={45} />
            </div>
            <div className='ms-3'>
                <span className='font-semibold text-blue-900'>
                    {name}
                </span>
                <br />
                <span className='text-gray-500 flex flex-col'>
                    {`$${price}/${monthlyBilling ? 'mo' : 'yr'}`}
                    {!monthlyBilling && <span className='text-blue-900'>2 months free</span>}
                    {monthlyBilling && <span className='text-transparent'>__________</span>}
                </span>
            </div>
        </div>
    );
};

const ToggleSwitch: React.FC<{ onToggle: (checked: boolean) => void; checked: boolean }> = ({ onToggle, checked }) => {
    const [togglePosition, setTogglePosition] = useState(checked ? '' : 'translate-x-full');

    useEffect(() => {
        setTogglePosition(checked ? '' : 'translate-x-full');
    }, [checked]);

    const handleToggle = () => {
        const newPosition = checked ? 'translate-x-full' : '';
        setTogglePosition(newPosition);
        onToggle(!checked);
    };

    return (
        <label className="relative inline-block w-12 h-6 rounded-full bg-blue-900" onClick={handleToggle}>
            <input type="checkbox" className="absolute w-0 h-0 opacity-0" checked={checked} readOnly />
            <span
                className={`absolute left-1 top-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform ${togglePosition}`}
            />
        </label>
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
                        className='px-4 py-2 text-gray-500 rounded'>
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

export { CustomCircle, Footer, PlanOption, ToggleSwitch };
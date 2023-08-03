import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setPlan } from "../store/planSlice";
import { IBillingPlan } from "./SelectPlan";
import { AddOn, Footer } from "./utilities"

const PickAddOns = () => {
    const dispatch = useAppDispatch()
    const currentPlan = useAppSelector(state => state.trackPlan.value)
    const currentStep = useAppSelector(state => state.stepTracker.value)

    const initialAddOns = [
        { name: 'Online Service', price: 1, description: 'Access to multiplayer games.', selected: false },
        { name: 'Larger storage', price: 2, description: 'Extra 1TB of cloud storage.', selected: false },
        { name: 'Customizable profile', price: 2, description: 'Custom theme on your profile.', selected: false }
        // Add more add-ons here
    ];

    const [addOns, setAddOns] = useState(initialAddOns);

    const handlePlanSelect = (addOnName: string, index: number) => { //plan: IBillingPlan[keyof IBillingPlan]
        
        initialAddOns[index].selected = !initialAddOns[index].selected
        
        const updatedAddOns = addOns.map(addOn => {
            if (addOn.name === addOnName) {
                return { ...addOn, selected: !addOn.selected };
            }
            return addOn;
        });
        setAddOns(updatedAddOns);
        // You can dispatch actions or perform other tasks related to the selected add-on here
        
        return
    };

    return (
        <>
            <div className='p-5 flex flex-col items-center'>
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-blue-900 pt-1">Pick add-ons</h1>
                    <p className="text-gray-500 py-2 text-xl">Add-ons help enhance your gaming experience.</p>
                </div>
                {addOns.map((addOn, index) => (
                    <div className={`w-full ${index === 1 ? 'py-4' : ''}`} key={addOn.name} onClick={() => handlePlanSelect(addOn.name, index)}>
                        <AddOn name={addOn.name} price={addOn.price} monthlyBilling={currentPlan.monthlyBill} description={addOn.description} checked={addOn.selected} />
                    </div>
                ))}
                <Footer currentStep={currentStep} />
            </div>
        </>
    );
}

export { PickAddOns }
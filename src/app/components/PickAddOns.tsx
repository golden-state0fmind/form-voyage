import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setPlan } from "../store/planSlice";
import { AddOn, Footer } from "./utilities"

const PickAddOns = () => {
    const dispatch = useAppDispatch();
    const currentPlan = useAppSelector(state => state.trackPlan.value);
    const [addOns, setAddOns] = useState<Array<any>>(currentPlan.addOns);

    const handlePlanSelect = (index: number) => {
        const updatedAddOns = addOns.map((addOn, i) => {
            if (i === index) {
                return { ...addOn, selected: !addOn.selected };
            }
            return addOn;
        });
        updateCurrentPlan(updatedAddOns);
        setAddOns(updatedAddOns);
    };

    const updateCurrentPlan = (updatedAddOns: typeof addOns) => {
        const updatedPlan = {
            ...currentPlan,
            addOns: updatedAddOns
        };
        dispatch(setPlan(updatedPlan));
    };

    useEffect(() => {
        setAddOns(currentPlan.addOns); // Sync addOns state with Redux on mount
    }, [currentPlan.addOns]);

    return (
        <>
            <div className='p-5 flex flex-col items-center'>
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-blue-900 pt-1">Pick add-ons</h1>
                    <p className="text-gray-500 py-2 text-xl">Add-ons help enhance your gaming experience.</p>
                </div>
                {addOns.map((addOn, index) => (
                        <div className={`w-full ${index === 1 ? 'py-4' : ''}`} key={addOn.name} onClick={() => handlePlanSelect(index)}>
                            <AddOn name={addOn.name} price={addOn.price} monthlyBilling={currentPlan.monthlyBill} description={addOn.description} checked={addOn.selected} />
                        </div>
                    ))}
                <Footer />
            </div>
        </>
    );
}

export { PickAddOns }
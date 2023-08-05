import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { Footer, RecieptRows } from "./utilities"
import { setPlan } from "../store/planSlice"

export const FinishUp = () => {
    const dispatch = useAppDispatch()
    const currentPlan = useAppSelector(state => state.trackPlan.value)
    const [activeAmountServices, setActiveAmountServices] = useState<number>(0);

    const handleChangeMonthlyBilling = () => {
        dispatch(setPlan({
            ...currentPlan,
            
            monthlyBill: !currentPlan.monthlyBill
        }));
    }

    useEffect(() => {
        let activeCount = 0;

        currentPlan.addOns.forEach((addOn) => {
            if (addOn.selected) {
                activeCount++;
            }
        });

        setActiveAmountServices(activeCount);
    }, [currentPlan.addOns]);
    
    return (
        <>
            <div className='p-5 flex flex-col items-center'>
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-blue-900 pt-1">Finishing Up</h1>
                    <p className="text-gray-500 py-2 text-xl">Double-check everything looks OK before confirming.</p>
                </div>
                <div className={`flex items-center justify-between px-3 w-full bg-gray-100 outline outline-offset-0 outline-0 mt-1 h-20 rounded-t-lg`}>
                    <div className="flex items-center">
                        <div className={``}>
                            <span className='font-semibold text-blue-900'>
                                {currentPlan.name} {currentPlan.monthlyBill ? "(Monthly)" : "(Yearly)" }
                            </span>
                            <span onClick={handleChangeMonthlyBilling} className='text-gray-500 flex flex-col cursor-pointer underline underline-offset-1'>
                                Change
                            </span>
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-blue-900 font-semibold flex flex-col'>
                            ${currentPlan.monthlyBill ? currentPlan.price : currentPlan.price * 10}
                            {
                                currentPlan.monthlyBill ? "/mo" : "/yr"
                            }
                        </span>
                    </div>
                </div>
                {currentPlan.addOns.map((addOn, index) => (
                    addOn.selected && <RecieptRows key={addOn.name} name={addOn.name} price={addOn.price} monthlyBill={currentPlan.monthlyBill} index={index} activeAmountServices={activeAmountServices} />
                ))}
                <Footer />
            </div>
        </>
    )
}
import { useAppDispatch, useAppSelector } from "../hooks";
import { setPlan } from "../store/planSlice";
import { IBillingPlan } from "./SelectPlan";
import { Footer, PlanOption } from "./utilities"

const PickAddOns = () => {
    const dispatch = useAppDispatch()
    const currentPlan = useAppSelector(state => state.trackPlan.value)
    const currentStep = useAppSelector(state => state.stepTracker.value)

    const handlePlanSelect = (plan: IBillingPlan[keyof IBillingPlan]) => {
        console.log(plan, 'current plan from pick add ons')
        //TODO-->
        // 1. Update state with the new services
        // 2. Build the selections
        // 3. Build helper functions 
        // 4. 
    };
    console.log(currentPlan, currentStep, '<<step and currentPlan')

    return (
        <>
            <div className='p-5 flex flex-col items-center'>
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-blue-900 pt-1">Pick add-ons</h1>
                    <p className="text-gray-500 py-2 text-xl">Add-ons help enhancce your gaming experience.</p>
                </div>
                <div className='w-full' onClick={() => handlePlanSelect(currentPlan)}>
                    <PlanOption name={'Online Service'} price={1} monthlyBilling={currentPlan.monthlyBill} imageSrc={''} />
                </div>
                <div className='w-full' onClick={() => handlePlanSelect(currentPlan)}>
                    <PlanOption name={'Larger storage'} price={2} monthlyBilling={currentPlan.monthlyBill} imageSrc={''} />
                </div>
                <div className='w-full' onClick={() => handlePlanSelect(currentPlan)}>
                    <PlanOption name={'Customizable profile'} price={2} monthlyBilling={currentPlan.monthlyBill} imageSrc={''} />
                </div>
                <Footer currentStep={currentStep} />
            </div>
        </>
    );
}

export { PickAddOns }
import * as Yup from 'yup';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks"
import { Formik } from 'formik';
import { Footer, PlanOption, ToggleSwitch } from "./utilities"
import { setUser } from "../store/formSlice"
import { setStep } from "../store/stepSlice"
export interface IBillingPlan {
    tier1: {
        name: string
        price: number
    }
    tier2: {
        name: string
        price: number
    }
    tier3: {
        name: string
        price: number
    }
}

const monthlyBilling: IBillingPlan = {
    tier1: {
        name: 'Arcade',
        price: 9
    },
    tier2: {
        name: 'Advanced',
        price: 12
    },
    tier3: {
        name: 'Pro',
        price: 15
    }
}

const SelectPlan = () => {
    const dispatch = useAppDispatch()
    const [monthlyPlanType, setMonthlyPlanType] = useState(true)
    const user = useAppSelector(state => state.userObject.value)
    const currentStep = useAppSelector(state => state.stepTracker.value)
    const [selectedPlan, setSelectedPlan] = useState<IBillingPlan[keyof IBillingPlan] | null>(null);
    const [userPlans, setUserPlans] = useState<IBillingPlan>(monthlyBilling)
    
    // Function to handle plan selection
    const handlePlanSelect = (plan: IBillingPlan[keyof IBillingPlan]) => {
        if (!monthlyPlanType) {
            setSelectedPlan({ ...plan, price: monthlyPlanType ? plan.price : plan.price * 10 })
        } else {
            setSelectedPlan(plan);
        }
    };
    console.log(monthlyPlanType)

    return (
        
        <Formik
            initialValues={user}
            validationSchema={
                Yup.object({
                    billing: Yup.string().required('Please select a billing period'),
                })}
            onSubmit={values => {
                console.log(values)
                //dispatch(setStep(3))
            }}
        >
            {formik => (
                <form
                    onSubmit={formik.handleSubmit}
                    className="p-5 flex flex-col items-center">
                    <div className="w-full max-w-sm">
                        <h1 className="text-2xl font-semibold text-blue-900 pt-1">Select your plan</h1>
                        <p className="text-gray-500 py-2 text-xl">You have the option of monthly or yearly billing.</p>
                    </div>

                    {/* Plan Option 1 */}
                    <div className='w-full' onClick={() => handlePlanSelect(userPlans.tier1)}>
                        <PlanOption name={userPlans.tier1.name} price={monthlyPlanType ? userPlans.tier1.price : (userPlans.tier1.price * 10)} monthlyBilling={monthlyPlanType} imageSrc={'/images/icon-arcade.svg'} />
                    </div>
                    {/* Plan Option 2 */}
                    <div className='py-3 w-full'>
                        <div onClick={() => handlePlanSelect(userPlans.tier2)}>
                            <PlanOption name={userPlans.tier2.name} price={monthlyPlanType ? userPlans.tier2.price : (userPlans.tier2.price * 10)} monthlyBilling={monthlyPlanType} imageSrc={'/images/icon-advanced.svg'} />
                        </div>
                    </div>
                    {/* Plan Option 3 */}
                    <div className='w-full mb-3' onClick={() => handlePlanSelect(userPlans.tier3)}>
                        <PlanOption name={userPlans.tier3.name} price={monthlyPlanType ? userPlans.tier3.price : (userPlans.tier3.price * 10)} monthlyBilling={monthlyPlanType} imageSrc={'/images/icon-pro.svg'} />
                    </div>
                    {/* Toggle Plans Monthly/Yearly */}
                    <div className='w-full flex flex-col items-center bg-gray-100 h-12 rounded-md' onClick={() => setMonthlyPlanType(!monthlyPlanType)}>
                        <div className='flex font-semibold pt-3 cursor-pointer'>
                            <span className={monthlyPlanType ? `text-blue-900 mr-3` : `text-gray-500 mr-3`}>Monthly</span>
                            <ToggleSwitch onToggle={setMonthlyPlanType} checked={monthlyPlanType} />
                            <span className={!monthlyPlanType ? `text-blue-900 ml-3` : `text-gray-500 ml-3`}>Yearly</span>
                        </div>
                    </div>

                    <Footer currentStep={currentStep} />
                </form>
            )}
        </Formik>
    )
}

export { SelectPlan }
import { useAppDispatch, useAppSelector } from "../hooks"
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Footer } from "./utilities"
import { setUser } from "../store/formSlice"
import { setStep } from "../store/stepSlice"

const SelectPlan = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.userObject.value)
    const currentStep = useAppSelector(state => state.stepTracker.value)

    return (
        
        <Formik
            initialValues={user}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be more than 2 characters')
                        .max(15, 'Must be 15 characters or less')
                        .required('This field is required'),
                    phone: Yup.string()
                        .min(7, 'Must be more than 7 characters')
                        .max(10, 'Must be 10 characters or less')
                        .required('This field is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('This field is required'),
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
                        <h1 className="text-2xl font-semibold text-blue-900 pt-1">Personal Info</h1>
                        <p className="text-gray-500 py-2 text-xl">You have the option of monthly or yearly billing.</p>
                    </div>

                    {/* Build cards for user the select a plan from */}
                    <div>

                    </div>

                    <Footer currentStep={currentStep} />
                </form>
            )}
        </Formik>
    )
}

export { SelectPlan }
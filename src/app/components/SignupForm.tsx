import * as Yup from 'yup';
import { Formik } from 'formik';
import { setUser } from '@/app/store/formSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setStep } from '../store/stepSlice';
import { Footer } from './utilities';


const SignupForm = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.userObject.value)

    function formatPhoneNumber(phoneNumber: string): string {
        const trimmedPhoneNumber = phoneNumber.slice(0, 12); // Cut off at 10 characters
        const phoneNumberRegex = /(\d{3})(\d{3})(\d{4})/;

        const match = trimmedPhoneNumber.match(phoneNumberRegex);
        if (!match) {
            // Return the original value if it doesn't match the expected format
            return trimmedPhoneNumber;
        }

        return `${match[1]} ${match[2]} ${match[3]}`;
    }



    return (
        <Formik
            initialValues={user}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be more than 2 characters.')
                        .max(15, 'Max 15 characters.')
                        .required('This field is required.'),
                    phone: Yup.string()
                        .min(10, 'Please include area code.')
                        .max(13, 'Too many characters.')
                        .required('This field is required.'),
                    email: Yup.string()
                        .email('Invalid email address.')
                        .required('This field is required.'),
                })}
            onSubmit={values => {
                dispatch(setUser(values))
                dispatch(setStep(2))
            }}
        >
            {formik => (
                <form
                    onSubmit={formik.handleSubmit}
                    className="p-5 flex flex-col items-center">
                    <div className="w-full max-w-sm">
                        <h1 className="text-2xl font-semibold text-blue-900 pt-1">Personal info</h1>
                        <p className="text-gray-500 py-2 text-xl">Please provide your name, email address and phone number.</p>

                        {/* Begins Name Field */}
                        <div className="mb-4 text-blue-900">
                            <label htmlFor="name">Name</label>
                            {formik.touched.name && formik.errors.name ? (
                                <div className='float-right text-red-500' >{formik.errors.name}</div>
                            ) : null}
                            <input
                                id="name"
                                type="text"
                                {...formik.getFieldProps('name')}
                                className="w-full outline outline-offset-2 outline-1 outline-gray-200 mt-1 h-8 rounded"
                            />
                        </div>
                        {/* Ends Name Field */}

                        {/* Begins Email Field */}
                        <div className="mb-4 text-blue-900">
                            <label htmlFor="email">Email Address</label>
                            {formik.touched.email && formik.errors.email ? (
                                <div className='float-right text-red-500' >{formik.errors.email}</div>
                            ) : null}
                            <input
                                id="email"
                                type="email"
                                {...formik.getFieldProps('email')}
                                className="w-full outline outline-offset-2 outline-1 outline-gray-200 mt-1 h-8 rounded"
                            />
                        </div>
                        {/* Ends Email Field */}

                        {/* Begins PhoneNumber Field */}
                        <div className="mb-4 text-blue-900">
                            <label htmlFor="phone">Phone Number</label>
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className='float-right text-red-500' >{formik.errors.phone}</div>
                            ) : null}
                            <input
                                id="phone"
                                type="phone"
                                {...formik.getFieldProps('phone')}
                                value={formatPhoneNumber(formik.values.phone)}
                                className="w-full outline outline-offset-2 outline-1 outline-gray-200 mt-1 h-8 rounded"
                            />
                        </div>
                        {/* Ends PhoneNumber Field */}
                    </div>
                    <Footer />
                </form>
            )}
        </Formik>
    );
};

export { SignupForm }
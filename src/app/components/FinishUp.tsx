import { useAppSelector } from "../hooks"
import { Footer } from "./utilities"

export const FinishUp = () => {
    
    const currentPlan = useAppSelector(state => state.trackPlan.value)

    console.log(currentPlan, 'current plan')
    
    return (
        <>
            <div className='p-5 flex flex-col items-center'>
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-blue-900 pt-1">Finishing Up</h1>
                    <p className="text-gray-500 py-2 text-xl">Double-check everything looks OK before confirming.</p>
                </div>
                <div className={`flex items-center justify-between px-3 w-full outline outline-offset-2 outline-2 mt-1 h-20 rounded-lg cursor-pointer`}>
                    <div className="flex items-center">
    
                        <label className={`form-check-label inline-block text-gray-800`}>
                            <span className='font-semibold text-blue-900'>
                                {'name'}
                            </span>
                            <span className='text-gray-500 flex flex-col'>
                                {'change'}
                            </span>
                        </label>
                    </div>
                    <div className=''>
                        <span className='text-gray-500 flex flex-col'>
                            {`price`}
                        </span>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
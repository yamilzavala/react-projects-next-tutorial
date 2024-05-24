'use client'
import { createTaskCustom } from "@/utils/actions";
import { useFormState } from 'react-dom';
// The useFormStatus Hook provides status information of the last form submission.
// useFormState is a Hook that allows you to update state based on the result of a form action.
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import SubmitBtn from "./SubmitBtn";

const initialState = {
    message: null
}

const TaskFormCustom = () => {
    const [formState, setFormState] = useFormState(createTaskCustom, initialState);

    useEffect(() => {
        if(formState.message === 'error') {
            toast.error('there was an error')
            return
        }
        if(formState.message === 'success') {
            toast.success('task created')
        }
    },[formState])

    return (        
        <form action={setFormState}>
            {formState.message ? <p className="mb-2">{formState.message}</p> : null}
            <div className="join w-full">
                <input type='text' placeholder='type here' name='content' required className='join-item w-full input input-bordered'/>
                <SubmitBtn text='create task'/>
            </div>
        </form>
        
    );
};

export default TaskFormCustom;
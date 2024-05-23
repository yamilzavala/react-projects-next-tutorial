'use client'
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from 'react-dom';
// The useFormStatus Hook provides status information of the last form submission.
// useFormState is a Hook that allows you to update state based on the result of a form action.

const SubmitBtn = () => {
    const {pending} = useFormStatus();
    return (
        <button 
        type="submit" 
        className="btn btn-primary join-item uppercase"
        disabled={pending}>
            {pending ? 'please wait...' : 'create task'}
        </button>
    )
}

const initialState = {
    message: null
}

const TaskFormCustom = () => {
    const [formState, setFormState] = useFormState(createTaskCustom, initialState);
    return (        
        <form action={setFormState}>
            {formState.message ? <p className="mb-2">{formState.message}</p> : null}
            <div className="join w-full">
                <input type='text' placeholder='type here' name='content' required className='join-item w-full input input-bordered'/>
                <SubmitBtn/>
            </div>
        </form>
        
    );
};

export default TaskFormCustom;
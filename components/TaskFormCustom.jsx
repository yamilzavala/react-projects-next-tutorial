'use client'
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus } from 'react-dom';

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

const TaskFormCustom = () => {
    return (        
        <form action={createTaskCustom} className="join w-full">
            <input type='text' placeholder='type here' name='content' required className='join-item w-full input input-bordered'/>
            <SubmitBtn/>
        </form>
        
    );
};

export default TaskFormCustom;
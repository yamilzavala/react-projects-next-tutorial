'use client'
import { editTask } from "@/utils/actions";
import SubmitBtn from "./SubmitBtn";

const EditForm = ({task}) => {
    const {completed, id, content} = task;
    return (
        <form  className="max-w-sm p-12 border border-base-300 rounded-lg" action={editTask}>
            <input value={id} name='id' type="hidden"/>
            
            <input defaultValue={content} required name='content' type="text" className='w-full input input-bordered'/>

            <div className="form-control my-4">
                <label htmlFor="completed" className="label cursor-pointer">
                    <span className="label-text">completed</span>
                    <input defaultChecked={completed} name='completed' id='completed' type="checkbox" className='checkbox checkbox-primary checkbox-sm'/>
                </label>
            </div>

            <SubmitBtn text='edit'/>
        </form>
    );
};

export default EditForm;
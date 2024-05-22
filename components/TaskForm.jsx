import { createTask } from "@/utils/actions";

const TaskForm = () => {
    return (        
        <form action={createTask} className="join w-full">
            <input type='text' placeholder='type here' name='content' required className='join-item w-full input input-bordered'/>
            <button type="submit" className="btn btn-primary join-item uppercase">create task</button>
        </form>
        
    );
};

export default TaskForm;
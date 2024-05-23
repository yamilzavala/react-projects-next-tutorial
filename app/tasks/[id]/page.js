import { EditForm } from "@/components";
import { editTask, getTaskById } from "@/utils/actions";
import Link from "next/link";

const SingleTask = async ({params}) => {
    const task = await getTaskById(params.id)
    
    return (
        <>
            <div className="mb-16">
                <Link href='/tasks' className="btn btn-accent">back to tasks</Link>
            </div>
            <EditForm task={task}/>
        </>
    );
};

export default SingleTask;
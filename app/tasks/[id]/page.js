import { editTask, getTaskById } from "@/utils/actions";

const SingleTask = ({params}) => {
    const {content} = getTaskById(params.id)
    console.log('---CONTENT:', content)
    return (
        <form  className="join w-full" action={editTask}>
            <input value={content} name='content' type="text" className='join-item w-full input input-bordered'/>
            <input value={params.id} name='id' type="hidden"/>
            <button className="btn btn-primary join-item uppercase">save</button>
        </form>
    );
};

export default SingleTask;
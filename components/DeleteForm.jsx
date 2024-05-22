import { deleteTask } from "@/utils/actions";

const DeleteForm = async ({id}) => {

    return (
        <form action={deleteTask}>
            <input type="hidden" value={id} name="id" />
            <button type="submit" class="btn btn-xs btn-error">delete</button>    
        </form>       
       
    );
};

export default DeleteForm;
import { deleteTask } from "@/utils/actions";
import SubmitBtn from "./SubmitBtn";

const DeleteForm = async ({id}) => {

    return (
        <form action={deleteTask}>
            <input type="hidden" value={id} name="id" />
            <SubmitBtn text='delete'/>   
        </form>       
       
    );
};

export default DeleteForm;
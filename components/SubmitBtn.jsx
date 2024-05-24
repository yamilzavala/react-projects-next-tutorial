'use client'
import { useFormStatus } from 'react-dom';

const SubmitBtn = ({text}) => {
    const {pending} = useFormStatus();
    let styles = '';

    if(text === 'create task') {
        styles = 'btn btn-primary join-item uppercas'
    }
    if(text === 'edit') {
        styles = 'btn btn-primary btn-block btn-sm join-item uppercase'
    }
    if(text === 'delete') {
        styles = 'btn btn-xs btn-error'
    }

    return (
        <button 
        type='submit'
        className={styles}
        disabled={pending}>
            {pending ? 'please wait...' : text}
        </button>
    );
};

export default SubmitBtn;
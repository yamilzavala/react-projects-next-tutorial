import { TaskForm, TaskList, TaskFormCustom } from '@/components';
import React from 'react';

const TasksPage = () => {
    return (
        <div className='max-w-lg'>
            {/* <TaskForm/> */}
            <TaskFormCustom/>
            <TaskList/>
        </div>
    );
};

export default TasksPage;
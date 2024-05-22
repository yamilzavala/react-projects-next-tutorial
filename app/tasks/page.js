import { TaskForm, TaskList } from '@/components';
import React from 'react';

const TasksPage = () => {
    return (
        <div className='max-w-lg'>
            <TaskForm/>
            <TaskList/>
        </div>
    );
};

export default TasksPage;
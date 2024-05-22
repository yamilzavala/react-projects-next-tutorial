//singleton prisma instance that allow to get mappers to tables
import prisma from '@/utils/db';

//-------------------------------------
//---- Prima handlers (CRUD) START ----
//-------------------------------------

//insert
const prismaInserHandler = async () => {
    await prisma.task.create({
      data: {
        content: 'Wake up!'
      },
    });
}

//delete
const prismaDeleteHandler = async (id) => {
    await prisma.task.delete({
      where: {
        id:id
      },
    });
}

//update content
const prismaUpdateHandler = async (newData, id) => {
    await prisma.task.update({
        where: {
            id: id
        },
        data: {
            content: newData
        }
    })
}

//update or insert
const prismaUpsertHandler = async (id, newData) => {
    await prisma.task.update({
        where: {
            id: id
        },
        update: {
            content: newData
        },
        create: {
            content: newData
        },
    })
}

//select all  
const prismaGetTasks = async () => {
    const allTasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return allTasks;
}

//select by id
const primaGetById = async (id) => {
    const task = await prisma.task.findUnique({
        where: {
            id: id
        }
    })
    return task;
}

//-------------------------------------
//---- Prima handlers (CRUD) END ----
//-------------------------------------

//Your server component
const PrismaExamplePage = async () => {
    prismaInserHandler();    
    const tasks = await prismaGetTasks();
    return (
        <div>
            <h1 className="text-7xl">PrismaExamplePage</h1>     
            {tasks.map(task => {
                return (
                    <h2 key={task.id} className='text-xl py-2'>
                        {task.content}
                    </h2>
                )
            })}       
        </div>
    );
};

export default PrismaExamplePage;
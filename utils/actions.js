'use server'
import { revalidatePath } from "next/cache";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { z } from 'zod';

export const createTask = async (formData) => {
    const content = formData.get('content');
    await prisma.task.create({
        data: {
            content
        }
    });
    revalidatePath('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
    await new Promise(resolve => setTimeout(resolve,2000));
    const content = formData.get('content');

    //zod schema
    const Task = z.object({
        content: z.string().min(5)
    })

    try {
        Task.parse({content})
        await prisma.task.create({
            data: {
                content
            }
        });
        revalidatePath('/tasks');
        return {message: 'success'};
    } catch (error) {
        console.log('ERROR --: ', error)
        return {message: 'error...'};
    }
}

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
}

export const getTaskById = async (id) => {
    return await prisma.task.findUnique({
        where: {
          id
        },
      });
}

export const deleteTask = async (formData) => {
    const id = formData.get('id');
    await prisma.task.delete({
        where: {
            id
        }
    })
    revalidatePath('/tasks')
}

export const editTask = async (formData) => {
    const id = formData.get('id');
    const completed = formData.get('completed');
    const content = formData.get('content');
    await prisma.task.update({
        where: {
            id
        },
        data: {
            content,
            completed: completed === 'on' ? true : false
        }
    })
    redirect('/tasks')
}

'use server'
import { revalidatePath } from "next/cache";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export const createTask = async (formData) => {
    const content = formData.get('content');
    await prisma.task.create({
        data: {
            content
        }
    });
    revalidatePath('/tasks')
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
    const newContent = formData.get('content');
    await prisma.task.update({
        where: {
            id
        },
        data: {
            content: newContent
        }
    })
    redirect('/tasks')
}

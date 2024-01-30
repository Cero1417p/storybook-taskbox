import type {Meta, StoryObj} from '@storybook/react'
import Task, {EnumTaskState} from './Task';

const meta = {
    component:Task,
    title:"Task",
    tags:['autodocs']
} satisfies Meta<typeof  Task>

export default meta

type Story = StoryObj<typeof Task>


export const Default= {
    args:{
        task: {
            id: '1',
            title: 'Test Task',
            state: EnumTaskState.TASK_INBOX,
        },
    }
} satisfies Story;

export const Pinned = {
    args : {
        task: {
            ...Default.args.task,
            state: EnumTaskState.TASK_PINNED,
        },
    }
} satisfies Story;

export const Archived = {
    args : {
        task: {
            ...Default.args.task,
            state: EnumTaskState.TASK_ARCHIVED,
        },
    }
} satisfies Story
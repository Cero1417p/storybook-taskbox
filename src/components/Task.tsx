export enum EnumTaskState {
    TASK_ARCHIVED="TASK_ARCHIVED",
    TASK_PINNED="TASK_PINNED",
    TASK_INBOX="TASK_INBOX"
}

export interface ITask{
    id:string,
    title:string,
    state:EnumTaskState
}
export interface TaskProps{
    task: ITask,
    onArchiveTask:(id:string)=>void,
    onPinTask: (id:string)=>void
}
export default function Task({task:{id,title,state},onArchiveTask,onPinTask}:TaskProps) {
    return (
        <div className={`list-item ${state}`}>
            <label
                htmlFor="checked"
                aria-label={`archiveTask-${id}`}
                className="checkbox"
            >
                <input
                    type="checkbox"
                    disabled={true}
                    name="checked"
                    id={`archiveTask-${id}`}
                    checked={state === EnumTaskState.TASK_ARCHIVED}
                />
                <span
                    className="checkbox-custom"
                    onClick={() => onArchiveTask(id)}
                />
            </label>

            <label htmlFor="title" aria-label={title} className="title">
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    name="title"
                    placeholder="Input title"
                />
            </label>

            {state !== EnumTaskState.TASK_ARCHIVED && (
                <button
                    className="pin-button"
                    onClick={() => onPinTask(id)}
                    id={`pinTask-${id}`}
                    aria-label={`pinTask-${id}`}
                    key={`pinTask-${id}`}
                >
                    <span className={`icon-star`} />
                </button>
            )}
        </div>
    );
}

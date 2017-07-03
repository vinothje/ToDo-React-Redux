export const DELETETODO = 'delete_todo';
export const LISTTODO = 'list_todo';

export function deleteToDo(todo) {
    console.log('delete is clickec', todo);
    return {
        type: DELETETODO,
        payload: todo
    }
}

export function listToDo() {
    const payload = [
        {id: 1, name: 'job1'},
        {id: 2, name: 'job2'},
        {id: 3, name: 'job3'}
        ];
    return {
        type: LISTTODO,
        payload: payload
    }
}

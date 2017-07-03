export const DELETETODO = 'delete_todo';
export const LISTTODO = 'list_todo';
export const NEWTODO = 'new_todo';

export function deleteToDo(todo) {
    console.log('delete is clickec', todo);
    return {
        type: DELETETODO,
        payload: todo
    }
}

export function listToDo() {
    const payload = [];
    return {
        type: LISTTODO,
        payload: payload
    }
}

export function newToDo(payload) {
    return {
        type: NEWTODO,
        payload: payload
    };
}

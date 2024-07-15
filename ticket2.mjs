function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(todo => {
            return todo;
        })
        .catch(error => {
            console.error('Error fetching todo:', error);
            throw error;
        });
}

// Виклик функції
fetchTodo()
    .then(todo => {
        console.log('Todo item:', todo);
    })
    .catch(error => {
        console.error('Error:', error);
    });


fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completed = json


        const completedTasks = completed.filter(function(completed) {
            return completed.completed === true;
        });
        console.log(completedTasks);
    })
    .catch(function(err) {
        console.log(err);
    });
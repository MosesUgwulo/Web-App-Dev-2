fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completed = json


        const completedTasks = completed.reduce(function(total, completed) {
            return total + completed.completed;
        });

        console.log("Total completed tasks: " + completedTasks.length);

    })
    .catch(function(err) {
        console.log(err);
    });
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todo => {
        const titles = todo;

        const allTitles = titles.map(function(titles) {
            return titles.title;
        });

        console.log(allTitles);

    })
    .catch(function(err) {
        console.log(err);
    });

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {

  const uncompleted = json.reduce((prev, curr, index, array) =>{
    if(curr.completed === true) prev.push({userId : curr.userId, title : curr.title})
    return prev;
  }, []);

   console.log(uncompleted);

})

.catch(function(err) { 
  console.log(err);
});
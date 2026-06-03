fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then(response => response.json())
      .then(json => console.log(json))
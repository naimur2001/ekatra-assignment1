# Demonstration of api
* in locall server http://localhost:5000/todos on todos api showing these
* [{"id":"1","task":"Buy groceries","completed":false},{"id":"2","task":"Finish Ekatra Assignment","completed":true},{"id":"3","task":"Attend online seminar","completed":true}]
# Demonstration of cron job
* * cron.schedule('0 0 * * *', () => {
  datas = datas.filter(todo => !todo.completed);
saveToFile()
  console.log('Deleted completed todos.');
});
* this is cron built in function this is use for doing certain job automically based on command in a specific time.
* Above function used in my code to delete completed to do data at specifice time. And '0 0 * * *' this is for delete data at mid night.
# Brief documentation on the API
* To Create data we use this --> api "/todos/post"
* ---> Create api is for creating new to do list and it add in json file.
* To Read data we utilize this --> api "/todos"
* ---> Read api is for We get all to do list data. 
* To Update data we use this --> api "/todos/put/:id"
* ---> Update api is for if we need any chnage in our to do data we can change easily our inserted old data.
* To Delete data we use this --> api "/todos/delete/:id"
* ---> Delete api is for if we want to delete any to do data after or before ou work done we can delete our to do data.

# problem faced
* * I am new with cron job / node cron. I took help from internet to find cron job problem. And it is not so dificult i found. I think i tried best to solve the assignment based on cron job. 

# Thanks Ekatra for giving me this oppurtunity.

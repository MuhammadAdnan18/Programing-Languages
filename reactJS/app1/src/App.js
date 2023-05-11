//here in app.js we write jsx( html which is translated into javascript) 
//for styling in html we give classes but we cant do that here bcz class is a keyword in javascript and react so instead we use className
//the benifit of working with react is that we can devide our app into components like i can write the code used for TODO logic in anather component file(Todo.js).it helps in the reusability bcz if u want to reuse the code again u just need to write the file name in div
//now import todo function from todo.js
//all components are saved in the components folder 
//by default the app will show title in the place of todo task which is not what we want
// to get todo tasks from user we will use props in the todo file
import Todo from "./components/Todo";

function App() {
  return (
<div>
  <h1 className="main">My TODOs</h1>
<Todo text='learn react'/>
<Todo text='master react'/>
<Todo text='explore the full react js course'/>
</div>

  );
}

export default App;

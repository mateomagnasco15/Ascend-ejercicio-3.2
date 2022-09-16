import './App.css';
import data from './data';
import Todo from './components/Todo';



function App() {

  const renderList = data.map(({ id, description, completed }) => (
    <Todo key={id} id={id} completed={completed} >
      {description}
   </Todo>
 ))

  return (
    <div className="App">
      {renderList}
    </div>
  );
}

export default App;

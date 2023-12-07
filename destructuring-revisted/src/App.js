import './App.css';
import ArraysForm from './UsingArrays/ArraysForm';
import ObjectForm from './UsingObjects/ObjectForm';

function App() {
  return (
    <>
      <div className='center'>
        <h1>Welcome to Destructuring Revisited</h1>
        <p>
          
          The most used data structures for destructuring in JavaScript, Object and Arrays. Objects allow you to create single enity that stores data items by keys. While Arrays allows us to gather data items into an ordered list. Destructuring assignments is a special syntax that allows programmers to "unpack" arrays or objects into a bunch variables that can be more convenient. Below you will find examples of both Arrays and Objects. 

        </p>
        <h2>Destructuring using Arrays</h2>
          <ArraysForm/>
        <h2>Destructuring using Objects</h2>
          <ObjectForm/>
      </div>
    </>

  );
}

export default App;

import './App.css';
import TypewriterComponent from './Typewriter';

function App() {
  return (
    <div className="App">

      <div className='Moodio'>
          <TypewriterComponent/>
      </div>

      <div className='grid lg:grid-cols-3 lg:grid-rows-3 gap-10 justify-items-center'>
      <div className='square bg-iris h-32 w-32'>
        <button className='bg-iris'></button>
        </div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div> 
      <div className='square bg-iris h-32 w-32'></div>      
      </div>
      
    </div>
  );
}

export default App;

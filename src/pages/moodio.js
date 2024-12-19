// import './App.css';
import TypewriterComponent from '../Typewriter';
import Tooltip from '../Tooltip';


const Moodio = () => {
  return (
    <div className="App">

      <div className='Moodio'>
          <TypewriterComponent/>
      </div>

      {/* Relative positioning and hover is grouped */}
      <div className='grid lg:grid-cols-3 lg:grid-rows-3 gap-4 my-36 justify-items-center relative group'>
      <div id='square1' className='square1 bg-light_yellow h-32 w-40 mx-1 translate-x-64 rounded-3xl duration-500'>
        {/* <button className='bg-iris'></button> */}
          <Tooltip tooltip="DancePop,Funk">
            <span className='absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-dark_spring_green text-white p-2 rounded mt-2'></span>
            </Tooltip>
        </div> 
      <div id='square2' className='square2 bg-light_yellow h-32 w-40 -mx-1 rounded-3xl duration-500'>
          <Tooltip tooltip="Ambient,Jazz">
            <span className='absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-dark_spring_green text-white p-2 rounded mt-2'></span>

            </Tooltip>
        
        </div> 
      <div id='square3' className='square3 bg-light_yellow h-32 w-40 -mx-1 -translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Slow-ballads,Indie"/>
        </div> 
      <div id='square4' className='square4 bg-light_yellow h-32 w-40 -mx-1 translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="R&B,Soul"/>
        </div> 
      <div id='square5' className='square5 bg-light_yellow h-32 w-40 -mx-1 rounded-3xl duration-500'>
        <Tooltip tooltip="Pop,Reggae"/>
        </div> 
      <div id='square6' className='square6 bg-light_yellow h-32 w-40 -mx-1 -translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Punk,Rap"/>
        </div> 
      <div id='square7' className='square7 bg-light_yellow h-32 w-40 -mx-1 translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Trip-hop,Electronic"/>
        </div> 
      <div id='square8' className='square8 bg-light_yellow h-32 w-40 -mx-1 rounded-3xl duration-500'>
        <Tooltip tooltip="Bubblegum,Quirky"/>
        </div> 
      <div id='square9' className='square9 bg-light_yellow h-32 w-40 -mx-1 -translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Classical,Instrumental"/>
        </div>      
      </div>
      
    </div>
  );
}

export default Moodio;

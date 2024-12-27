// import './App.css';
import TypewriterComponent from '../Typewriter';
import Tooltip from '../Tooltip';
import "./moodio.css"

const Moodio = () => {
  return (
    <div className="App">

      <div className='Moodio'>
          <TypewriterComponent/>
      </div>

      {/* Relative positioning and hover is grouped */}
      <div className='grid lg:grid-cols-3 lg:grid-rows-3 gap-4 my-36 justify-items-center relative'>
      
      <div 
      id='square1' 
      className='relative group square1 bg-light_yellow h-32 w-40 mx-1 translate-x-64 rounded-3xl duration-500'>
          <Tooltip tooltip="DancePop,Funk">
            <div className="h-full w-full"></div>
          </Tooltip>
        </div> 

      <div id='square2'
       className='relative group square2 bg-light_yellow h-32 w-40 -mx-1 rounded-3xl duration-500'>
          <Tooltip tooltip="Ambient,Jazz">
            <div className="h-full w-full"></div>
          </Tooltip>
        </div> 

      <div 
        id='square3'
       className='relative group square3 bg-light_yellow h-32 w-40 -mx-1 -translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Slow-ballads,Indie">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div> 

      <div 
      id='square4'
       className='relative group square4 bg-light_yellow h-32 w-40 -mx-1 translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="R&B,Soul">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div> 

      <div
       id='square5'
        className='relative group square5 bg-light_yellow h-32 w-40 -mx-1 rounded-3xl duration-500'>
        <Tooltip tooltip="Pop,Reggae">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div> 

      <div
       id='square6'
       className='relative group square6 bg-light_yellow h-32 w-40 -mx-1 -translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Punk,Rap">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div> 

      <div
      id='square7'
       className='relative group square7 bg-light_yellow h-32 w-40 -mx-1 translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Trip-hop,Electronic">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div> 

      <div
       id='square8'
        className='relative group square8 bg-light_yellow h-32 w-40 -mx-1 rounded-3xl duration-500'>
        <Tooltip tooltip="Bubblegum,Quirky">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div> 

      <div
       id='square9'
        className='relative group square9 bg-light_yellow h-32 w-40 -mx-1 -translate-x-64 rounded-3xl duration-500'>
        <Tooltip tooltip="Classical,Instrumental">
        <div className="h-full w-full"></div>
        </Tooltip>
        </div>      
      </div>
      
    </div>
  );
}

export default Moodio;

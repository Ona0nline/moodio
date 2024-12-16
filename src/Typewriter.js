import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => (
    <div className='typewritercom'>
       <Typewriter
    options={{
    strings: ['Moodio'],
    autoStart: true,
    loop: true,
            }}
    /> 
    </div>
    
)

export default TypewriterComponent;

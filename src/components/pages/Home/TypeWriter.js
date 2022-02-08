import React from 'react';
import Typewriter from 'typewriter-effect'

const typeWriterStrings = [
    'Junior Software Developer',
    "MERN Stack Developer",
    'IT Apprentice',
    'Customer Service Specialist',
    'Nak Muay'
]

function Type(){
    return(
        <Typewriter
            className='typewrite'
            options={{
            strings: typeWriterStrings, 
            autoStart: true,
            loop: true,
            deleteSpeed: 65,
            cursor: '🥊'
            }}
        />
    )
}
export default Type;
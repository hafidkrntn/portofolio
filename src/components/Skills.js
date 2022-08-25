import React from 'react'

import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Reacts from '../assets/react.png'


const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#30475E] text-gray-300">
            
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-red-600">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>
                {/* Kotak Label */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Html} alt="HTML Icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Css} alt="CSS Icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
                        <p className="my-4">Github</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Javascript} alt="Javascript Icon" />
                        <p className="my-4">Javascript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Reacts} alt="Reacts Icon" />
                        <p className="my-4">React.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
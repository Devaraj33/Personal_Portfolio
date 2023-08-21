import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b  from-purple-400 via-purple-400 text-black '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-700 text-blue-700'>About</p>
                </div>
                <p className='text-xl mt-15'>
                My name is Devaraj, and I am from Karnataka. I have completed my graduation in BCA (Bachelor of Computer Applications) and have over 4 years of experience in the non-sector. 
                In my journey of transitioning my career, I have chosen the Java Full Stack Developer course from Imarticus.During the course, I acquired knowledge of various front-end technologies 
                such as HTML, CSS, JavaScript, Bootstrap, and React.js. Additionally, I gained a basic understanding of Java, 
                Spring Boot, and database management using MySQL and PostgreSQL.<br/>
                </p>


            </div>
        </div>
    )
}

export default About
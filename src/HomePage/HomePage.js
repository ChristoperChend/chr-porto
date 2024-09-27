import React from "react";
import { ReactTyped } from "react-typed";
import photo from '../Assets/NORE_FEREN03399.JPG'

function HomePage() {
    return <section id="home" className="mx-40 flex justify-between gap-x-32">
        <div className="font-jetBrains space-y-3 mt-20">
            <h1 className="text-3xl font-bold">WELCOME!</h1>
            <h2 className="text-5xl font-bold">
                I Am{' '}
                <ReactTyped
                    strings={['Software Engineer', 'Android Developer', 'Web Developer']}
                    typeSpeed={70}
                    backSpeed={50}
                    loop
                />
            </h2>
            <h3 className="font-normal">Hello! I'm Christoper Chendra, with the passion for developing in various languages that can be used for commercial businesses</h3>
        </div>

        <div>
            <img src={photo} className="w-[500px] h-[500px] object-cover"></img>
        </div>
    </section>;
}

export default HomePage;

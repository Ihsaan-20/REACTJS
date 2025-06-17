import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './index.css';
import img from './img.png'; // Confirm if it's .png in your project and update
import splash from './splash.png'; // Confirm if it's .png in your project and update
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6'; // Import the new Twitter (X) icon

const Home = () => {
    const multiTextRef = useRef(null);

    useEffect(() => {
        const typingEffect = new Typed(multiTextRef.current, {
            strings: ["<span style='color:#ffba00'>Full-Stack Developer</span>"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500
        });

        return () => {
            typingEffect.destroy();
        };
    }, []);


    return (
        <div className="min-h-screen bg-[#f6f9fd] overflow-hidden">
            <nav className="flex justify-between items-center h-20 px-4 md:px-10 z-50">
                {/* Logo on the left */}
                <div className="flex text-3xl md:text-4xl font-extrabold text-black tracking-wider cursor-pointer">
                    devihsaan<span className="text-portfolio-orange">.</span>io
                </div>

                {/* Social Links on the right */}
                <div className="flex space-x-4">
                    <a href="https://github.com/Ihsaan-20" className="text-black text-2xl hover:text-portfolio-orange"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/muhammad-ihsan-gohar-chandio-20aa11a5/" className="text-black text-2xl hover:text-portfolio-orange"><BsLinkedin /></a>
                    <a href="https://twitter.com/Ihsaan_chandio" className="text-black text-2xl hover:text-portfolio-orange"><FaXTwitter /></a>
                </div>
            </nav>

            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-10 h-auto md:h-[calc(100vh-80px)] relative">
                {/* Background circles - using absolute positioning and custom animation */}
                {/* Updated gradient to from-portfolio-orange via-white to-pink-400 */}
                <div 
                    className="absolute content-[''] h-[350px] w-[350px] rounded-full left-[-12%] top-[30%] animate-object1 md:block hidden" 
                    style={{ background: 'linear-gradient(45deg, #ffba00, pink)' }}
                ></div>
                <div 
                    className="absolute content-[''] h-[100px] w-[100px] rounded-full left-[35%] top-[12%] animate-object2 md:block hidden" 
                    style={{ background: 'linear-gradient(45deg, #ffba00, pink)' }}
                ></div>

                <div className="w-full md:w-1/2 z-10 p-4 md:p-0">
                    <span className="block relative text-3xl md:text-4xl tracking-widest text-black after:content-[''] after:absolute after:h-1 after:w-12 after:bottom-2.5 after:bg-portfolio-orange">Hello</span>
                    <h1 className="block text-4xl md:text-5xl font-extrabold text-black mt-2">I'm a <span className="text-portfolio-orange capitalize" ref={multiTextRef}></span></h1>
                    <p className="block w-full md:w-[90%] text-base md:text-xl text-black mt-4 mb-8">
                        I craft robust and engaging digital experiences. With a strong foundation in both frontend and backend technologies, I build scalable web applications from concept to deployment. Let's create something impactful together.
                    </p>
                    {/* Hire Me button removed as requested */}
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative md:pl-24">
                    <div className="relative w-full h-auto">
                        <img src={splash} id="splash" alt="Splash Background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-35deg] w-[160%] md:w-[160%] filter saturate-[200%] animate-animate" />
                        <img src={img} alt="Profile" className="relative h-auto w-full max-w-sm md:max-w-none md:w-[calc(100%-80px)] md:top-12 md:right-12 animate-animateUser z-10" />
                    </div>
                </div>
            </div>
            {/* Custom animations for circles */}
            <style jsx>{`
                @keyframes object1 {
                    50% {
                        left: -13%;
                        top: 31%;
                    }
                }
                @keyframes object2 {
                    50% {
                        left: 35%;
                        top: 10%;
                    }
                }
                @keyframes animateUser {
                    50% {
                        right: 30px;
                        top: 40px;
                    }
                }
                @keyframes animate {
                    50% {
                        top: 49%;
                        left: 51%;
                        width: 155%;
                    }
                }
                .animate-object1 {
                    animation: object1 6s linear infinite;
                }
                .animate-object2 {
                    animation: object2 6s linear infinite;
                }
                .animate-animateUser {
                    animation: animateUser 4s linear infinite;
                }
                .animate-animate {
                    animation: animate 4s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Home;
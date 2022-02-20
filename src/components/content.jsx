import React, {useState, useEffect} from "react";
import phone from "../images/illustration-phones.svg";
import editorMobile from "../images/illustration-editor-mobile.svg";
import editorDesktop from "../images/illustration-editor-desktop.svg";
import laptopDesktop from "../images/illustration-laptop-desktop.svg";
import laptopMobile from "../images/illustration-laptop-mobile.svg";

const hasWindow = typeof window !== "undefned";

function getDimension() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
}

const Content = () => {
    const [width, setWidth] = useState(getDimension());

    useEffect(() => {
        if(hasWindow) {
            function handleResize() {
                setWidth(getDimension())
            }
            window.addEventListener('resize', handleResize());
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [hasWindow]);
    return (
        <div className="container">
            <div className="first my-12 md:my-52 px-2 w-screen">
                <h1 className="text-3xl md:text-4xl text-very-dark-gray-blue font-Overpass font-bold mb-12">Designed for the future</h1>
                <div className="wrapper">
                    <div className="image md:relative">
                        <img src={width < 480 ? editorMobile : editorDesktop} alt="illustration-editor" className="md:absolute md:w-3/5 md:-top-44 md:-right-64" />
                    </div>
                    <div className="text md:w-1/2 md:text-left md:pl-20">
                        <div className="section">
                            <h1 className="text-very-dark-gray-blue font-Overpass text-xl md:text-3xl font-bold p-8 md:px-6 md:pb-3">Introducing an extensible editor</h1>
                            <p className="font-Overpass text-body text-xl md:text-lg px-6">Blogr features an exceedingly intuitive interface which let you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                        </div>
                        <div className="section mt-8">
                            <h1 className="text-very-dark-gray-blue font-Overpass text-3xl md:text-3xl font-bold p-8 md:px-6 md:pb-3">Robust content management</h1>
                            <p className="font-Overpass text-body text-xl md:text-lg px-6">Flexible content management enables users to easily move through posts. Increase the usability of your blog by ading customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second bg-[center_bottom_16rem] bg-cover bg-no-repeat bg-very-dark-gray-blue rounded-tr-bottomleft rounded-bl-bottomleft pb-24 md:pb-0 bg-pattern-circes mt-64 md:mt-80 w-screen md:grid md:grid-cols-2 md:bg-[left_-12rem_bottom_-8rem] md:bg-auto">
                <div className="image relative">
                    <img src={phone} alt="" className="absolute -top-32 left-10 md:-top-16 md:left-20 max-w-lg w-3/4" />
                </div>
                <div className="text pt-56 md:pr-20 md:text-left md:mr-24 md:py-24">
                    <h1 className="font-Overpass text-4xl md:text-3xl font-bold p-8 md:px-0 md:py-4 text-white-text">State of the Art Infrastructure</h1>
                    <p className="font-Overpass text-white-text text-xl md:text-lg px-6 md:p-0">With reliability and speed in mind. Worldwide data centers provide the backbone for ultra-fast connectivity. This ensure your site will load instantly, no matter where your readers are, keeping your site competitive</p>
                </div>
            </div>
            <div className="three mb-24 md:my-40 md:grid md:grid-cols-2 md:mt-64">
                <div className="image my-8 md:relative">
                <img src={width < 480 ? laptopMobile : laptopDesktop} alt="illustration-editor" className="md:absolute md:-top-2/4 md:-left-64 max-w-4xl w-screen" />
                </div>
                <div className="text md:text-left">
                    <h1 className="font-Overpass text-4xl md:text-3xl font-bold p-8 md:pb-4 text-very-dark-gray-blue">Free, open, simple</h1>
                    <p className="font-Overpass text-body md:text-lg text-xl px-8">Blogr is a free and open source application backed by a large community of helpfull developers. It supports features such as code syntax highlighting. RSS feeds, socia media integration, third-party commenting tools, aand works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    <h1 className="font-Overpass text-4xl md:text-3xl font-bold p-8 text-very-dark-gray-blue md:mt-8 md:pb-4">Powerful tooling</h1>
                    <p className="font-Overpass text-body text-xl md:text-lg px-8">Batteries included. We built a simple straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    )
}

export default Content;
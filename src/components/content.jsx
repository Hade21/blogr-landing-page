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
            <div className="first my-12 px-2">
                <h1 className="text-3xl text-very-dark-gray-blue font-Overpass font-bold mb-8">Designed for the future</h1>
                <div className="wrapper">
                    <div className="image">
                        <img src={width < 480 ? editorMobile : editorDesktop} alt="illustration-editor" />
                    </div>
                    <div className="text">
                        <div className="section">
                            <h1 className="text-very-dark-gray-blue font-Overpass text-3xl font-bold p-8">Introducing an extensible editor</h1>
                            <p className="font-Overpass text-body text-xl px-6">Blogr features an exceedingly intuitive interface which let you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                        </div>
                        <div className="section mt-8">
                            <h1 className="text-very-dark-gray-blue font-Overpass text-3xl font-bold p-8">Robust content management</h1>
                            <p className="font-Overpass text-body text-xl px-6">Flexible content management enables users to easily move through posts. Increase the usability of your blog by ading customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second bg-[center_bottom_16rem] bg-cover bg-no-repeat bg-very-dark-gray-blue rounded-tr-bottomleft rounded-bl-bottomleft pb-24 bg-pattern-circes relative mt-64">
                <div className="image absolute -top-1/4">
                    <img src={phone} alt="" className="" />
                </div>
                <div className="text pt-52">
                    <h1 className="font-Overpass text-4xl font-bold p-8 text-white-text">State of the Art Infrastructure</h1>
                    <p className="font-Overpass text-white-text text-xl px-8">With reliability and speed in mind. worldwide data centers provide the backbone for ultra-fast connectivity. This ensure your site will load instantly, no matter where your readers are, keeping your site competitive</p>
                </div>
            </div>
            <div className="three mb-24">
                <div className="image my-8">
                <img src={width < 480 ? laptopMobile : laptopDesktop} alt="illustration-editor" />
                </div>
                <div className="text">
                    <h1 className="font-Overpass text-4xl font-bold p-8 text-very-dark-gray-blue">Free, open, simple</h1>
                    <p className="font-Overpass text-body text-xl px-8">Blogr is a free and open source application backed by a large community of helpfull developers. It supports features such as code syntax highlighting. RSS feeds, socia media integration, third-party commenting tools, aand works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    <h1 className="font-Overpass text-4xl font-bold p-8 text-very-dark-gray-blue">Powerful tooling</h1>
                    <p className="font-Overpass text-body text-xl px-8">Batteries included. We built a simple straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    )
}

export default Content;
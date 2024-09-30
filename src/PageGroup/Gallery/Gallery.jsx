import React, { useState } from "react";
import HeroSection from "../About/Component/HeroSection";
import image from "../About/assets/aboutjmi.jpeg";
import Imagebox from "./Component/Imagebox";
import data from "../../../data/gallery_data.js";

function Gallery() {

    const [button, setButton] = useState(0);
    const [num, setNum] = useState(6);

    const handleClick = (e) => {
        setButton(e.target.value);
    }

    return (
        <>
            <HeroSection
                heading={"Department of Computer Engineering"}
                image={image}
            />
            <div className="flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
            
                <div className="-mt-12 h-8 w-full backdrop-blur-[2px] " />
                <h3 class="mb-5 px-6 text-3xl font-medium"> <span class="text-green-deep">Photo</span> Gallery</h3>              
                    

                <div className="flex flex-col items-center justify-center gap-y-8 font-[450]">
                    <div className="flex flex-wrap justify-center gap-x-10 ">
                        <button value={0} className="w-64 bg-green-deep hover:bg-green-700 text-white font-bold py-2 px-4 border border-silver p-4" onClick={handleClick}>
                            Campus Life
                        </button>
                        <button value={1} className="w-64 bg-green-deep hover:bg-green-700 text-white font-bold py-2 px-4 border border-silver p-4" onClick={handleClick}>
                            Infrastructure
                        </button>
                        <button value={2} className="w-64 bg-green-deep hover:bg-green-700 text-white font-bold py-2 px-4 border border-silver p-4" onClick={handleClick}>
                            Sports
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-8 grid w-full grid-cols-1 place-items-center gap-x-10 gap-y-12 px-2 sm:px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20">
                <Imagebox title={data[button]} num={num}/>
            </div>
            <div className="flex w-full flex-col items-center justify-center my-10 gap-y-20 font-[450]">
                <button className="w-64 bg-green-deep hover:bg-green-700 text-white font-bold py-2 px-4 border border-silver p-4" onClick={() => setNum(num + 6)}>
                    Load More
                </button>
            </div>

        </>
    )
}
export default Gallery
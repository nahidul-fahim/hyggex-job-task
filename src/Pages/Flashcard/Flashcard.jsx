import { useState } from "react";
import { GoLightBulb } from "react-icons/go";
import { PiSpeakerHighThin, PiArrowClockwiseBold  } from "react-icons/pi";
import { FiMaximize } from "react-icons/fi";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";





const Flashcard = () => {


    // hooks
    const [activeTab, setActiveTab] = useState("study")


    return (
        <div id="flashCard" className="mt-14">
            <h2 className="gradient-heading font-bold font-second text-3xl ">Relations and Functions ( Mathematics )</h2>


            {/* tab menu */}
            <div className="font-main flex justify-center items-center gap-8 mt-14">

                {/* study tab */}
                <button onClick={() => setActiveTab("study")}
                    className={`border-b-2 border-[#ffffff00] pb-1 text-lightGray font-medium hover:text-main hover:font-bold duration-500 ${activeTab === "study" ? "border-main border-b-2 text-main font-bold" : ""}`}>
                    Study
                </button>

                {/* quiz tab */}
                <button onClick={() => setActiveTab("quiz")}
                    className={`border-b-2 border-[#ffffff00] pb-1 text-lightGray font-medium hover:text-main hover:font-bold duration-500 ${activeTab === "quiz" ? "border-main border-b-2 text-main font-bold" : ""}`}>
                    Quiz
                </button>


                {/* test tab */}
                <button onClick={() => setActiveTab("test")}
                    className={`border-b-2 border-[#ffffff00] pb-1 text-lightGray font-medium hover:text-main hover:font-bold duration-500 ${activeTab === "test" ? "border-main border-b-2 text-main font-bold" : ""}`}>
                    Test
                </button>


                {/* game tab */}
                <button onClick={() => setActiveTab("game")}
                    className={`border-b-2 border-[#ffffff00] pb-1 text-lightGray font-medium hover:text-main hover:font-bold duration-500 ${activeTab === "game" ? "border-main border-b-2 text-main font-bold" : ""}`}>
                    Game
                </button>


                {/* others tab */}
                <button onClick={() => setActiveTab("others")}
                    className={`border-b-2 border-[#ffffff00] pb-1 text-lightGray font-medium hover:text-main hover:font-bold duration-500 ${activeTab === "others" ? "border-main border-b-2 text-main font-bold" : ""}`}>
                    Others
                </button>
            </div>


            {/* card section */}
            <div className="w-full flex flex-col justify-center items-center">

                {/* card display */}
                <div className="w-[650px] h-[400px] bg-gradient-to-bl from-main to-second mt-12 rounded-[30px] flex justify-center items-center relative">

                    {/* conditional text according to tab */}
                    <p className="font-second text-4xl font-semibold text-white">
                        {
                            activeTab === "study" ? "9 + 6 + 7x - 2x - 3"
                                :
                                activeTab === "quiz" ? "Quiz question"
                                    :
                                    activeTab === "test" ? "Test"
                                        :
                                        activeTab === "game" ? "Game"
                                            :
                                            "Others"
                        }
                    </p>

                    {/* icons */}
                    <div className="w-full text-3xl px-7 text-white font-bold flex justify-between items-center absolute top-8">
                        <GoLightBulb className="cursor-pointer" />
                        <PiSpeakerHighThin className="cursor-pointer" />
                    </div>
                </div>

                {/* card controller buttons */}
                <div className="w-[650px] p-6 flex justify-between items-center font-main">
                    <PiArrowClockwiseBold className="gradient-heading text-3xl" />
                    <GoChevronLeft className="p-1 bg-gradient-to-bl from-main to-second text-4xl text-white rounded-[50%]  mr-[-80px]" />
                    <p className="text-xl font-bold text-black">01/10</p>
                    <GoChevronRight className="p-1 bg-gradient-to-bl from-main to-second text-4xl text-white rounded-[50%] ml-[-80px]"/>
                    <FiMaximize className="gradient-heading text-3xl"/>
                </div>

            </div>

        </div>
    );
};

export default Flashcard;
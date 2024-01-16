import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";



const Faq = () => {


    //hooks
    const [accordion, setAccordion] = useState('')

    console.log(accordion)



    return (
        <div className="my-[140px] w-full">
            <h2 className="gradient-heading text-5xl text-left font-bold uppercase font-main">Faq</h2>

            {/* accordion section */}
            <div className="flex flex-col justify-start items-start gap-8 mt-12">

                {/* accordion 1 */}
                <div onClick={() => setAccordion("accordion1")}
                    className="font-main flex flex-col justify-between items-center px-8 py-4 border-2 border-second rounded-[10px] w-[70%] cursor-pointer">
                    <div className="w-full flex justify-between items-center">
                        <h3 className="text-black font-semibold">Can education flashcards be used for all age groups?</h3>
                        {
                            accordion === "accordion1" ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </div>
                    {/* accordion 1 opening section */}
                    {
                        accordion === "accordion1" ?
                            <p className="w-full text-left mt-7">Yes! It can be used.</p>
                            :
                            ""
                    }
                </div>


                {/* accordion 2 */}
                <div onClick={() => setAccordion("accordion2")}
                    className="font-main flex flex-col justify-between items-center px-8 py-4 border-2 border-second rounded-[10px] w-[70%] cursor-pointer">
                    <div className="w-full flex justify-between items-center">
                        <h3 className="text-black font-semibold">How do education flashcards work?</h3>
                        {
                            accordion === "accordion2" ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </div>
                    {/* accordion 2 opening section */}
                    {
                        accordion === "accordion2" ?
                            <p className="w-full text-left mt-7">Yes! It can be used.</p>
                            :
                            ""
                    }
                </div>


                {/* accordion 3 */}
                <div onClick={() => setAccordion("accordion3")}
                    className="font-main flex flex-col justify-between items-center px-8 py-4 border-2 border-second rounded-[10px] w-[70%] cursor-pointer">
                    <div className="w-full flex justify-between items-center">
                        <h3 className="text-black font-semibold">Can education flashcards be used for test preparation?</h3>
                        {
                            accordion === "accordion3" ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </div>
                    {/* accordion 3 opening section */}
                    {
                        accordion === "accordion3" ?
                            <p className="w-full text-left mt-7">Yes! It can be used.</p>
                            :
                            ""
                    }
                </div>

            </div>

        </div>
    );
};

export default Faq;
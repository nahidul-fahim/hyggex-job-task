import { GoHome, GoChevronRight } from "react-icons/go";
import Flashcard from "../Flashcard/Flashcard";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";

const Home = () => {
    return (
        <div className="p-10">

            {/* breadcrumb */}
            <div className="flex justify-start items-center p-1 text-[18px] font-medium text-lightGray">
                <GoHome />
                <GoChevronRight />
                <p>Flashcard</p>
                <GoChevronRight />
                <p>Mathematics</p>
                <GoChevronRight />
                <p className="text-main">Relation and Function</p>
            </div>

            {/* flashcard section */}
            <Flashcard />

            {/* contact section */}
            <Contact />

            {/* faq section */}
            <Faq />

        </div>
    );
};

export default Home;
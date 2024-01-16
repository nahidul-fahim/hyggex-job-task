import { GoHome, GoChevronRight } from "react-icons/go";
import Flashcard from "../Flashcard/Flashcard";

const Home = () => {
    return (
        <div className="p-5">

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

        </div>
    );
};

export default Home;
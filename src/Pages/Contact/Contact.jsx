import contactLogo from "../../assets/contactImage.png"
import { TiPlus } from "react-icons/ti";


const Contact = () => {
    return (
        <div id="contact" className="mt-100px font-main flex justify-between items-center">
            <img src={contactLogo} alt="" />

            <div className="flex justify-center items-center gap-3 cursor-pointer">
                <TiPlus className="text-4xl text-white rounded-[50%] p-1 bg-gradient-to-b from-main to-second"/>
                <p className="gradient-heading text-3xl font-semibold">Create Flashcard</p>
            </div>
        </div>
    );
};

export default Contact;
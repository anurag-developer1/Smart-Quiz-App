/*import { NavLink } from "react-router-dom"
import Actioncard from "../../components/actioncards/Actioncard"

function HomePage() {
    return (
        <div className="flex justify-around w-full h-[92vh] relative "><NavLink  to="/createquiz"><Actioncard actiontype={"Create a quiz"} image={"https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg?size=626&ext=jpg"} alt="image1"/></NavLink>
        <NavLink to ="/playquiz"><Actioncard actiontype={"Play Quiz"} image={"https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?w=1480&t=st=1716539415~exp=1716540015~hmac=3b3347bd425920313f882ae2181be94a95ecdb0560b6a9661e5e212547dfd4b6"} alt="image2"/></NavLink>
        </div>
    )
}

export default HomePage */

import { NavLink } from "react-router-dom";
import Actioncard from "../../components/actioncards/Actioncard";

function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <NavLink
        to="/createquiz"
        className="m-4 sm:m-8 transition-transform duration-300 hover:scale-105"
      >
        <Actioncard
          actiontype={"Create a quiz"}
          image={
            "https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg?size=626&ext=jpg"
          }
          alt="image1"
        />
      </NavLink>
      <NavLink
        to="/playquiz"
        className="m-4 sm:m-8 transition-transform duration-300 hover:scale-105"
      >
        <Actioncard
          actiontype={"Play Quiz"}
          image={
            "https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?w=1480&t=st=1716539415~exp=1716540015~hmac=3b3347bd425920313f882ae2181be94a95ecdb0560b6a9661e5e212547dfd4b6"
          }
          alt="image2"
        />
      </NavLink>
    </div>
  );
}

export default HomePage;

import { NavLink } from "react-router-dom";
import Actioncard from "../../components/actioncards/Actioncard";

//Homepage component

function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen ">
      {/*Navlink provided by react router wraps an action card routing to the concerned page */}
      <NavLink
        to="/createquiz"
        className="m-4 sm:m-8 transition-transform duration-300 hover:scale-105  "
      >
        <Actioncard
          actiontype={"Create a quiz"}
          image={
            "/image2.png"
          }
          alt="image1"
        />
      </NavLink>
      <NavLink
        to="/playquiz"
        className="m-4 sm:m-8 transition-transform duration-300 hover:scale-105  "
      >
        <Actioncard
          actiontype={"Play Quiz"}
          image={
            "/image5.png"
          }
          alt="image2"
        />
      </NavLink>
      <NavLink
        to="/myquizzes"
        className="m-4 sm:m-8 transition-transform duration-300 hover:scale-105  "
      >
        <Actioncard
          actiontype={"My Quizzes"}
          image={
            "/image8.jpeg"
          }
          alt="image3"
        />
      </NavLink>
    </div>
  );
}

export default HomePage;

import { NavLink } from "react-router-dom";

function Questioncard() {
  return (
    <article className="bg-white shadow-lg rounded-lg p-6 mx-auto my-8 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Quiz Title</h1>
      <p className="text-xl font-semibold mb-2">Question 1</p>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam
        etiam. Nam id luctus nulla. Aliquam erat volutpat. Curabitur in nunc non
        ligula consequat ultricies.
      </p>
      <p className="text-lg font-semibold mb-2">Answer:</p>
      <div className="mb-4">
        
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Question 1/10</span>
        <div>
          <button
            type="submit"
            value="Submit Answer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Submit and Next
          </button>
          <NavLink to="/results">
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              See Results
            </button>
          </NavLink>
        </div>
      </div>
    </article>
  );
}

export default Questioncard;

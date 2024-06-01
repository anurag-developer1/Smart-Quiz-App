import { NavLink } from "react-router-dom"

function Questioncard() {
    return (
        <article>
            <h1>Quiz Title</h1> 
            <p>question 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam etiam. Nam id luctus nulla. Aliquam erat volutpat. Curabitur in nunc non ligula consequat ultricies.</p>  
            <p>answer:</p> 
            <input type="radio" id="option-1" name="options" value="option-1"/>
            <label htmlFor="option-1">Option 1</label>

            <input type="radio" id="option-2" name="options" value="option-2"/>
            <label htmlFor="option-2">Option 2</label>

            <input type="radio" id="option-3" name="options" value="option-3"/>
            <label htmlFor="option-3">Option 3</label>

            <span>question 1/10</span>
            <button type="submit" value="Submit Answer">submit and next</button>
           <NavLink to="/results"><button>See results</button></NavLink> 
            
            
        </article>
    )
}

export default Questioncard

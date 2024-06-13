import PropTypes from 'prop-types';

// Actioncard component definition
function Actioncard(props) {
  return (
    // Container div with hover effect
    <div className=" relative cursor-pointer transition-transform duration-300 hover:scale-105">
       {/* Image container with responsive height */}
      <div className="relative h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem]">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={props.image}
          alt={props.alt}
        />
         {/* Overlay div with semi-transparent black background */}
        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {props.actiontype}
          </span>
        </div>
      </div>
    </div>
  );
}
// PropTypes for type checking
Actioncard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  actiontype: PropTypes.string.isRequired,
};

export default Actioncard;

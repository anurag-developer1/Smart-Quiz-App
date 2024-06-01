/*import PropTypes from 'prop-types';
function Actioncard(props) {
    return (
        <section className="w-[35vw] h-[20vh] relative mt-[36vh] mb-[36vh] flex">
            <img className='w-full object-cover' src={props.image} alt={props.alt}/>
          <div className=''><span className='absolute top-[50%] left-[50%] right-[50%] bottom-[50%] text-white font-bold font-size-large text-center'>{props.actiontype}</span></div>  
        </section>
    )
}
Actioncard.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    actiontype: PropTypes.string.isRequired,
  };

export default Actioncard*/


import PropTypes from 'prop-types';

function Actioncard(props) {
  return (
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem]">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={props.image}
          alt={props.alt}
        />
        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {props.actiontype}
          </span>
        </div>
      </div>
    </div>
  );
}

Actioncard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  actiontype: PropTypes.string.isRequired,
};

export default Actioncard;

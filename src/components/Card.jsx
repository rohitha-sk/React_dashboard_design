// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg w-full">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div>{content}</div>
      </div>
    );
  };
  
  export default Card;
  
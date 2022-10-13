import Card from './Card';

const Cards = ({ data }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-[20px] ">
        {data.map((cardData) => (
          <Card key={cardData.title} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

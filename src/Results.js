import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {pets.map((pet) => (
        <Pet name={pet.name} breed={pet.breed} key={pet.id} />
      ))}
    </div>
  );
};

export default Results;

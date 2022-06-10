import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <div>im number {id}</div>
    </div>
  );
};

export default Details;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CarService } from "../../../services/car.service";
import CarItem from "../home/car-item/CarItem";
import cars from "../home/cars.data";
import withAuth from "../../../HOC/withAuth";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await CarService.getById(id);
      console.log(data); //
      setCar(cars[id - 1]);
      console.log(car); //
    };
    fetchData();
  }, [car]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="wrapper">
      <Link className="btn" to="/">
        Back
      </Link>
      <CarItem car={car} />
    </div>
  );
};

export default withAuth(CarDetail);

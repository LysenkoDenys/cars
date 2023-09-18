import { useState, useEffect } from "react";
import CarItem from "./car-item/CarItem";
import cars from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { CarService } from "../../../services/car.service";
import VideoPlayer from "./create-car-form/Player";

const Home = () => {
  const [carsNew, setCarsNew] = useState(cars);

  return (
    <div className="wrapper">
      <h1>Cars catalog</h1>
      <VideoPlayer />
      <CreateCarForm setCarsNew={setCarsNew} />
      <div>
        {carsNew.length ? (
          carsNew.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There`s no cars</p>
        )}
      </div>
    </div>
  );
};

export default Home;

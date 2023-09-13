import { useState } from "react";
import styles from "./Home.module.css";
import CarItem from "./car-item/CarItem";
import cars from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";

const Home = () => {
  const [carsNew, setCarsNew] = useState(cars);

  console.log(carsNew); //

  return (
    <div>
      <h1>Cars catalog</h1>
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

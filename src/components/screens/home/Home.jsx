import { useState, useContext } from "react";
import CarItem from "./car-item/CarItem";
import cars from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";
import VideoPlayer from "./create-car-form/Player";
import { AuthContext, AuthProvider } from "../../../providers/AuthProvider";

const Home = () => {
  const [carsNew, setCarsNew] = useState(cars);
  const { user, setUser } = useContext(AuthContext);
  return (
    <div className="wrapper">
      <h1>Cars catalog</h1>

      {user ? (
        <>
          <h3>Welcome, {user.name}!</h3>
          <button className="btn" onClick={() => setUser(null)}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn" onClick={() => setUser({ name: "Denys" })}>
          Login
        </button>
      )}

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

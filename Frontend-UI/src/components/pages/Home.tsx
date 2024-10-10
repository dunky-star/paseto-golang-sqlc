import { Signup } from "./Signup";

export const Home = () => {
  return (
    <div className="container">
      {/* <div className="text-center">
        <h3>Golang App - Platform Agnostic Security Token</h3>
      </div> */}

      <div className="center">
        <Signup />
      </div>
    </div>
  );
};

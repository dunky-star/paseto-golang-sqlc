import { Signup } from "./Signup";

export const Home = () => {
  return (
    <div>
      <h3 className="container mt-5">
        Golang App - Platform Agnostic Security Token
      </h3>
      {/* Login components */}
      <Signup />
    </div>
  );
};

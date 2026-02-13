import CarosuelComponent from "../components/carosuel";

import { FormSignup } from "../components/form";

const Signup = () => {
  return (
        <>
            <div className="d-flex min-vh-100">
                <div className="w-50 vh-100">
                    <CarosuelComponent />
                </div>
                <FormSignup />
            </div>
        </>
  );
};

export default Signup;

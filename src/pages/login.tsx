import CarosuelComponent from "../components/carosuel";

import { FormLogin } from "../components/form";

const Login = () => {
  return (

        <>
            <div className="d-flex min-vh-100">
                <div className="w-50 vh-100">
                    <CarosuelComponent />
                </div>
                <FormLogin />
            </div>
        </>
  );
};

export default Login;

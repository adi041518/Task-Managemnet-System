import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import hh360 from "../assets/tasklogo.png";
import CustomDatePicker from "./dateComponent";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface SignupData {
    name: string;
    email: string;
    phoneNo: string;
    dob: string;
    roleCode?: string;
}



export const FormSignup = () => {
    const navigate = useNavigate();

    const initialUserData: SignupData = {
        name: "",
        email: "",
        phoneNo: "",
        dob: "",
    };

    const [userData, setUserData] = useState<SignupData>(initialUserData);
    const handleSignupSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (
            !userData.name ||
            !userData.email ||
            !userData.phoneNo ||
            !userData.dob
        ) {
            toast.error("Please fill all fields!");
            return;
        }

        // const selectedRole = roles.find(
        //     (role) => role.roleCode === userData.roleCode
        // );

        // if (!selectedRole) {
        //     toast.error("Invalid Role Selected");
        //     return;
        // }

        try {
            toast.success("Registered Successfully!");
            console.log("Signup response:", userData);
            localStorage.setItem("jwt",userData.email);
            setUserData(initialUserData);
            navigate("/login");
        } catch (error) {
            const err = error as AxiosError<any>;
            toast.error(
                err.response?.data?.message ||
                "Signup failed. Please try again."
            );
        }
    };

    // useEffect(() => {
    //     const fetchRoles = async () => {
    //         try {
    //             const res = await axios.get(
    //                 "http://127.0.0.1:8080/roles/fetchAll"
    //             );

    //             const formattedRoles: Role[] = res.data.data.map(
    //                 (role: any) => ({
    //                     roleName: role.roleName,
    //                     roleCode: role.roleCode,
    //                 })
    //             );

    //             setRoles(formattedRoles);
    //         } catch (error) {
    //             toast.error("Failed to fetch roles");
    //         }
    //     };

    //     fetchRoles();
    // }, []);

    return (
        <div className="w-50 d-flex flex-column align-items-center pt-4">
            <img src={hh360} alt="Logo " className="mb-4" style={{
                filter: "brightness(0)"
            }} />

            <Form
                className="w-50 border p-4 shadow-lg rounded"
                onSubmit={handleSignupSubmit}
            >
                <h3 className="text-center mb-4 fs-1 fw-semibold">
                    Get started today
                </h3>

                <FloatingLabel label="Name" className="mb-3">
                    <Form.Control
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                name: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>

                <FloatingLabel label="Email" className="mb-3">
                    <Form.Control
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                email: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>

                <FloatingLabel label="Phone Number" className="mb-3">
                    <Form.Control
                        type="text"
                        value={userData.phoneNo}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                phoneNo: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>

                <div className="mb-3">
                    <CustomDatePicker
                        value={userData.dob}
                        onChange={(date: string) =>
                            setUserData((prev) => ({
                                ...prev,
                                dob: date,
                            }))
                        }
                    />
                </div>

                {/* <FloatingLabel label="Role" className="mb-3">
                    <Form.Select
                        value={userData.roleCode}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                roleCode: e.target.value,
                            })
                        }
                    >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option
                                key={role.roleCode}
                                value={role.roleCode}
                            >
                                {role.roleName}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel> */}

                <div className="text-center">
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </Form>

            <div className="m-5">
                <h4>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </h4>
            </div>
        </div>
    );
};
interface LoginData {
    email?: string;
    phoneNo?: string;
    password: string;
}

export const FormLogin = () => {
    const navigate = useNavigate();
    const [contactType, setContactType] =
        useState<"email" | "phone">("email");

    const [userData, setUserData] =
        useState<LoginData>({
            email: "",
            phoneNo: "",
            password: "",
        });

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (
            (!userData.email && contactType === "email") ||
            (!userData.phoneNo && contactType === "phone") ||
            !userData.password
        ) {
            toast.error("Please fill all fields!");
            return;
        }

        try {
            // const res = await axios.post(
            //     "http://127.0.0.1:8080/login",
            //     userData
            // );

            // const token = res.data.data.token;

            const token = localStorage.getItem("jwt");

            if (token!==userData.email) {
                toast.error("Invalid credentials");
                return;
            }

            toast.success("Login Successful!");
            navigate("/");
        } catch (error) {
            const err = error as AxiosError<any>;
            toast.error(
                err.response?.data?.message ||
                "Login failed. Try again."
            );
        }
    };

    return (
        <div className="w-50 d-flex flex-column align-items-center pt-4">
            <img src={hh360} alt="Logo " className="mb-4" style={{
                filter: "brightness(0)"
            }} />
            <Form
                className="w-50 border p-4 shadow-lg rounded"
                onSubmit={handleSubmit}
            >
                <h3 className="text-center mb-4 fs-1">Login</h3>

                <FloatingLabel
                    label={
                        contactType === "email"
                            ? "Email Address"
                            : "Phone Number"
                    }
                    className="mb-3"
                >
                    <Form.Control
                        type={
                            contactType === "email"
                                ? "email"
                                : "tel"
                        }
                        value={
                            contactType === "email"
                                ? userData.email
                                : userData.phoneNo
                        }
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                [contactType === "email"
                                    ? "email"
                                    : "phoneNo"]: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>

                <FloatingLabel label="Password" className="mb-3">
                    <Form.Control
                        type="password"
                        value={userData.password}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>

                <div className="text-center">
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

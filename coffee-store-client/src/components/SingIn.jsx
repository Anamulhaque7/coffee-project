import { createContext, useContext } from "react";
import TopHeader from "../TopHeader";
import Footer from "./Footer";
import { AuthContext } from "./AuthProvider";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SingIn = () => {

    const { sinInUser } = useContext(AuthContext)

    const handleSingIn = (e) => {
        e.preventDefault();
        const form = e.target; 
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        sinInUser(email, password)
            .then(result => {
                console.log(result.user);

                //update last login
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInFo = { email, lastSignInTime };

                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInFo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('sing in info updated in db', data);
                        if (data.modifiedCount > 0) {
                            toast.success("User Successfully Sing In !", {
                                position: "top-center",
                                autoClose: 1000,
                                icon: "✅",
                                style: {
                                    textAlign: "center",
                                },
                            });
                            form.reset()
                        }
                        else if (data.modifiedCount === 0) {
                            toast.success("User Already Sing In !", {
                                position: "top-center",
                                autoClose: 1000,
                                icon: "✅",
                                style: {
                                    textAlign: "center",
                                },
                            });
                            form.reset()
                        }
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <TopHeader></TopHeader>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sing In Now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSingIn} className="card-body">
                            <fieldset className="fieldset">

                                <div>
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name="email" required />
                                </div>
                                <div>
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name="password"  required/>
                                </div>

                                <button className="btn btn-neutral mt-4">Sing In</button>
                            </fieldset>
                            <p className="mx-auto ">
                                <span>New to coffee drinker:<NavLink to="/singup" className="italic underline text-blue-600 font-bold"> Sing Up </NavLink> </span>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default SingIn;
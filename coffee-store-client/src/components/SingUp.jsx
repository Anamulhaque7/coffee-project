import { useContext } from "react";
import TopHeader from "../TopHeader";
import Footer from "./Footer";
import { AuthContext } from "./AuthProvider";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SingUp = () => {

    const { creatUser } = useContext(AuthContext);
    const handleSingUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log("SingUp", name, email, password);
        creatUser(email, password)
            .then(result => {
                const createdAt = result?.user.metadata?.creationTime;
                const lastSignInTime = result?.user.metadata?.lastSignInTime;
                const newUsers = { name, email, createdAt, lastSignInTime };
                console.log("User Created firebase", result.user);

                //  save new user to the data base 
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUsers)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("user Created to db", data);
                        if (data.insertedId) {
                            toast.success("New User Successfully Sing Up !", {
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
                console.log("error", error.message);
            })

    }

    return (
        <div>
            <TopHeader></TopHeader>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sing Up Now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSingUp} className="card-body">
                            <fieldset className="fieldset">
                                <div>
                                    <label className="label">Name</label>
                                    <input type="name" className="input" placeholder="Enter your name" name="name" required />
                                </div>
                                <div>
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name="email" required />
                                </div>
                                <div>
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name="password" required />
                                </div>

                                <button className="btn btn-neutral mt-4">Sing Up</button>
                            </fieldset>
                        </form>
                        <p className="mx-auto ">
                            <span>You have an acount pless:<NavLink to="/singin" className="italic underline text-blue-600 font-bold"> Sing In </NavLink> </span>

                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div >
    );
};

export default SingUp;
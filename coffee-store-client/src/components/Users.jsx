import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TopHeader from "../TopHeader";
import Footer from "./Footer";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from database
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete is done", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div>
      <TopHeader />
      <div className="w-11/12 mx-auto my-10">
        <h2 className="text-3xl font-bold mb-4">Total Users: {users.length}</h2>
        {users.length === 0 && (
          <p className="text-red-500 font-semibold">No users found!</p>
        )}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Logn In Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastSignInTime}</td>
                  <td className="">
                    <button className="btn btn-sm btn-secondary">
                      <MdEdit />
                    </button>
                    <button
                      className="btn btn-sm bg-red-600 text-white"
                      onClick={() => handelDelete(user._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Users;

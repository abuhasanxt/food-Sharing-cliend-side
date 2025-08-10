import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen mt-20 flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full">
        <div className="flex flex-col items-center">
          
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
            src={user?.photoURL || "https://i.ibb.co/RpYdqGy/default-avatar.png"}
            alt="Profile"
          />
        
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user?.displayName || "Unknown User"}
          </h2>
       
          <p className="text-gray-600 text-sm">{user?.email || "No Email"}</p>
        </div>

      
        <div className="mt-6 space-y-2 text-gray-700 text-sm">
          <p>
            <span className="font-semibold">UID:</span> {user?.uid}
          </p>
          <p>
            <span className="font-semibold">Verified:</span>{" "}
            {user?.emailVerified ? "Yes" : "No"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Profile;

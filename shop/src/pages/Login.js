import React from "react";
import { googleLogo } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/coffeeSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [log, setLog] = useState(false);

  // const [sign, setSign] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then(
        // console.log(auth);
        (result) => {
          const user = result.user;
          dispatch(
            addUser({
              _id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
            }),
          );
          setTimeout(() => {
            navigate("/shop");
          }, 1000);
        },
      )
      .catch((error) => console.log(error));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast("Log Out Succesfully!");
        dispatch(removeUser());
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        console.log("You got some error with login");
      });
  };

  return log ? (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex flex-col items-center justify-center py-6">
        <div
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-10"
        >
          <div>
            <button
              // onClick={() => setLog(true)}
              className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
            >
              <img className="w-8" src={googleLogo} alt="googlelogo" />
              <span className="text-sm text-gray-900">Login with Google</span>
            </button>
          </div>
        </div>

        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  ) : (
    // </div>
    <div className="w-full flex items-center justify-center gap-10 py-20">
      <div
        onClick={handleSignout}
        className="w-full flex items-center justify-center gap-10"
      >
        <button
          onClick={() => setLog(true)}
          className="bg-transparent text-black text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 hover:text-white duration-300"
        >
          Sign out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;

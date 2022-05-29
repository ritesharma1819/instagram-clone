import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import "./index.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const signUpForm = async (data, event) => {
    event.preventDefault();
    try {
      const res = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      await db.collection("Users").add({
        uid: res.user.uid,
        username: data.username,
        email: data.email,
        password: data.password,
      });
      navigate("/post");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(signUpForm)}>
      <div className="signUp">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF3H-LTyPl-Pql1UaLM6-KIprIhlt42JivwgsCVkgTX8b5sOJeRZ6SITTLqtFA2lBAhI&usqp=CAU"
          alt="logo"
          width="200px"
        />
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: true,
            minLength: 4,
            maxLength: "15",
          })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 16,
          })}
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account?</p>
        <button
          className="signUp_signInButton"
          onClick={() => {
            navigate("/");
          }}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUp;

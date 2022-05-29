import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const signInForm = async (data, event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      navigate("post");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(signInForm)}>
      <div className="signIn">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF3H-LTyPl-Pql1UaLM6-KIprIhlt42JivwgsCVkgTX8b5sOJeRZ6SITTLqtFA2lBAhI&usqp=CAU"
          alt="logo"
          width="200px"
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
        <button type="submit">Sign In</button>
        <p>Don't have an account?</p>
        <button
          className="signIn_signUpButton"
          onClick={() => {
            navigate("signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignIn;

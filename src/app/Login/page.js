"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./Login.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleSignup = async () => {
    if (!firstName.trim()) {
      alert("Please enter your first name.");
      return;
    }

    if (!lastName.trim()) {
      alert("Please enter your last name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    if (!confirmPassword.trim()) {
      alert("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsSignupLoading(true);

    try {
      const name = firstName + "" + lastName;
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        const message = data?.message || "";
        if (message.toLowerCase().includes("email already registered") || message.toLowerCase().includes("already registered")) {
          alert("Email already registered. Please use another email.");
          return;
        }

        if (message) {
          alert(message);
        }
        return;
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Signup error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSignupLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      alert("Please enter your email.");
      return;
    }

    if (!trimmedPassword) {
      alert("Please enter your password.");
      return;
    }

    setIsLoginLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          password: trimmedPassword,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert("Invalid email or password.");
        return;
      }

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoginLoading(false);
    }
  };
  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Top Logo */}
        <div className="auth-logo">
          Green<span>Cleaning</span>
        </div>

        {/* Animated Heading */}
        <div className="auth-heading">
          <p>WELCOME BACK</p>

          <h1>
            {isLogin ? "Welcome Back!" : "Create Your Account"}
          </h1>

          <span>
            {isLogin
              ? "Login to continue your journey with us."
              : "Join us and make your space cleaner and fresher."}
          </span>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">

          <button
            className={isLogin ? "auth-tab active" : "auth-tab"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "auth-tab active" : "auth-tab"}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

        </div>

        {/* FORM */}
        <div className="auth-form">

          {isLogin ? (
            <>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <span>Forgot Password?</span>
              </div>

              <button
              onClick={handleLogin}
              className="auth-submit"
              disabled={isLoginLoading}
              >
                {isLoginLoading ? "Logging In..." : "Login"}
              </button>

              <p className="bottom-text">
                Don't have an account?
                <span onClick={() => setIsLogin(false)}>
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <div className="input-row">

                <div className="input-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                     value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                   value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div className="input-row">

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                     value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                </div>

                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                     value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                 
                </div>

              </div>

              <button
              onClick={handleSignup}
              className="auth-submit"
              disabled={isSignupLoading}
              >
                {isSignupLoading ? "Creating Account..." : "Sign Up"}
              </button>

              <p className="bottom-text">
                Already have an account?
                <span onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </p>
            </>
          )}

        </div>

      </div>

    </div>
  );
}
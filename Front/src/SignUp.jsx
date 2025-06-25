import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName, password: pass }),
      });
      if (!res.ok) throw new Error("Signup failed");
      navigate("/");
    } catch {
      setErr(true);
    }
  };

  return (
    <StyledWrapper>
      <div className="form-box">
        <form className="form" onSubmit={handleSignUp}>
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          {err && (
            <div style={{ color: "red", fontSize: "0.9em" }}>
              Signup failed. Try another username.
            </div>
          )}
          <button type="submit">Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href="/">Log in</a>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6f0ff;
  padding: 20px;

  .form-box {
    width: 100%;
    max-width: 400px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }

  .title {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
  }

  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 0.5rem;
    width: 100%;
  }

  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 44px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 1rem;
    padding: 10px 15px;
  }

  .form-section {
    padding: 16px;
    font-size: 0.9rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
    text-align: center;
  }

  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color 0.3s ease;
  }

  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }

  .form button {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 12px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form button:hover {
    background-color: #005ce6;
  }

  @media (max-width: 480px) {
    .form-box {
      padding: 10px;
    }

    .form {
      padding: 24px 16px;
    }

    .title {
      font-size: 1.5rem;
    }

    .input {
      font-size: 0.95rem;
    }

    .form button {
      font-size: 0.95rem;
    }
  }
`;

export default SignUp;

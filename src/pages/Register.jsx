
import { useState } from "react";
import "../styles/Register.css";





function Register({ goToLogin }) {


  const [accountType, setAccountType] = useState("Guest");

  return (
    <div className="register-container">

      <div className="register-wrapper">

        <div className="register-card">

          <h2>Create account</h2>

          <form>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Name"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
            />

            <div className="row">

              <div>
                <label>Birthday</label>
                <input
                  type="date"
                />
              </div>

              <div>
                <label>School ID</label>
                <input
                  type="text"
                  placeholder="CO20245385"
                />
              </div>

            </div>

            <div className="row">

              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                />
              </div>

            </div>

            <label>Account Type</label>

            <div className="account-types">

  {[
    "Guest",
    "College",
    "Graduate",
    "Faculty",
    "Staff"
  ].map((type) => (

    <div key={type} className={  accountType === type ? "account-option selected": "account-option"}onClick={() => setAccountType(type)}>
      {type}
    </div>

  ))}

</div>


            <button type="submit" className="register1-btn">
                Register
            </button>


            <p className="login-link">
                Already have an account?

             <span onClick={goToLogin}>
                   Login
             </span>
            </p>

          </form>

        </div>

        <div className="permission-card">

          <h3>Role permissions</h3>

          <div className="permission guest">

            <strong>
              Guest / Student / Graduate
            </strong>

            <p>
              Search campus map,
              view room details,
              request appointments.
            </p>

          </div>

          <div className="permission faculty">

            <strong>
              Faculty / Staff
            </strong>

            <p>
              Set office hours,
              create schedules,
              manage appointment requests.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;
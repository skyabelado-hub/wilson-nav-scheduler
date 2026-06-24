import "../styles/Home.css";

function Home({ goToLogin }) {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img
          src="/logo.png"
          alt="Wilson Logo"
          className="logo"
        />

        <h1>WILSON</h1>

        <div className="landing-card">
          <h2>
            Web Interface for Location,
            Scheduling, and Office Navigation
          </h2>

         

          <p className="description">
            A Campus Map + Appointment Scheduler for Ateneo de Naga University
            This system is designed to help students, faculty, staff, and
            visitors easily navigate university facilities and efficiently
            schedule appointments with campus offices and personnel.
          </p>

          <div className="buttons">
            <button className="map-btn">
              View Campus Map
            </button>

            <button
              className="login-btn"
              onClick={goToLogin}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
import '../Styles/Signup.css'

function Login() {
  return (
    <div>
      <div className="lg-form-container">
        <div className="lg-form-header"></div>
        <div className="lg-form-row">
          <div className="lg-form-column">
            <div className='lg-form-content'>
              <h3 className='lg-form-h3'>Signup</h3>
              <label className="lg-label">Email</label>
              <input type="email" className="lg-input" placeholder="example@gmail.com" />
              <label className="lg-label">Phone</label>
              <input
                type="Number"
                className="lg-input"
                placeholder="******"
              />
              <label className="lg-label">Password</label>
              <input
                type="password"
                className="lg-input"
                placeholder="******"
              />
              <label className="lg-label">Confirm Password</label>
              <input
                type="password"
                className="lg-input"
                placeholder="******"
              />
              <button className='lg-form-btn'>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
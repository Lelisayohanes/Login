import '../Styles/Signup.css'

function Login() {
  return (
    <div>
      <div className="lg-form-container">
        <div className="lg-form-header"></div>
        <div className="lg-form-row">
          <div className="lg-form-column">
            <div className="lg-form-content">
              <div className='lg-redirect-tab'>
                <div className='lg-redirect-tab-signup'>
                  <h3 className="lg-form-h3 "> <a className='redict-link' href='#'>Signup</a></h3>
                </div>
                <div className='lg-redirect-tab-signin'>
                  <h3 className="lg-form-h3 "> <a className='redict-link' href='#'>Signin</a></h3>
                </div>
              </div>
              <label className="lg-label">Email</label>
              <input
                type="email"
                className="lg-input"
                placeholder="example@gmail.com"
              />
              <label className="lg-label">Phone</label>
              <input type="Number" className="lg-input" placeholder="******" />
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
              <div>
                <button className="lg-form-btn">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
import "../Styles/Dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="db-container">
        <div className="db-sidebar">
          <div className="db-slidebar-logo">LOGO</div>
          <div className="db-slidebar-ul">
            <ul>
              <li>
                <a className="db-slidebar-ul-li">Users</a>
              </li>

              <li>
                <a>Employee</a>
              </li>
              <li>
                <a>Users</a>
              </li>
              <li>
                <a>Setting</a>
              </li>
              <li>
                <a>Users</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="db-primary-section">
          <div className="db-primary-section-header">Header</div>
          <div className="db-primary-section-main">
            <div className="db-primary-section-main-table">
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Mike</td>
                    <td>Johnson</td>
                    <td>35</td>
                  </tr>
                </tbody>
              
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

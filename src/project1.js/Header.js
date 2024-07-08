
export default function Header(){
    return(
      <Router>
        <div>
            <div class="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/">Register</Link></li>
                </ul>
            </div>
        </div>
       </Router>
      )
  }
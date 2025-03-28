import zigwheel from './assets/img/zigwheel.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="p-3">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
        </a>
        <img src={zigwheel} alt=" "/>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-dark">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-dark">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-dark">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-dark">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-dark">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-warning me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  </div>
  );
}

export default App;

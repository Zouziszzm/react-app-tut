import '../components/styles/navbar.css'
function Navbar(){
  return (
    <div className="Navbar-holder">
      <h1 className="Heading">The book Of leisure</h1>
      <div className="items-holder"> 
        <a className="items" href="/">Movies</a>
        <a className="items" href="/">Anime</a>
      </div>
    </div>
  )
}

export default Navbar

import '../components/styles/mainsec.css'
function Mainsec() {
  return (
    <div className="main">
        <form className="search-box">
            <input type="search" placeholder="search" required 
                onChange={(e)=> setSearch(e.target.value)}  
            />
        </form>
    </div>
  )
}

export default Mainsec

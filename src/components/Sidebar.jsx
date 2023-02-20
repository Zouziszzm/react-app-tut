import '../components/styles/sidebar.css'
function Sidebar (){
  return (
      <aside className="side-Bar">
        <nav className="side-cont">
            <h3 className="side-head">Top Anime</h3>
                <div className="card-wrap">

                    <div className="card-item">
                        <div className="card-inner">
                            <div className="name">Your name</div>
                            <div className="description">
                                Lorem ipsum dolor, sit amet 
                                consectetur adipisicing elit. Odio inventore, nisi 
                                quis aspernatur at adipisci.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="card-wrap">

                    <div className="card-item">
                        <div className="card-inner">
                            <div className="name">Your name</div>
                            <div className="description">
                                Lorem ipsum dolor, sit amet 
                                consectetur adipisicing elit. Odio inventore, nisi 
                                quis aspernatur at adipisci.
                            </div>
                        </div>
                    </div>

                </div>

        </nav>
      </aside>
  )
}

export default Sidebar 

import {useState} from 'react'
function Navbar(props){
    
    const clickedt = () => {
       setText(text.toUpperCase())
    }

    const clickedT = () => {
       setText(text.toLowerCase())
    }
    const textchange = (event) => {
        setText(event.target.value)
    }
    
    const clickcol = () => {
        setText()
    }
    
    const tooglebg = () => {
        if(bgswitch.color === 'black')
        {
            setbgswitch({
                color:'white',
                backgroundColor:'black'
            })
        }
        else
        {
            setbgswitch({
                color:'black',
                backgroundColor:'white'
            })
        }

    }

    const [bgswitch,setbgswitch] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [text , setText] = useState("")
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.lName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Works</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-5" style={bgswitch}>
                <label for="floatingTextarea">Comments</label>
                <textarea style={bgswitch} className="form-control" value={text} rows={15} id="floatingTextarea" onChange={textchange}></textarea>
                <button className='btn btn-primary mx-3 my-2' onClick={clickedt}>change to uppercase</button>
                <button className='btn btn-primary mx-3 my-2' onClick={clickedT}>change to lowercase</button>
                <button className='btn btn-primary mx-3 my-2' onClick={clickcol}>change color</button>
                <p>there are {text.split(" ").length} words and {text.length} charecters <br/>! this include empty spaces as well as splits</p>
                <p>this is a {Math.ceil(text.split(" ").length * 0.008 )} minute read  </p>
                <button onClick={tooglebg} className='btn btn-primary'>change background</button>
            </div>
        </>
    )
}
export default Navbar

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active,setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active)
    }


  return (
    <>
        <div className='header'>

            <div className='menu-icon'>
                <i className="fa-solid fa-bars icono-hamburguesa" onClick={showMenu}></i>
            </div>


            <div>
                <nav className={active ? 'slider active' : "slider"}>

                    

                    <ul className='slider-ul'>
                        <li className='slider-li'>
                            <Link to='/' className='slider-link'>
                                Inicio
                            </Link>
                        </li>
                        <li className='slider-li'>
                            <Link to='/' className='slider-link'>
                                Productos
                            </Link>
                        </li>
                        <li className='slider-li'>
                            <Link to='/' className='slider-link'>
                                Contacto
                            </Link>
                        </li>   

                        <li className='slider-li'>
                            <i className="fa-thin fa-x icono-x" onClick={showMenu}></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

/* 
    #000000 negro
    #231440 violeta oscuro
    #8C52FF violeta 
*/

export default Navbar

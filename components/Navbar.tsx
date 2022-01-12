import React, { FunctionComponent, useState } from 'react'; // importing FunctionComponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faCoffee, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import Containeritem from './Containeritem'
import Container from './Containeritem';
import Navigation from './Navigation';

const data = {
    primerejemplo: ["Primer parrafo","Segundo Parrafo"]
  }

const Navbar: FunctionComponent= () => {
    const [showSiderbar, setSiderbar] = useState(true)

    const handleClickShow = () => {
        setSiderbar(!showSiderbar)
    }
    return(
        <div className='bg-zinc-800'>
        <div className='w-full h-12 justify-start text-xs flex items-center' >
        <div className=' flex text-zinc-400 p-2.5 hover:text-white'>
        <FontAwesomeIcon className='ml-2 w-6 flex' icon={faBars}  onClick={handleClickShow}/>
        <Navigation show={true}/>
        </div>
        <div className='flex'>
        <FontAwesomeIcon className='ml-2' icon={faBars} />
        </div>
        </div>
            <div>
                <div className={showSiderbar ? ' absolute bg-gradient-to-b from-zinc-800 to-zinc-900 w-72 h-screen flex justify-center transition' : 'transition hidden'}>
                    <ul className='mt-10 w-72'>
                    <Containeritem icon={faHome} title='Home' isExpansible={true} dataExpansible={data.primerejemplo}/>
                    <Containeritem icon={faCoffee} title='Coffe' isExpansible={false} />
                    <Containeritem icon={faBars} title='Ejemplo' isExpansible={true} />
                    <Containeritem icon={faArrowAltCircleDown} title='Otro' isExpansible={false} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar
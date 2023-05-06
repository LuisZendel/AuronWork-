import React, { FunctionComponent, useState } from 'react'; // importing FunctionComponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import {faDownload, faAngleDown}  from '@fortawesome/free-solid-svg-icons'

type ContainerProps = {
  title: string,
  isExpansible: boolean
  dataExpansible?: []
}
const Container: FunctionComponent<ContainerProps> = ({ title, icon, isExpansible, dataExpansible}) => {
  const [showSData, setShowData] = useState(false)

  const handleClickShow = () => {
      setShowData(!showSData)
  }

  return(
  <div className='my-2  rounded-xl p-0.5 grid-cols-4 gap-2
  hover:text-white hover:bg-zinc-600
  flex justify-start items-center text-zinc-500 mx-3	'>
      <div className='col-span-1 justify-center align-center p-3'>
        <FontAwesomeIcon className='w-4' icon={icon} />
      </div>
      <div className='col-span-2 w-10'>
      <p className=' mr-6 font-medium '>{ title }</p>
      </div>
      <div className='col-span-1 '>
      {isExpansible ? 
        <div>
        <FontAwesomeIcon className='text-9xl	w-4 ml-32' icon={faAngleDown} onClick={handleClickShow}/>
        </div>
        :<></>}
      </div>      
  </div>
)
}

export default Container

/*
{showSData ? 
         <div className='mt'>
          <ul className=''>
            {dataExpansible.map((data)=>{
              console.log(data)
              return <li>{data}</li>
            })}
          </ul>
          </div>
        :
          <></>
        }
*/ 
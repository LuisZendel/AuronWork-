import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type SerchProps = {
  show: boolean,
}
const SerchComponent: FunctionComponent<SerchProps> = ({ show,  }) => {
    return(
        <div>
            <div className='ml-60 justify-center p-1.5 align-middle'>
                <input type="text" className='rounded-ms'></input>
            </div>
        </div>
    )
}

export default SerchComponent
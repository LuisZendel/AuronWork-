import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type SiderbarProps = {
  title?: string,
  paragraph?: string
}
const Siderbar: FunctionComponent<SiderbarProps> = ({ title, paragraph }) => {
return(
    <aside>
        <h2>{ title }</h2>
        <p>
            { paragraph }
        </p>
        </aside>
    )
}

export default Siderbar
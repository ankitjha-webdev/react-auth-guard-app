import {Route, redirect, useNavigate} from 'react-router-dom'
const PrivateRoutes = ({children, ...rest}) => {
  const navigate= useNavigate();
  let auth =  {'auth': false } 
    return (
        <></>
  )
}

export default PrivateRoutes
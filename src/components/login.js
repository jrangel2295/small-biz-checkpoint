import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

export default function Login(props) {
    const history = useHistory()

    function handleClick()  {
        console.log('click')
        document.cookie = "loggedIn=true;max-age=60*1000"
        history.push('/dashboard')
    }

    function handleLogout(e)  {
        document.cookie = "loggedIn=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        console.log('logout')
    }

    return (
        <div style={{width:"400px", margin:"auto", border:"1px black solid", marginTop:"40px", borderRadius:"10px", boxShadow:" 0 0 5px" }}>
            <div style={{margin:"40px"}}>
            
            <h1>Login</h1>
            
            <div>
                <TextField style={{marginBottom:"20px"}} fullWidth label="Username" variant="outlined" />
                <TextField fullWidth type="password" label="Username" variant="outlined" />
                <Button onClick={(e)=>handleClick(e)}>login</Button>
                <Button onClick={()=>handleLogout()}>logout</Button>

            </div>
            </div>

        </div>
    )
}
import { useState } from 'react'
import { Button } from '@mui/material'
import GoogleMap from './google-maps'
import cookie from 'cookie'

export default function Info(props) {
    const {name, description, hours, address} = props.biz
    const [hidden, isHidden] = useState(true)
    const cookies = cookie.parse(document.cookie)

    return (
        <div style={{
        width:"500px",
        height:"auto", 
        margin:"20px auto 20px auto", 
        borderRadius:"10px", 
        boxShadow:" 0 0 4px",
        textAlign:"center"
    }}
    >
        {console.log(cookie.parse(document.cookie))}
            {cookies.loggedIn && <div>hello</div>}
            <div style={{margin:"30px auto auto auto", textAlign:"center", width:'400px'}}>
                <h1>{name}</h1>
                <p style={{textAlign:"left"}}>{description}</p>
                <Button variant="contained" style={{marginBottom:"10px"}} onClick={()=> isHidden(!hidden)} >Details</Button>
            </div>
            {!hidden && (
                    <div style={{display:"grid", gridTemplateColumns:"150px 300px", paddingBottom:"20px", margin:"auto auto 20px auto", gridAutoRows:"auto", width:'500px', gridColumnGap:'20px', justifyContent:'center'}}>
                        <ol style={{listStyleType:"none", padding: "0", fontSize:"12px", margin:"20px", gridRow:'span 2', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <h3>Hours:</h3>
                            <li><strong>Monday:</strong> <br/>{hours.Monday}</li>
                            <li><strong>Tuesday: </strong><br/>{hours.Tuesday}</li>
                            <li><strong>Wednesday: </strong><br/>{hours.Wednesday}</li>
                            <li><strong>Thursday:</strong> <br/>{hours.Thursday}</li>
                            <li><strong>Friday: </strong><br/>{hours.Friday}</li>
                            <li><strong>Saturday: </strong><br/>{hours.Saturday}</li>
                            <li><strong>Sunday: </strong><br/>{hours.Sunday}</li>
                        </ol>
                        <ol style={{listStyleType:"none", padding: "0", fontSize:"12px"}}>
                            <h3>Address:</h3>
                            <li>{address.street}</li>
                            <li>{address.city + ' ' + address.state}</li>
                            <li>{address.zipcode}</li>
                        </ol>
                    <Maps address={address} />
                    </div>
            )}
        </div>
    )
}
import Info from './info'
import { LoadScript } from '@react-google-maps/api';
import { Button } from '@mui/material';
import Login from './Login'

export default function Details(props) {
    const handleClick = () => {
        console.log('click')
    }

    return (
        <div>

        <Button onClick={handleClick} >Add Local Business</Button>
            <div style={{display:'grid', gridTemplateColumns:"50% 50%"}}>
                    {props.businesses && 
                    <div>
                        <LoadScript googleMapsApiKey="">               
                            {props.businesses.map((biz, index) => (
                                <Details key={index} biz={biz}/>
                                ))}
                        </LoadScript>
                    </div>
                    }     
                    <div style={{}}>

                        <Login />       
                    </div>
            </div>
        </div>
    )
}
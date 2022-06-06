import { React, useEffect } from 'react'
import { Container, Table, TableBody, TableCell, TableHead,TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddBusiness from '../containers/addbiz'

 
const Dashboard = (props) => {

  useEffect(()=>{
  },[])

    return (
        <Container className="biz-container">
            <div className="flex-container">
              <AddBusiness />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((biz, idx) => (
                    <TableRow key={idx}>
                        <TableCell component="tba" scope="row">
                            {biz.id}
                        </TableCell>
                        <TableCell>{biz["name"]}</TableCell>
                        <TableCell>{biz["description"]}</TableCell>
                        <TableCell>{biz["address"].street + " " + biz["address"].city + " " + biz["address"].state}</TableCell>
                        <TableCell>{biz["hours"].Monday}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick={() => props.removeBusiness(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard
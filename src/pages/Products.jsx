

import React, {useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'title', width: 130 },
  { field: 'description', headerName: 'description', width: 130 },
  {
    field: 'price',
    headerName: 'price',
    type: 'number',
    width: 90,
  },
  {
    field: 'category',
    headerName: 'category',
    width: 160,
   
  },
];




const Products = () => {

const [data, setData] = useState([]);

useEffect(()=>{
  axios('https://fakestoreapi.com/products').then((db)=>{
    console.log(db.data)
    setData(db.data)
  })
}, [])





  return (
 <div className='container'>
    <div className='table'>
      <h1>Products Table</h1>
    <DataGrid
    rows={data}
    columns={columns}
    pageSize={30}
    rowsPerPageOptions={[10]}
    checkboxSelection
  />
    </div>
 </div>
  )
}




export {Products}
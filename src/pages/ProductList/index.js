import './index.css';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline, SettingsSystemDaydreamTwoTone} from '@material-ui/icons';
import {productRows} from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList(){
    const[data,setData]=useState(productRows);
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id))
     };

     const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className='productlist-user'>
                    <img src={params.row.image} alt="" className="product-img" />
                    {params.row.name}

                  </div>
              )
          }
          
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          
        },
        {
          field: 'status',
          headerName: 'Status',
          
          width:120,
          
        },
        {
          field: 'price',
          headerName: 'price',
          
          width: 160, },
          {field: 'action',
          headerName: 'Action',
          
          width: 150,renderCell:(params)=>{
            return (
                <>
                <Link to={'/product/'+params.row.id}>
                <button className="productlist-edit">Edit</button>
                </Link>
                <DeleteOutline className="productlist-edit-icon"onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
          } },
      ];
      
    return (
        <div className='products-list'>
             
            
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
       
        </div>
    )
}


export default ProductList;
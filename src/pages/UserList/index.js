import './index.css';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline, SettingsSystemDaydreamTwoTone} from '@material-ui/icons';
import {userRows} from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';
 


function UserList(){

    const [data,setData]=useState(userRows)

    const handleDelete=(id)=>{
       setData(data.filter(item=>item.id!==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className='userlist-user'>
                    <img src={params.row.avatar} alt="" className="user-img" />
                    {params.row.user}

                  </div>
              )
          }
          
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          
        },
        {
          field: 'status',
          headerName: 'Status',
          
          width: 90,
          
        },
        {
          field: 'transaction',
          headerName: 'transaction volume',
          
          width: 90, },
          {field: 'action',
          headerName: 'Action',
          
          width: 150,renderCell:(params)=>{
            return (
                <>
                <Link to={'/user/'+params.row.id}>
                <button className="userlist-edit">Edit</button>
                </Link>
                <DeleteOutline className="userlist-edit-icon"onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
          } },
      ];
      
     
      
    return (
        <div className='userlist'>
            
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


    export default UserList
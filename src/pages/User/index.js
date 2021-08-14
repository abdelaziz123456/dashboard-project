import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './index.css'


function User(){
    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="user-title">
                    Edit user
                </h1>
                <Link to="/newUser">
                <button className="user-add-button">
                    Create
                </button>
                </Link>
                
            </div>

            <div className="user-container">
                <div className="user-display">
                    <div className="user-show-top">
                        <img src="https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg" alt="" className="user-show-img" />
                        <div className="userShow-topTitle">
                            <span className="show-username">Anna becker</span>
                            
                            <span className="show-usertitle">software engineer</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                     <span className="userShow-bottomTitle">
                         Account Details
                     </span>
                     
                     <div className="user-show-info">
                     <PermIdentity className='user-show-icon'/>
                     <span className="user-show-info-title">
                         annabeck99
                     </span>
                        
                     </div>
                     <div className="user-show-info">
                     <CalendarToday className='user-show-icon'/>
                     <span className="user-show-info-title">
                         10.12.1999
                     </span>
                        
                     </div>
                     <span className="userShow-bottomTitle">
                         Contact Details
                     </span>
                     <div className="user-show-info">
                     <PhoneAndroid className='user-show-icon'/>
                     <span className="user-show-info-title">
                         +1 123 456 67
                     </span>
                        
                     </div>
                     <div className="user-show-info">
                     <MailOutline className='user-show-icon'/>
                     <span className="user-show-info-title">
                         annabeck99@gmail.com
                     </span>
                        
                     </div>
                     <div className="user-show-info">
                     <LocationSearching className='user-show-icon'/>
                     <span className="user-show-info-title">
                         New York | USA
                     </span>
                        
                     </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">
                        Edit
                    </span>

                    <form className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label >Username</label>
                                <input type="text" placeholder='annabeck99' className='user-update-input'/>
                            </div>
                            <div className="user-update-item">
                                <label >Fullname</label>
                                <input type="text" placeholder='Anna becker' className='user-update-input'/>
                            </div>
                            <div className="user-update-item">
                                <label >Phone </label>
                                <input type="tel" placeholder='+1 123 456 67' className='user-update-input'/>
                            </div>
                            <div className="user-update-item">
                                <label >Email</label>
                                <input type="email" placeholder='annabeck99@gmail.com' className='user-update-input'/>
                            </div>
                            <div className="user-update-item">
                                <label >Address</label>
                                <input type="text" placeholder='New York | USA' className='user-update-input'/>
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img src="https://images.unsplash.com/photo-1547527392-bd5d50305ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" className="user-update-img" />
                                <label for="file"><Publish className='user-update-icon'/></label>
                                <input type="file" id='file' style={{display:'none'}} />
                            </div>
                            <button className="user-update-button">
                                Update
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
        
    )
}

export default User
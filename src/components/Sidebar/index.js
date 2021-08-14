
import { LineStyle,Timeline,TrendingUp,PersonOutline,Storefront,AttachMoney,Equalizer,MailOutline, DynamicFeed, ChatBubbleOutline, ChatBubbleOutlined, WorkOutline, Error } from '@material-ui/icons'
import './index.css';
import {NavLink} from 'react-router-dom';
function Sidebar(){
    return (
        <div className='sidebar'>
          <div className="sidebar-wrapper">
              <div className="sidebar-menu">
                  <h3 className="sidebar-title">
                      <p>Dashbord</p> 
                  </h3>
                  <ul className="sidebar-list ">
                      <li className="sidebar-item  ">
                        <NavLink  to="/" className='link'><LineStyle className='sidebar-icon '/>
                         <p>Home</p></NavLink>
                        
                      </li>
                      <li className="sidebar-item">
                        <Timeline className='sidebar-icon'/>
                         <p>Analytics</p>
                      </li>
                      <li className="sidebar-item">
                          <TrendingUp className='sidebar-icon'/>
                          <p>Sales</p>
                      </li>
                 </ul>





                    <h3 className="sidebar-title">
                      Quick Menu
                  </h3>
                  <ul className="sidebar-list">
                      <li className="sidebar-item">
                        <NavLink to="/users" className='link'> <PersonOutline className='sidebar-icon'/>
                        <p>Users</p></NavLink>
                        
                      </li>
                      <NavLink to='/products' className='link'>
                      <li className="sidebar-item">
                        <Storefront className='sidebar-icon'/>
                        <p>Products</p>
                      </li>
                      </NavLink>
                      
                      <li className="sidebar-item">
                          <AttachMoney className='sidebar-icon'/>
                          <p>Transactions</p>
                      </li>
                      <li className="sidebar-item">
                          <Equalizer className='sidebar-icon'/>
                          <p>Reports</p>
                      </li>
                  </ul>






                  <h3 className="sidebar-title">
                      Notifications
                  </h3>
                  <ul className="sidebar-list">
                      <li className="sidebar-item">
                        <MailOutline className='sidebar-icon'/>
                        <p>Mail</p>
                      </li>
                      <li className="sidebar-item">
                        <DynamicFeed className='sidebar-icon'/>
                        <p>Feedback</p>
                      </li>
                      <li className="sidebar-item">
                          <ChatBubbleOutline className='sidebar-icon'/>
                          <p>Messages</p>
                      </li>
                  </ul>





                  <h3 className="sidebar-title">
                      Staff
                  </h3>
                  <ul className="sidebar-list">
                      <li className="sidebar-item">
                        <WorkOutline className='sidebar-icon'/>
                        <p>Manage</p>
                      </li>
                      <li className="sidebar-item">
                        <Timeline className='sidebar-icon'/>
                        <p>Analytics</p>
                      </li>
                      <li className="sidebar-item">
                          <Error className='sidebar-icon'/>
                         <p>Reports</p>
                      </li>
                 
                  </ul>
              </div>
          </div>

          
           
        </div>
    )
}

export default Sidebar
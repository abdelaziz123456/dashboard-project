
import './index.css';
import myImage from '../../images/me.jpg'

import { NotificationsNone, Language, Settings } from "@material-ui/icons";




function Topbar(){
    return(
        <div className='topbar'>
           <div className="topbar-wrapper">
               <div className="topleft">
                Abdelaziz
               </div>
                <div className="topright">
                    <div className="noti-container icon-container">
                        <NotificationsNone />
                        <span className="noti-badge">
                            2
                        </span>

                    </div>

                    <div className="lang-container icon-container">
                        <Language />
                        
                    </div>

                    <div className="sett-container icon-container">
                        <Settings />
                        
                    </div>
                    <img src={myImage} alt="" className="top-avatar" />


                 
               
               
               
               </div>
           </div>
        </div>
    )
}


export default Topbar
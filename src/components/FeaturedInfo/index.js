
import './index.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'
function FeaturedInfo(){
    return(
        <div className='featured'>
            <div className="featured-item">
                <span className="feature-title">
                    Revenue
                </span>
                <div className="feature-money-container">
                    <span className="feature-money">
                        $2,425
                    </span>
                    <span className="feature-money-rate">
                        -11.4 <ArrowDownward className='arrow'/>
                    </span>    
                </div>

                <span className="feature-sub">
                 Compared to last month
                </span>
            </div>




            <div className="featured-item">
                <span className="feature-title">
                    Sales
                </span>
                <div className="feature-money-container">
                    <span className="feature-money">
                        $4,425
                    </span>
                    <span className="feature-money-rate">
                        -1.4 <ArrowDownward className='arrow'/>
                    </span>    
                </div>

                <span className="feature-sub">
                 Compared to last month
                </span>
            </div>


            <div className="featured-item">
                <span className="feature-title">
                    Cost
                </span>
                <div className="feature-money-container">
                    <span className="feature-money">
                        $2,225
                    </span>
                    <span className="feature-money-rate">
                        +2.4 <ArrowUpward className='arrow uparrow'/>
                    </span>    
                </div>

                <span className="feature-sub">
                 Compared to last month
                </span>
            </div>



        </div>
    )
}


export default FeaturedInfo
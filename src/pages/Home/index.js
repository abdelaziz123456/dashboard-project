import Charts from '../../components/Charts'
import FeaturedInfo from '../../components/FeaturedInfo'
import './index.css';
import { Userdata } from '../../dummyData';
import WidgetSm from '../../components/widgetSm';
import WidgetLg from '../../components/widgetLg';

function Home (){
    return(
        <div className='home'>
            <FeaturedInfo/>
            <Charts data={Userdata} title='User analytics' dataKey='Active User' grid  />
            <div className="home-widgets">
                <WidgetSm/>
                <WidgetLg/>
                 
            </div>
        </div>
    )
}

export default Home
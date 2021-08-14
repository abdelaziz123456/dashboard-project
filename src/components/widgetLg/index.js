import './index.css';


function WidgetLg(){
    const Button=({type})=>{
        return <button className={'widget-lg-button ' + type}>{type}</button>
    }
    return (
        <div className='widget-lg'>
            <h3 className="widget-title">
                Latest Trasactions
            </h3>
            <table className="widget-table">
                <tr className="widget-tr">
                    <th className="widget-th">
                        Customer
                    </th>
                    <th className="widget-th">
                        Date
                    </th>
                    <th className="widget-th">
                        Amount
                    </th>
                    <th className="widget-th">
                        Status
                    </th>
                </tr>
                <tr className="widget-tr">
          <td className="widget-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-img"
            />
            <span className="widget-name">Susan Carol</span>
          </td>
          <td className="widget-date">2 Jun 2021</td>
          <td className="widget-amount">$122.00</td>
          <td className="widget-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-tr">
          <td className="widget-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-img"
            />
            <span className="widget-name">Susan Carol</span>
          </td>
          <td className="widget-date">2 Jun 2021</td>
          <td className="widget-amount">$122.00</td>
          <td className="widget-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-tr">
          <td className="widget-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-img"
            />
            <span className="widget-name">Susan Carol</span>
          </td>
          <td className="widget-date">2 Jun 2021</td>
          <td className="widget-amount">$122.00</td>
          <td className="widget-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-tr">
          <td className="widget-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-img"
            />
            <span className="widget-name">Susan Carol</span>
          </td>
          <td className="widget-date">2 Jun 2021</td>
          <td className="widget-amount">$122.00</td>
          <td className="widget-status">
            <Button type="Approved" />
          </td>
        </tr>
               
            </table>
        </div>
    )
}

export default WidgetLg
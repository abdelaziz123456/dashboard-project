import './index.css';

function NewUser(){
    return (
        <div className='new-user'>
              <h1 className="newuser-title">
                  New User
              </h1>
              <form  className="newuser-form">

                  <div className="newuser-item">
                      <label htmlFor="username">Username</label>
                      <input type="text" id='username' placeholder='Jhon' />
                  </div>
                  <div className="newuser-item">
                      <label htmlFor="fullname">Fullname</label>
                      <input type="text" id='fullname' placeholder='Jhon Smith' />
                  </div>
                  <div className="newuser-item">
                      <label htmlFor="email">Email</label>
                      <input type="email" id='email' placeholder='jhon@gmail.com' />
                  </div>
                  <div className="newuser-item">
                      <label htmlFor="password">Password</label>
                      <input type="Password" id='password' />
                  </div>
                  <div className="newuser-item">
                      <label >Gender</label>
                      <div className="user-gender">
                      <label htmlFor='male' >Male</label>
                      <input type="radio" name='gender' id='male' value='male'  />
                      <label htmlFor='female' >Female</label>
                      <input type="radio" name='gender' id='female' value='female'  />

                      </div>
                      </div>
                      <div className="newuser-item">
                      <label >Active</label>
                      <select className='user-select' htmlFor='active' name="active" id="active">
                          <option value="yes">yes</option>
                          <option value="no">no</option>
                      </select>
                      
                  </div>
                  <button className="newuser-button">
                      Create
                  </button>
              </form>

        </div>
    )
}

export default NewUser;
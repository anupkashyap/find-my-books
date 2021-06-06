import { Button, Input } from '@material-ui/core';
import './../App.css';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import './../Styles/Settings.css'
import {Link} from 'react-router-dom'



function Settings() {

    return(
       <div>
           <div className="row_even_space settings__viewMode">
           <ToggleButtonGroup aria-label="text formatting" className="settings__toggleGroup" value="card">
               <Link to="/books">
               <ToggleButton value="card" aria-label="bold" className="settings__toggleBtn">
<h3>Card</h3>
  </ToggleButton>
               </Link>
<Link to="/list">
<ToggleButton value="list" aria-label="italic" className="settings__toggleBtn">
  <h3>List</h3>
  </ToggleButton>
</Link>
  
  
</ToggleButtonGroup>
           </div>
           </div>
    )
}
export default Settings;
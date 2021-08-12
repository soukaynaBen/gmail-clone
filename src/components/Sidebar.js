import '../styles/sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import {Button,IconButton} from '@material-ui/core'
import SidebarOption from './SidebarOption'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { openSendMessage } from '../features/mailSlice'
import { useDispatch } from 'react-redux'

function Sidebar() {
     const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button className="sidebar__compose" startIcon={<AddIcon fontSize="large"/>} onClick={ ()=> {dispatch(openSendMessage())}}>Compose</Button>
            <SidebarOption 
            title="Inbox" 
            number={54}
            Icon={InboxIcon}
            selected={true}
            />
            <SidebarOption 
            title="Starred" 
            number={54} 
            Icon={StarIcon}
             />

            <SidebarOption 
            title="Snoozed" 
            number={54} 
            Icon={AccessTimeIcon} 
            />

            <SidebarOption 
            title="Important" 
            number={54} 
            Icon={LabelImportantIcon} 
            />

            <SidebarOption 
            title="Sent" 
            number={54} 
            Icon={NearMeIcon}
             />
            <SidebarOption 
            title="Draft" 
            number={54} 
            Icon={NoteIcon}
             />

            <SidebarOption 
            title="More" 
            number={54} 
            Icon={ExpandMoreIcon}
             />
             <div className="sidebar__footer">
                 <div className="sidebar__footerIcons">
                     <IconButton>
                         <PersonIcon/>
                     </IconButton>
                     <IconButton>
                         <DuoIcon/>
                     </IconButton>
                     <IconButton>
                         <PhoneIcon/>
                     </IconButton>
                 </div>
             </div>

        </div>
    )
}

export default Sidebar

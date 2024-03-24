import Navbar from '../Navbar';
import FriendsList from '../friendList/FriendsList';
import TagList from '../mainContent/TagList';

import { useLocation } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    const { username } = location.state || {}; 
    console.log("from home page: ", username)
    
    return (
        <>
            <Navbar username={username}/>
            <div style={{ display: 'flex' }}> 
                <div style={{ flex: 3, padding: '25px 20px 20px 25px' }}> {/* Left  */}
                    <TagList />
                </div>
                <div style={{ flex: 1, padding: '10px', borderLeft: '4px solid #ddd', height: 'calc(100vh - 20px)' }}> {/* Right */}
                    <div style={{fontWeight: 'bold', fontSize: '16px'}}>Friend Actvity</div>
                    <FriendsList />
                </div>
            </div>
        </>
    );
}

export default HomePage;

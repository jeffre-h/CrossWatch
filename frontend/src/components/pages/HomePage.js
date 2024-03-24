import Navbar from '../Navbar';
import FriendsList from '../friendList/FriendsList';
import TagList from '../mainContent/TagList';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex' }}> 
                <div style={{ flex: 3, padding: '25px 20px 20px 25px' }}> {/* Left - Main content */}
                    <TagList />
                </div>
                <div style={{ flex: 1, padding: '10px', borderLeft: '4px solid #ddd', height: 'calc(100vh - 20px)' }}> {/* Right - Friends list, with a divider */}
                    <div style={{fontWeight: 'bold', fontSize: '16px'}}>Friend Actvity</div>
                    <FriendsList />
                </div>
            </div>
        </>
    );
}

export default HomePage;

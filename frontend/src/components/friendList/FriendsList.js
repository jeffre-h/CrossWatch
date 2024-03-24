import Friend from "./Friend"
import List from '@mui/material/List';

// Dummy data -- implement friendship functionality later if there is time
const friendsData = [
    { name: 'Bowen B.', lastWatched:'Kung Fu Panda 4', timeAgo: '4hrs ago'},
    { name: 'Caitlyn S.', lastWatched:'Grown Ups 2', timeAgo: '1hr ago'},
    { name: 'Connor B.', lastWatched:'The Office', timeAgo: '16hrs ago'},
    { name: 'Derek H.', lastWatched:'Its Always Sunny...', timeAgo: '30mins ago'},
    { name: 'Hinako K.', lastWatched:'The Hangover', timeAgo: '8hrs ago'},
    { name: 'Jeffrey W.', lastWatched:'Oppenheimer', timeAgo: '17mins ago'},
    { name: 'Kevin H.', lastWatched:'One Piece', timeAgo: '50hrs ago'},
    { name: 'Naomi T.', lastWatched:'Friends', timeAgo: '8hrs ago'},
    { name: 'Raychal N.', lastWatched:'The Simpsons', timeAgo: '20mins ago'},
    { name: 'Ronney L.', lastWatched:'Barbie', timeAgo: '2hrs ago'},
    { name: 'Vinh D.', lastWatched:'The Matrix', timeAgo: '3hrs ago'},
]

const FriendsList = () => {
    return (
        <List style={{ maxHeight: '100vh', overflow:'auto' }}>
            {friendsData.map((f) => (
                <Friend
                    key={f.name} // Always use a unique key when mapping over an array
                    name={f.name}
                    lastWatched={f.lastWatched}
                    timeAgo={f.timeAgo}
                />
            ))}
        </List>
    );
}

export default FriendsList;
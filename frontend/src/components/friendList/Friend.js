import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

const Friends = ({ name, lastWatched, timeAgo }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={`${name} watched ${lastWatched}`}
        secondary={`${timeAgo}`}
      />
    </ListItem>
  );
};

export default Friends;

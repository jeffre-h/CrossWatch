import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const CollectionsTagList = ({ activeCollectionTag, onCollectionTagClick }) => {

    const tags = [
       "All", "My Lists", "Friends Lists", "Shared Lists", "Discover Lists",
    ];

    return (
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
            {tags.map((tag) => (
                <Chip 
                    key={tag}
                    label={tag}
                    onClick={() => onCollectionTagClick(tag)}
                    variant="filled"
                />
            ))}
            <div style={{ flexGrow: 1 }}></div> 
            <Chip key="+" label="+" variant="filled" />
        </Stack>
    );
}

export default CollectionsTagList;

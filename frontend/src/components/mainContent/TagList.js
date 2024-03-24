import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const TagList = () => {
    const [activeTag, setActiveTag] = React.useState("For You"); // POPULAR as default
 
    const handleClick = (tag) => {
        setActiveTag(tag);
    };

    const tags = [
        "For You", "Popular", "Most Reviewed", "1----", "2----", "3----", "4----"
    ];

    return (
        <Stack direction="row" spacing={2}>
            {tags.map((tag) => (
                <Chip 
                    key={tag}
                    label={tag}
                    onClick={() => handleClick(tag)} 
                    variant={activeTag === tag ? 'filled' : 'outlined'}
                />
            ))}
        </Stack>
    );
}

export default TagList;

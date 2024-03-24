import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const TagList = ({ activeTag, onTagClick }) => {

    const tags = [
        "All", "Popular", "For You", "Most Reviewed", "Most Contreversial", "Trending", "Latest"
    ];
    const enabledTags = ["All", "For You", "Popular"];

    return (
        <Stack direction="row" spacing={2}>
            {tags.map((tag) => (
                <Chip 
                    key={tag}
                    label={tag}
                    onClick={() => onTagClick(tag)} 
                    disabled={!enabledTags.includes(tag)}
                    variant={activeTag === tag ? 'filled' : 'outlined'}
                />
            ))}
        </Stack>
    );
}

export default TagList;

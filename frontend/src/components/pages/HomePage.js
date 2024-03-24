import React, { useState } from 'react';
import Navbar from '../Navbar';
import FriendsList from '../friendList/FriendsList';
import TagList from '../mainContent/TagList';
import CollectionsTagList from '../mainContent/CollectionsTagList';
import CollectionsList from '../mainContent/CollectionsList';
import MovieList from '../mainContent/MovieList';

import { useLocation } from 'react-router-dom';


const HomePage = () => {
    const location = useLocation();
    const { username } = location.state || {}; 

    const [activeTag, setActiveTag] = useState("Popular");
    const [currentPage, setCurrentPage] = useState("Explore");
    const [activeCollectionTag, setActiveCollectionTag] = useState("All");

    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };

    const handleCollectionTagClick = (tag) => {
        setActiveCollectionTag(tag);
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }
    
    return (
        <>
            <Navbar username={username} onPageClick={handlePageClick}/>
            <div style={{ display: 'flex' }}> 
                <div style={{ flex: 3, padding: '25px 20px 20px 25px', borderRight: '4px solid #ddd'}}> {/* Left  */}
                    {currentPage === "Explore" 
                        ?
                        <>
                            <TagList activeTag={activeTag} onTagClick={handleTagClick}/>
                            <MovieList category={activeTag}/>
                        </>
                        :
                        <>
                            <CollectionsTagList activeCollectionTag={activeCollectionTag} onCollectionTagClick={handleCollectionTagClick}/>
                            <CollectionsList />
                        </>
                    }  
                </div>
                <div style={{ flex: 1, padding: '10px', height: 'calc(100vh - 20px)' }}> {/* Right */}
                    <div style={{fontWeight: 'bold', fontSize: '16px'}}>Friend Actvity</div>
                    <FriendsList />
                </div>
            </div>
        </>
    );
}

export default HomePage;

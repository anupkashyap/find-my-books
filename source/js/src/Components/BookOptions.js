import './../App.css';
import React, {useState} from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { IconButton } from '@material-ui/core';
import './../Styles/BottomButtons.css'

function BookOptions() {

    return(
        <div className="bookButtons">
             <IconButton>
        <ClearIcon className="bottomButtons__dislike"/>
        </IconButton>
    <IconButton>
    <FavoriteIcon className="bottomButtons__like"/>
    </IconButton>
    <IconButton>
    <BookmarkIcon className="bottomButtons__bookmark"/>
    </IconButton>
        </div>
    )
}
export default BookOptions;
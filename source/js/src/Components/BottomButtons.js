import './../App.css';
import './../Styles/BottomButtons.css';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { IconButton } from '@material-ui/core';

function BookCards() {
    
  return (
    <div className="bottomButtons">
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
  );
}

export default BookCards;

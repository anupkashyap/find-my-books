import './../App.css';
import React, {useState} from 'react'
import './../Styles/BookDetails.css'
import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';
function BookDetails(props) {
  
  return (
    <div className="bookDetails">
       
        <div className="bookDetails__bookTitle bookDetails_row">
        <h3>{props.book.title}</h3>
        </div>
        <div className="bookDetails_row">
            <div className="bookDetails__authorContainer">
            <CreateIcon className="bookDetails__icon"></CreateIcon>
            <h6>{props.book.author}</h6>
            </div>
           
        </div>
        <div className="bookDetails_row">
            <div className="bookDetails__authorContainer">
            <ScheduleIcon className="bookDetails__icon"></ScheduleIcon>
            <h6>{props.book.year}</h6>
            </div>
           
        </div>
<div className="bookDetails_row">
<img src={props.book.imageUrl} className="bookDetails__bookCover"></img>
</div>
<div className="bookDetails__description">
    <p>
        {props.book.description.length>450?props.book.description.slice(0,450)+"...":props.book.description}
    </p>
</div>

    </div>
  );
}

export default BookDetails;

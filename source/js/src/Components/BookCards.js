import { People } from '@material-ui/icons';
import './../App.css';
import './../Styles/BookCards.css';
import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import BookDetails from './BookDetails'

import db from './data'
import Config from './../Config'
import { Button, IconButton } from '@material-ui/core';
import BookList from './BookList'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CircularProgress from '@material-ui/core/CircularProgress';
const fetch = require('node-fetch');

const fetchRandomBooks=()=>{
  return new Promise((resolve,reject)=>{
    console.log(Config.baseUrl+'/getRandomBooks?count='+Config.initialBookCount)
    fetch(Config.baseUrl+'/getRandomBooks?count='+Config.initialBookCount)
          .then(response => {
              response.json().then(result => {
                  resolve(result)
              });
          });
  })
  
}

const updateRecomendations=(leftSwipes,rightSwipes)=>{
  console.log('Update called')
  return new Promise((resolve,reject)=>{
    console.log(Config.baseUrl+'/getReco?rightSwipes='+rightSwipes.join(',')+'&leftSwipes='+leftSwipes.join(',')+'&count='+Config.bookCount)
    fetch(Config.baseUrl+'/getReco?rightSwipes='+rightSwipes.join(',')+'&leftSwipes='+leftSwipes.join(',')+'&count='+Config.bookCount)
          .then(response => {
              response.json().then(result => {
                  resolve(result)
              });
          });
  })
}
const getnewRecomendations=(leftSwipes,rightSwipes)=>{
  console.log('Update called')
  return new Promise((resolve,reject)=>{
    console.log(Config.baseUrl+'/getReco?rightSwipes='+rightSwipes.join(',')+'&leftSwipes='+leftSwipes.join(',')+'&count='+Config.listBookCount)
    fetch(Config.baseUrl+'/getReco?rightSwipes='+rightSwipes.join(',')+'&leftSwipes='+leftSwipes.join(',')+'&count='+Config.listBookCount)
          .then(response => {
              response.json().then(result => {
                  resolve(result)
              });
          });
  })
}
let count=0;
let recomendations=[]
let booksList=[];
const getBookList=(leftSwipes,rightSwipes)=>
{
  fetch(Config.baseUrl+'/getReco?rightSwipes='+rightSwipes.join(',')+'&leftSwipes='+leftSwipes.join(',')+'&count='+Config.bookCount)
  .then(response => {
      response.json().then(result => {
          return(result)
      });
  }); 
}
let rightSwipes=[1];
    let leftSwipes=[1];
function BookCards() {
    let [books,setBooks]=React.useState([]);
    let [cardView,setcardView]=React.useState(true);
    let [isLoading,setLoading]=React.useState(true);
    if(books.length==0){
      //setLoading(true);
      console.log("Initializing with random books")
      fetchRandomBooks().then((res)=>{                                                                                                                                                                                                                                    
        console.log('Fetched books');
        console.log('Count updated')
        recomendations=res;
        setBooks([recomendations.pop()]);
        setLoading(false)
        
      });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    
    const swipeHandler=((dir)=>{       
      count--;                                                                                                                                             
      switch(dir){                        
        case 'right' :{
          console.log("Right swiped ",books[0].id)
          rightSwipes.push(books[0].id)
          console.log(rightSwipes)
          if(recomendations.length<5){
            updateRecomendations(leftSwipes,rightSwipes).then((res)=>{
              recomendations=recomendations.concat(res.filter(x=>!rightSwipes.includes(x.id) && !leftSwipes.includes(x.id) && !recomendations.includes(x)));
            });    
          }
          
          if(recomendations.length>0){
            setBooks([recomendations.pop()]);
          }

          break;
          
          
        }
        case 'left':{
          leftSwipes.push(books[0].id)
          if(recomendations.length<5){
            updateRecomendations(leftSwipes,rightSwipes).then((res)=>{
              recomendations=recomendations.concat(res.filter(x=>!rightSwipes.includes(x.id) && !leftSwipes.includes(x.id) && !recomendations.includes(x)));
            });    
          }
          
          if(recomendations.length>0){
            setBooks([recomendations.pop()]);
          }
          break;
        }
        default:{

        }
      }
    });
  return (
    <div>
{cardView?(<div className="bookCards__cardContainer">
     {books.map(book=>(
        <TinderCard
        className="swipe"
        key={book.id}
        preventSwipe={['up','down']}
        onSwipe={swipeHandler}>
            {/* <div 
            style={{backgroundImage:`url(${book.url})`}}
            className="card">
                            <h3>{book.name}</h3>
            </div> */}
            <BookDetails book={book}/>

        </TinderCard>
    ))}
    
     </div>):
     (<div>
 <BookList booksData={booksList}/>
       </div>)}
     <div className="icon_button" >
     <IconButton  onClick={()=>{if(cardView){setLoading(true); getnewRecomendations(leftSwipes,rightSwipes).then(x=>{booksList=x;setcardView(!cardView);setLoading(false);}); }else{setcardView(!cardView)}}}>
       <ArrowDownwardIcon/> </IconButton>
     </div>
     {isLoading?(
     <div className="loader">
       
       <CircularProgress/>
       
     </div>):''}
    </div>
  );
}

export default BookCards;

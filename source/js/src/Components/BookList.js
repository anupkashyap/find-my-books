import './../App.css';
import React, {useState} from 'react'
import Input from '@material-ui/core/Input';
import './../Styles/BookList.css'
import BookListDetails from'./BookListDetails'
import BookOptions from'./BookOptions'

function BookList(props) {
    // const db=[
    //     {
    //         name:'Harry Potter and the Order of the Phoenix',
    //         url:'https://static.wikia.nocookie.net/harrypotter/images/3/31/Order_of_the_Phoenix_New_Cover.jpg',
    //         desc:'Harry Potter and the Order of the Phoenix is the fifth book in J. K. Rowlings Harry Potter book series. It was one of the most widely-anticipated books of the series, since there was a wait of three years between it and the previous book, Goblet of Fire. At 38 chapters, it is also the longest book in the series, having jokingly been labelled as heavier than a refrigerator (by Stephen Fry at the Royal Albert Hall event) and used as a benchmark for the size of the next two books.',
    //         author:'J. K. Rowling',
    //         year:'2003'
    //        },
    //    {
    //     name:'David Copperfield',
    //     url:'https://images.saymedia-content.com/.image/t_share/MTc0NDEzMzQ2ODY1NDI0MDA2/david-copperfield-by-charles-dickens-a-book-review.jpg',
    //     desc:'The Personal History, Adventures, Experience and Observation of David Copperfield the Younger of Blunderstone Rookery, commonly known as David Copperfield, is a bildungsroman by Charles Dickens, narrated by the eponymous David Copperfield, detailing his adventures in his journey from infancy to maturity.',
    //     author:'Charles Dickens',
    //     year:'1849'
    //    },
    //    {
    //     name:'The Tower Treasure',
    //     author:'JFranklin W. Dixon',
    //     year:'1927',
    //     url:'https://hardyboysbookreviews.files.wordpress.com/2013/12/image.jpg',
    //     desc:'The Tower Treasure is the first volume in the original The Hardy Boys Mystery Stories published by Grosset & Dunlap. The book ranks 55th on Publishers Weekly All-Time Bestselling Children Book List for the United States, with 2,209,774 copies sold as of 2001'
    //    } ,
    //    {
    //     name:'Steve Jobs',
    //     author:'Walter Isaacson',
    //     year:'2011',
    //     url:'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
    //     desc:'Steve Jobs is the authorized self-titled biography of Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and TIME who has written best-selling biographies of Benjamin Franklin and Albert Einstein'
    //    }  

    // ];
    console.log("BOOKS LIST")
    console.log(props.booksData)
    const [books,setBooks]=useState(props.booksData);
    const onSearch=(event)=>{
        setBooks(props.booksData.filter(book=>book.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }
  return (
    <div>

   <Input className="bookList__searchInput" onChange={onSearch} placeholder="🔍 Search"/>
    {books.map(book=>(
        <div className="bookList__container">
 <BookListDetails book={book}/>
       
            </div>
       
    ))}
    </div>
  );
}

export default BookList;

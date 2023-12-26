import { useState } from "react"
import avatarIcon from './assets/img/avatarIcon.svg'
export const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: 'Отличный сайт!',
            date: '01/01/2021',
            rating: 4
        },
        {
            author: 'Max Dooble',
            title: 'Best choise',
            text: 'Крутой сайт!',
            date: '05/23/2023',
            rating: 5
        },
    ])

    const [currentReview, setCurrentReview] = useState('')
    const currentReviewHandler = (e) => {
        let newValue = e.currentTarget.value
        setCurrentReview(newValue)
    }
    const addReviewHandler = () => {
        const newReview = {
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: currentReview,
            date: '05/23/2021',
            rating: 5
        }
        setReviews([newReview, ...reviews])
    }
    // setCurrentReview=''
    return (
        <div className="review">
            <h3>Reviews ({reviews.length})</h3>
            <textarea value={currentReview} onChange={currentReviewHandler} placeholder="Provide your text..."></textarea>
            <button onClick={addReviewHandler} >Send review</button>
            {
                reviews.map((r) => {
                    return (
                        <div className="reviewField">
                            <div className="info">
                                <div className="user">
                                    <img src={avatarIcon} alt="" />
                                    <div className='InfoBox'>
                                        <p className='author'>{r.author}</p>
                                        <p className='rating'>{r.rating} Rating</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='date'>{r.date}</p>
                                </div>
                            </div>

                            <div className='content'>
                                <p className='title'>{r.title}</p>
                                <p>{r.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



import { useState } from "react";
import { Author } from "./Author"
import { NewQoute } from "./NewQoute";
import { TextQoute } from "./TextQoute"
import { TweetQoute } from "./TweetQoute";
const quotes = [
    {
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "In the middle of every difficulty lies opportunity.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Happiness is not something ready-made. It comes from your own actions.",
        "author": "Dalai Lama"
    },
    {
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    }
];
export const QuoteBox = () => {
    const [newQoute, setNewQoute] = useState({
        "quote": "Hello World",
        "author": "Rafli Ilham Aditia"
    })


    const handleQoute = () => {
        setNewQoute(quotes[Math.floor(Math.random() * quotes.length)])
        return newQoute
    }
    return (
        <div>
            <div className="box-atas">
                <TextQoute text={newQoute.quote}></TextQoute>
                <Author author={newQoute.author}></Author>
            </div>
            <div className="box-bawah">
                <NewQoute diClick={handleQoute}></NewQoute>
                <TweetQoute></TweetQoute>
            </div>

        </div>
    )
}
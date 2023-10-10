import React from 'react';
import './news.css';

export const News = async () => {
    // // Getting the current date for the string date
    // function addMonths(date, months) {
    //     date.setMonth(date.getMonth() + months);
    //     return date;
    // }
      
    // const datee = addMonths(new Date(), -1); // six months before now
    // // Thu Apr 30 2009 01:22:46 GMT-0600 
    // console.log(datee)
      
    // Getting the news
    const topic: string = "Oceanography";
    const date: string = "2023-09-07";
    const key = process.env.NEXT_PUBLIC_NEWS_KEY;

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=publishedAt&apiKey=${key}`,
    );
    const apijson = await apiResponse.json();

    const articles = apijson.articles.map((article: any) => ({
        source: article.source.name,
        title: article.title,
        imageurl: article.urlToImage,
        author: article.author,
        description: article.description,
        url: article.url,
    }));

    return (
        <div className='newsBody'>
            <p>Keep yourself updated with the latest news.</p>
            {articles.map((article: any, index: number) => (
                <div key={index} className='article'>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    <p className='articleDesc'>{article.description}</p>
                    <img src={article.imageurl} alt={article.title}/>
                </div>  
            ))}
        </div>
    );
};

export default News;
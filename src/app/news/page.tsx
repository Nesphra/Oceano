import React from 'react';
import './news.css';

export const News = async () => {
    // // Getting the current date for the string date  
    let varDate = new Date()
    let day = varDate.getDate()
    if (day > 27){
        day = 28
    }
    let month = varDate.getMonth()
    if (month == 0){
        month = 12
    }
    let year = varDate.getFullYear()
    var dateStr = year +"-"+ month +"-"+ day //is a value under this form: 2023-09-16

    // Getting the news
    const topic: string = "Oceanography";
    const key = process.env.NEXT_PUBLIC_NEWS_KEY;

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=${topic}&from=${dateStr}&sortBy=publishedAt&apiKey=${key}`,
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
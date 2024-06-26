import React, { useState, useEffect } from 'react';
import '../Css/NewsCards.css'
import Homenews from './Homenews';
const NewsStocks = () => {
    const [newsData, setNewsData] = useState([]);

    // useEffect(() => {
    //     const fetchNewsData = async () => {
    //         const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list?region=IN&snippetCount=10';
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'text/plain',
    //                 'X-RapidAPI-Key': '93737dd90amshf766f9c453a3dc8p1757acjsn3f6f16fedd59',
    //                 'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    //             },
    //             body: 'Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page'
    //         };

    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.text();
    //             const newsStream = (JSON.parse(result)).data.main.stream;
    //             console.log(newsStream)
    //             setNewsData(newsStream)
    //         }
    //         catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchNewsData();
    // }, []);

    useEffect(() => {
        const fetchNewsData = async () => {
            const url = `${process.env.REACT_APP_SERVER_URL}/news`;

            try {
                const response = await fetch("https://newlearnearn.vercel.app/news");
                const result = await response.json();
                setNewsData(result.articles);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchNewsData();
    },[]);
    // const g = (JSON.parse(result)).data.main.stream
    return (
        <>
            {newsData ?
                newsData.map((v, index) => {
                    const handle = v
                    return (
                        handle.title ? <>
                            <Homenews v={v} index={index}></Homenews>
                            {/* <a href={v.url} className='LinkNews' key={index}>
                                <div className="CardsN" key={index + newsData.length}>
                                    <div className="imgNews" key={index + newsData.length + newsData.length}>
                                        <img src={(v?.urlToImage)? v.urlToImage : (e)=>{e.target.style.display = "none  "}}  alt='' key={index + 3 * newsData.length} />
                                    </div>
                                    <div className="TitleNews" key={index + 4 * newsData.length}>
                                        <p key={index + 5 * newsData.length}>{v?.title}</p>
                                        <div className='dateprovider' key={index + 6 * newsData.length}><p key={index + 7 * newsData.length}>Provider : {v?.source?.name}</p><p key={index + 8 * newsData.length}>Date:{v?.publishedAt}</p></div>
                                    </div>

                                </div>
                            </a> */}
                        </> : ""
                    )
                }) :
                <>
                    <div style={{ height: '100%', width: '100%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <h1>Something Went Wrong.
                            <br />
                            No News For Displaying.
                        </h1>
                    </div>
                </>
            }
        </>
    )
    // console.log(g.data.main.stream[0].content.title);
    // console.log(g.data.main.stream[0].content.thumbnail.resolutions[0].url)
    // } catch (error) {
    //     console.error(error);
    // }
    //     }
    // return (
    //     <div className='NewsOuter'>
    //         {

    //         }
    //     </div>
    // )
    // }
}

export default NewsStocks

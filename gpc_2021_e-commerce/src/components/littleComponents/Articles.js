import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development"

export default function Articles() {
    const[error, setError]=useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        fetch('https://lindagiorgadze.github.io/FakeServer/articles.json')
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setArticles(result.Articles);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[])

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className='ArticlesSection'>
                <h3 className='ArticlesTitle'>სამედიცინო რჩევები</h3>
                <div className='Articles'>
                    {
                        articles.map(article => {
                            return (
                                <div key={article.id} className='ArticleBox'>
                                    <Link to={'/' + articles.id}>
                                        <img src={article.img} alt={article.title}/>
                                    </Link>
                                    <h3>{article.title}</h3>
                                    <p>{article.content}</p>
                                </div>
                            )
                        })
                    }
                </div>                
            </div>

        )
    }
}
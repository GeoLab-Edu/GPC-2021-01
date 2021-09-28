import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import BuyButton from "../littleComponents/BuyButton";
import ReactPaginate from 'react-paginate';

export default function Products({filtersValue}) {
    
    const[error, setError]=useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const[prodData, setProdData]=useState([]);
    
    useEffect (() => {
        fetch('https://lindagiorgadze.github.io/FakeServer/products.json')
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProdData(result.Products);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    //** Sorting */

    const [sortType, setSortType] = useState();
    const [filters, setFilters] = useState(['ივ როშე']);

    useEffect(() => {
        const sortProducts = type => {
            const types = {
                price: 'price',
                review: 'review'
            }
            const sortProperty = types[type];
            const sorted = [ ...prodData].sort((a,b) => b[sortProperty] - a[sortProperty]);
            setProdData(sorted);
        }
        sortProducts(sortType);

    //** Filtering */
        if (filtersValue !== null) {
            return setFilters(filtersValue)
        }
    },[sortType, filtersValue]);


    //** Pagination */

    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 9;   
    const pagesVisited = pageNumber * productsPerPage;
    const displayProducts = prodData
        .filter(product => filters.includes(product.manufacturer))
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((el, index) => {
            return (
                <div key={el.id} className='ProductBox'>
                    <Link to={`/Production/${el.id}`}>
                        <img src={el.img} alt={el.title}/>
                    </Link>
                    <div className='ProductPreview'>
                        <div className='PreviewTop'>
                            <h4>{el.manufacturer}</h4> 
                            <span>{el.review}</span>
                        </div>
                        <h2 className='ProductPreviewTitle'>{el.title}</h2>
                        <span className='ProductPreviewAmount'>{el.amount}</span>
                        <div className='PreviewBottom'>
                            <div className='PreviewPriceDiv'>
                                {
                                    el.discountedPrice ?
                                    <>
                                        <span className='PreviewPrice'>{el.discountedPrice} ლ</span>
                                        <span className='PreviewOldPrice'>{el.price} ლ</span>
                                    </>
                                    :
                                    <span className='PreviewPrice'>{el.price} ლ</span>
                                }
                            </div>
                            <BuyButton btnClass='btnClass' type='button' content='ყიდვა'/>                                     
                        </div>

                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(prodData.length/productsPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };


    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return(
            <div className='ProductsSection' >
                <div className='sort-filter-div'>
                    <select onChange={(e) => setSortType(e.target.value)} className='select'>
                        <option defaultValue selected disabled>სორტირება</option>
                        <option value='price'>ფასი</option>
                        <option value='review'>შეფასება</option>
                    </select>                   
                </div>

                <div className='Catalogue'>
                    {displayProducts}
                </div>
                <div className='CataloguePages'>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'PaginationButtons'}
                        previousClassName={'PreviousPageButton'}
                        nextClassName={'NextPageButton'}
                        disabledClassName={'DisabledButton'}
                        activeClassName={'ActiveButton'}
                    />                        
                </div>
            </div>
  
        )
    }
}
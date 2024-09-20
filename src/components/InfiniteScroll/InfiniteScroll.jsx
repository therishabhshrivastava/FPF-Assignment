import React, { useCallback, useEffect, useState } from 'react';
import './InfiniteScroll.css';
import ItemCard from '../ItemCard/ItemCard'

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // fetch data 
  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data]);
    } catch (error) {
      console.error('Error in Fetching Data:', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // load intial data

  useEffect(() => {
    fetchItems();
  },[fetchItems])


  // Infinite Scroll
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10 ) {
      setPage(prevPage => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <div className='infinite-scroll-container'>
      <h1>Infinite Scrolling Items</h1>
      <div className='items-container'>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      {loading && <p>Loading More Items....</p>}
    </div>
  )
}

export default InfiniteScroll

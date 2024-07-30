import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Carousel.css';

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english');
        console.log('API Response:', response.data); // Log the entire response
        if (response.data && response.data.items) {
          setItems(response.data.items);
        } else {
          console.error('Unexpected response structure:', response.data);
          setError('Unexpected response structure');
        }
      } catch (error) {
        console.error('Error fetching carousel data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [items]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={item.id} className={index === currentIndex ? 'active' : 'inactive'}>
          <img src={item.image_url} alt={item.title} />
        </div>
      ))}
      <button onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}>Previous</button>
      <button onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}>Next</button>
    </div>
  );
};

export default Carousel;
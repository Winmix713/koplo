import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../utils/api';
import { NewsArticle } from '../../types/News';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';
import { SearchBar } from '../common/SearchBar';
import { formatDate, getRelativeTime } from '../../utils/dateUtils';

export const NewsFeedPage: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
        setFilteredNews(data);
      } catch (err) {
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadNews();
  }, []);
  
  useEffect(() => {
    filterNewsByCategory(activeCategory);
  }, [news, activeCategory]);
  
  const filterNewsByCategory = (category: string) => {
    if (category === 'all') {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter(article => article.category === category));
    }
  };
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      filterNewsByCategory(activeCategory);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const results = news.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.summary.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
    
    setFilteredNews(results);
  };
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(news.map(article => article.category)))];
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-6">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">Latest News</h1>
        
        <div className="w-full md:w-64">
          <SearchBar onSearch={handleSearch} placeholder="Search news..." />
        </div>
      </div>
      
      <div className="flex overflow-x-auto pb-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 mr-2 rounded-md whitespace-nowrap ${
              activeCategory === category 
                ? 'bg-[#04f5ff] text-black' 
                : 'bg-[#1a1a1a] text-white hover:bg-[#222]'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'all' ? 'All News' : category}
          </button>
        ))}
      </div>
      
      {filteredNews.length === 0 ? (
        <div className="bg-[#1a1a1a] p-6 rounded-md text-center text-gray-400">
          No news articles found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map(article => (
            <div key={article.id} className="bg-[#1a1a1a] rounded-md overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs text-[#04f5ff] bg-[#04f5ff]/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">
                    {getRelativeTime(article.publishDate)}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">By {article.author}</span>
                  <Link to={`/news/${article.id}`} className="text-[#04f5ff] text-sm hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
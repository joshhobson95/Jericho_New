import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetQuills = () => {
  const [retrievedContent, setRetrievedContent] = useState([]);

  useEffect(() => {
    retrieveContent();
  }, []);

  const retrieveContent = async () => {
    try {
      const response = await axios.get('https://jericho-new-test-rich-text.onrender.com/getquill');
      const contentData = response.data;

      if (Array.isArray(contentData) && contentData.length > 0) {
        // Extract the 'content' property from each object in the response data
        const contentArray = contentData.map((entry) => entry.content);

        // Update the state with the array of retrieved content
        setRetrievedContent(contentArray);
      } else {
        console.error('Invalid content data received:', contentData);
      }
    } catch (error) {
      console.error('Error retrieving content:', error);
    }
  };

  return (
    <div className='rich-text'>
      <h2>Retrieved Content</h2>
      {retrievedContent.map((content, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
    </div>
  );
};

export default GetQuills;


//NOTES
//Colors don't work, should be fine
//Links work, but adhere to the end of the URL- ez fix
//Quotes in between each Post?
//Images don't work either tha's fine!

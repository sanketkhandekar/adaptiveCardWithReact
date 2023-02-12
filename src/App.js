import React, { useEffect, useState } from 'react';
import * as AdaptiveCards from 'adaptivecards';

const AdaptiveCard = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const card = {
      type: 'AdaptiveCard',
      version: '1.0',
      body: [
        {
          type: 'Image',
          url: 'http://adaptivecards.io/content/adaptive-card-50.png'
        },
        {
          type: 'TextBlock',
          text: data
        }
      ],
      actions: [
        {
          type: 'Action.OpenUrl',
          title: 'Click Me',
          url: 'http://adaptivecards.io'
        }
      
      ]
    };
  
    const adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
      fontFamily: 'Segoe UI, Helvetica Neue, sans-serif'
    });
  
    adaptiveCard.onExecuteAction = async function(action) {
      console.log(`Called service: `);
      const url = 'http://localhost:8080/newtest';
  
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(`Service response: ${jsonData}`);
        setData(JSON.stringify(jsonData));
      } catch (error) {
        console.error(`Error calling service: ${error}`);
      }
  
      console.log(`Called service: `);
    };
  
    adaptiveCard.parse(card);
  
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = '';
    cardContainer.appendChild(adaptiveCard.render());
  }, [data]);
  
  return (
    <div id="cardContainer" />
  );
};

export default AdaptiveCard;

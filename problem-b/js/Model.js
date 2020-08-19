'use strict';
import allTweets from './uw_ischool_tweets';

const tweetData = allTweets.map((tweetObj) => {
    let mapped = {
        text: tweetObj.text, 
        timestamp: Date.parse(tweetObj.created_at)
    }
    return mapped;
});

export function getRecentTweets() {
    tweetData.sort((tweetA, tweetB) => {
        return tweetB.timestamp - tweetA.timestamp;
    })
    return tweetData.slice(0, 5);
}

export function searchTweets(search) {
    let results = tweetData.filter((tweetObj) => {
      return tweetObj.text.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });
    return results;
  }

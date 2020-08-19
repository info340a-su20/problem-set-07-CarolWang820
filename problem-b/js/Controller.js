'use strict';
import readline from 'readline-sync';
import * as model from "./Model";
import { printTweets } from "./View";

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    let tweet = model.getRecentTweets();
    printTweets(tweet);
    let query = readline.question("Search tweets, or EXIT to quit: ");
    if(query === "EXIT") {
        return;  
    }

    let result = model.searchTweets(query);
    printTweets(result);
}
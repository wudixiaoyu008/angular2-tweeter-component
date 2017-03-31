
import {Component} from '@angular/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'app-root',
    template: `
        <div *ngFor="let tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    // directives: [TweetComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets;

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}

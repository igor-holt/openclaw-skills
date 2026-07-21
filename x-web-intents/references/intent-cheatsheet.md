# X Web Intent URL Builders — Quick Reference

Official base: `https://x.com/intent/` (twitter.com still redirects; prefer x.com).

All values must be percent-encoded (`encodeURIComponent`).

## 1. Tweet / Compose
```
https://x.com/intent/tweet
  ?text=          // pre-filled body (max ~280)
  &url=           // attachment URL
  &hashtags=      // comma-separated, no #
  &via=           // screen_name to attribute
  &related=       // related accounts
  &in_reply_to=   // tweet ID (makes it a reply)
```

Example:
```
https://x.com/intent/tweet?text=Hello%20world&url=https%3A%2F%2Fexample.com&hashtags=GenesisConductor,AI&via=igorholt
```

## 2. Reply (specialized Tweet)
```
https://x.com/intent/tweet?in_reply_to=<TWEET_ID>&text=...
```

## 3. Retweet
```
https://x.com/intent/retweet?tweet_id=<TWEET_ID>
```

## 4. Like
```
https://x.com/intent/like?tweet_id=<TWEET_ID>
```

## 5. Follow
```
https://x.com/intent/follow?screen_name=<HANDLE>
# or
https://x.com/intent/follow?user_id=<NUMERIC_ID>
```

## 6. User Profile
```
https://x.com/intent/user?screen_name=<HANDLE>
# or
https://x.com/intent/user?user_id=<NUMERIC_ID>
```

## HTML Snippet Pattern
```html
<a href="INTENT_URL"
   class="x-intent-btn"
   data-x-intent="tweet"
   target="_blank"
   rel="noopener noreferrer">
  Share on X
</a>
```

## data-x-intent Auto-Wiring Values
- `tweet`
- `reply` (requires data-tweet-id)
- `retweet` (requires data-tweet-id)
- `like` (requires data-tweet-id)
- `follow` (requires data-screen-name or data-user-id)
- `user` (requires data-screen-name or data-user-id)

## Notes
- Always open in new tab (`target="_blank"` + `rel="noopener noreferrer"`).
- For OBS / restricted contexts use the Grove plugin; never rely on `window.prompt`.
- Real X Signal ingest is orthogonal: it consumes signals, does not open intents.

# Things to build
- [x] table
- [x] search box
- [x] search handler will populate state
- [x] scrape photos from adafruit and add photos to the table
- [x] webscraper for tinkersphere
- [x] sort by most popular from the server
- [x] add filters for sorting by name, price, relevance

# Steps
- [x] stub out data in table
- [x] Stub out a response with a basic array of objects
- [x] Pass priceList to our table
- [x] install lodash
- [x] Add conditional rendering of our table to render only
      when state priceList is not empty.

```
{
  :description=>"\nTeensy 3.2 + header",
  :price=>#<MatchData "$19.95">,
  :href=>"https://www.adafruit.com/product/2756",
}
```

# Important
Putting all the business logic inside of App.js is *NOT* a good idea.
This was done cowbow style, just shooting from the hip. Use better directory
structures like one in https://github.com/genericlady/clothing_scraper

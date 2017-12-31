# To Build
- [ ] Mocks
- [ ] add constant of MOCKS to
      be a boolean. This flag
      will be used to use a mock
      instead of fetching from
      the api thus saving us from
      scraping data and speeding
      up development

# Things Built
- [x] Move Filter to a Sidebar
- [x] Add layout options to sidebar
  - [x] Layout options should be table or grid
  - [x] add an additional layout of single column cards
- [x] table
- [x] search box
- [x] search handler will populate state
- [x] scrape photos from adafruit and add photos to the table
- [x] webscraper for tinkersphere
- [x] sort by most popular from the server
- [x] add filters for sorting by name, price, relevance

# Steps Taken
- [x] stub out data in table
- [x] Stub out a response with a basic array of objects
- [x] Pass priceList to our table
- [x] install lodash
- [x] Add conditional rendering of our table to render only
      when state priceList is not empty.

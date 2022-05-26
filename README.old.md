## Notes

### Setup
1. Install React
    1. `npx create-react-app .`
1. Install Eslint

### Structure
1. Hooks
    1. useContacts - fetch data
1. Components
    1. App - display Search and Card List components; Loading component too
        1. What if the fetch fails? Display error message: "Unable to load contacts."
    1. Loading - loading message while fetch request (and search?) is occuring
    1. Card - individual contact info
        1. What if certain fields are missing? Conditionally render them?
    1. Card List - list of all contacts
    1. Search - fitler contact list
        1. What if the search has no results? Display "No results." message
# Nightly Link Checker Agent

Runs every night at 2 AM to check that all affiliate links on the top-performing review pages are working.

## Task:
1. Check these top pages (by Vercel traffic):
   - https://cookinkitchen.online/
   - https://cookinkitchen.online/blog
   - https://cookinkitchen.online/reviews
   - https://cookinkitchen.online/reviews/best-chef-knives-home-cooks
   - https://cookinkitchen.online/reviews/best-dutch-oven
   - https://cookinkitchen.online/buying-guides

2. For each page:
   - Fetch the page and extract all Amazon affiliate links
   - Test each link (HEAD request to check if it returns 200)
   - Report any broken links (404, 301 to non-Amazon, timeouts)

3. If broken links found:
   - Note which pages have issues
   - List the specific broken URLs
   - Mark for manual review

## Output Format:
```
## Link Check Report - [Date]

### Pages Checked: X
### Total Links Tested: X
### Broken Links: X

### Issues Found:
- Page: [url]
  - Broken: [amazon link]
  - Status: [404/timeout/redirect]

### Recommendations:
- [Action items]
```

#!/bin/bash

PAGES=(
  "https://cookinkitchen.online/reviews/best-chef-knives-home-cooks"
  "https://cookinkitchen.online/reviews/best-dutch-oven"
  "https://cookinkitchen.online/reviews/best-yeti-rambler-tumblers"
  "https://cookinkitchen.online/reviews/best-stanley-tumblers"
  "https://cookinkitchen.online/reviews/best-egg-cookers"
)

# Browser-like headers
HEADERS="-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml'"

echo "=== LINK HEALTH CHECK (with browser headers) ==="
echo ""

total_links=0
total_broken=0

for page in "${PAGES[@]}"; do
  echo "=== Checking: $page ==="
  
  content=$(curl -sL "$page")
  amazon_links=$(echo "$content" | grep -oE 'href="https?://[^"]*amazon[^"]*"' | sed 's/href="//;s/"//g' | sort -u)
  
  if [ -z "$amazon_links" ]; then
    echo "No Amazon links found"
    echo ""
    continue
  fi
  
  link_count=$(echo "$amazon_links" | wc -l)
  total_links=$((total_links + link_count))
  echo "Found $link_count Amazon links:"
  
  broken_count=0
  ok_count=0
  
  while IFS= read -r link; do
    [ -z "$link" ] && continue
    
    status=$(curl -sL -o /dev/null -w "%{http_code}" $HEADERS --max-time 15 "$link" 2>/dev/null)
    
    if [ "$status" = "404" ]; then
      echo "  ❌ BROKEN (404): $link"
      ((broken_count++))
      ((total_broken++))
    elif [ "$status" = "301" ] || [ "$status" = "302" ]; then
      redirect=$(curl -sL -o /dev/null -w "%{redirect_url}" $HEADERS --max-time 15 "$link" 2>/dev/null)
      echo "  🔀 REDIRECT ($status): $link"
      echo "      -> $redirect"
    elif [ "$status" = "200" ]; then
      echo "  ✅ OK: $(echo $link | cut -c1-80)..."
      ((ok_count++))
    else
      echo "  ⚠️  STATUS $status: $(echo $link | cut -c1-60)..."
    fi
  done <<< "$amazon_links"
  
  echo "Summary: $ok_count OK, $broken_count broken"
  echo ""
done

echo "=== OVERALL ==="
echo "Total links tested: $total_links"
echo "Broken links (404): $total_broken"

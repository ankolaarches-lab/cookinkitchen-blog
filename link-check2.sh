#!/bin/bash

PAGES=(
  "https://cookinkitchen.online/reviews/best-chef-knives-home-cooks"
  "https://cookinkitchen.online/reviews/best-dutch-oven"
  "https://cookinkitchen.online/reviews/best-yeti-rambler-tumblers"
  "https://cookinkitchen.online/reviews/best-stanley-tumblers"
  "https://cookinkitchen.online/reviews/best-egg-cookers"
)

echo "=== LINK HEALTH CHECK ==="
echo ""

for page in "${PAGES[@]}"; do
  echo "=== Checking: $page ==="
  
  # Fetch page content
  content=$(curl -sL "$page")
  
  # Extract ALL href values containing amazon
  amazon_links=$(echo "$content" | grep -oE 'href="https?://[^"]*amazon[^"]*"' | sed 's/href="//;s/"//g' | sort -u)
  
  if [ -z "$amazon_links" ]; then
    echo "No Amazon links found"
    echo ""
    continue
  fi
  
  link_count=$(echo "$amazon_links" | wc -l)
  echo "Found $link_count Amazon links:"
  
  broken_count=0
  redirect_count=0
  
  while IFS= read -r link; do
    [ -z "$link" ] && continue
    
    # Test with curl -I
    status=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$link" 2>/dev/null)
    
    if [ "$status" = "404" ]; then
      echo "  ❌ BROKEN (404): $link"
      ((broken_count++))
    elif [ "$status" = "301" ] || [ "$status" = "302" ]; then
      redirect=$(curl -sL -o /dev/null -w "%{redirect_url}" --max-time 10 "$link" 2>/dev/null)
      echo "  🔀 REDIRECT ($status): $link -> $redirect"
      ((redirect_count++))
    elif [ "$status" = "200" ]; then
      echo "  ✅ OK (200): $link"
    else
      echo "  ⚠️  STATUS $status: $link"
    fi
  done <<< "$amazon_links"
  
  echo "Summary: $broken_count broken, $redirect_count redirects"
  echo ""
done

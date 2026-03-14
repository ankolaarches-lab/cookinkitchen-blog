#!/bin/bash
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

check_link() {
  local url="$1"
  status=$(curl -sL -o /dev/null -w "%{http_code}" -H "User-Agent: $UA" --max-time 15 "$url" 2>/dev/null)
  echo "$status"
}

declare -A results

links=(
  "https://www.amazon.com/s?k=Mac+MTH+80+8+Inch+Chef+Knife?tag=cookinkitchen-20"
  "https://www.amazon.com/s?k=Mercer+Culinary+Genesis+8+Inch+Chef?tag=cookinkitchen-20"
  "https://www.amazon.com/s?k=Victorinox+Swiss+Classic+8+Inch+Chef?tag=cookinkitchen-20"
  "https://www.amazon.com/s?k=Wusthof+Classic+8+Inch+Chefs+Knife?tag=cookinkitchen-20"
  "https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20"
  "https://www.amazon.com/s?k=amazonbasics+dutch+oven&tag=cookinkitchen-20"
  "https://www.amazon.com/s?k=le+creuset+dutch+oven&tag=cookinkitchen-20"
  "https://www.amazon.com/s?k=lodge+enameled+dutch+oven&tag=cookinkitchen-20"
  "https://www.amazon.com/STANLEY-Flowstate-3-Position-Compatible-Insulated/dp/B0CP9YB3Q4?tag=cookinkitchen-20"
  "https://www.amazon.com/YETI-Rambler-14oz-Stainless-Insulated/dp/B07QH4P8JW?tag=cookinkitchen-20"
  "https://www.amazon.com/YETI-Rambler-36oz-Bottle-Stainless/dp/B07Y5W6CC6?tag=cookinkitchen-20"
  "https://www.amazon.com/YETI-Rambler-Jug-Stainless-Insulated/dp/B09X7J5ZKC?tag=cookinkitchen-20"
  "https://www.amazon.com/YETI-Rambler-Stainless-Insulated-MagSlider/dp/B0F9ZXFN2J?tag=cookinkitchen-20"
  "https://www.amazon.com/STANLEY-Adventure-Quencher-Tumbler-14oz/dp/B09HR1THGD?tag=cookinkitchen-20"
  "https://www.amazon.com/STANLEY-Classic-Insulated-Bottle-Wide/dp/B008FYCNNC?tag=cookinkitchen-20"
  "https://www.amazon.com/STANLEY-GoSeries-Water-Bottle-18oz/dp/B07XJ8C8F5?tag=cookinkitchen-20"
  "https://www.amazon.com/STANLEY-Quencher-ProTour-Tumbler-Sunrise/dp/B0GFQ1JQVZ?tag=cookinkitchen-20"
  "https://www.amazon.com/Chefman-Electric-Cooker-Steamer-Poacher/dp/B07VS5WLV4?tag=cookinkitchen-20"
  "https://www.amazon.com/Cuisinart-7-Egg-Cooker-ECB-200/dp/B0038JE2Z6?tag=cookinkitchen-20"
  "https://www.amazon.com/DASH-Rapid-Egg-Cooker-Scrambled/dp/B0D3W6XGLR?tag=cookinkitchen-20"
  "https://www.amazon.com/Mueller-Egg-Cooker-Steamer-Poacher/dp/B08FC5L3RG?tag=cookinkitchen-20"
  "https://www.amazon.com/Nordic-Ware-7-Egg-Breaky-Cooker/dp/B00005MJHJ?tag=cookinkitchen-20"
)

echo "Testing $(${#links[@]}) Amazon affiliate links..."
echo ""

total=0
broken=0
ok=0

for link in "${links[@]}"; do
  ((total++))
  status=$(check_link "$link")
  
  # Extract short name for display
  name=$(echo "$link" | sed 's|https://www.amazon.com/||;s|/dp/.*||;s|\?tag=.*||;s|_|-|g' | cut -c1-50)
  
  if [ "$status" = "200" ]; then
    echo "✅ OK: $name"
    ((ok++))
  elif [ "$status" = "404" ]; then
    echo "❌ BROKEN (404): $name"
    echo "   Full URL: $link"
    ((broken++))
  elif [ "$status" = "301" ] || [ "$status" = "302" ]; then
    echo "🔀 REDIRECT ($status): $name"
    ((broken++))
  else
    echo "⚠️  STATUS $status: $name"
  fi
done

echo ""
echo "=== SUMMARY ==="
echo "Total links tested: $total"
echo "OK (200): $ok"
echo "Broken/Issues: $broken"

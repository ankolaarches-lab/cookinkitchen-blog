#!/bin/bash
# Script to update reviews with detailed content using curl

API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmNqd2J4Y3ljbmNya2RpeXVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTU1OTk4MCwiZXhwIjoyMDg3MTM1OTgwfQ.aJI1r5bhhgV4N3bzyYS0keBGoLmk0PAbfA3PqtHD-dU"
BASE_URL="https://dancjwbxcycncrkdiyug.supabase.co/rest/v1/reviews"

update_review() {
    local slug="$1"
    local id="$2"
    local title="$3"
    local content="$4"
    
    # Convert newlines to \n and escape for JSON
    content_escaped=$(echo "$content" | python3 -c "import sys,json; print(json.dumps(sys.stdin.read()))")
    
    local json="{\"title\":$title,\"content\":$content_escaped,\"published\":true}"
    
    echo -n "Updating $slug... "
    result=$(curl -s -X PATCH "$BASE_URL?id=eq.$id" \
        -H "apikey: $API_KEY" \
        -H "Authorization: Bearer $API_KEY" \
        -H "Content-Type: application/json" \
        -H "Prefer: return=minimal" \
        -d "$json")
    
    if [ $? -eq 0 ]; then
        echo "OK"
    else
        echo "FAILED"
    fi
}

# Get all review IDs first
echo "Fetching review IDs..."
reviews=$(curl -s "$BASE_URL?select=id,slug" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY")
echo "$reviews"

from Portfolio import app
from flask import render_template
import feedparser, time
from werkzeug.exceptions import HTTPException
from datetime import datetime
import pytz


medium_posts = "https://medium.com/feed/@matangmehra"

feed_cache = None
last_fetch_time = 0
CACHE_TIMEOUT = 600  # Cache timeout in seconds (e.g., 10 minutes)

def format_published_date(published_str):
    try:
        # RSS feed provides a published date in RFC 822 format
        dt = datetime.strptime(published_str, '%a, %d %b %Y %H:%M:%S GMT')
        gmt = pytz.timezone('GMT')
        dt = gmt.localize(dt)

        local_tz = pytz.timezone('Asia/Kolkata')
        local_time = dt.astimezone(local_tz)
        return local_time.strftime('%b %d, %Y')
    except ValueError:
        return published_str


def get_feed():
    global feed_cache, last_fetch_time

    current_time = time.time()
    
    # Check if cache is expired
    if feed_cache is None or current_time - last_fetch_time > CACHE_TIMEOUT:
        try:
            feed = feedparser.parse(medium_posts)
            feed_cache = feed.entries[:10]
            last_fetch_time = current_time
            return feed_cache
        except Exception as e:
            feed_cache = []  # Empty list to handle errors gracefully
            print(f"Error fetching Medium feed: {e}")
            return feed_cache

    return feed_cache

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('index.html')

@app.route('/about')
def about_page():
    return render_template('about.html')

@app.route('/projects')
def projects_page():
    return render_template('projects.html')

@app.route('/blogs')
def blogs_page():
    feed = get_feed()
    entries = []
    for entry in feed:  # Limit to the first 5 entries
        # Get the author or fallback to "Unknown"
        author = entry.get('author', 'Unknown')
        
        # Get the published date formatted
        published = format_published_date(entry.published)
        
        # Append formatted entry data
        entries.append({
            'title': entry.title,
            'link': entry.link,
            'author': author,
            'published_date': published,
        })
    return render_template('blogs.html', entries=entries)

@app.route('/connect-with-me')
def connect_page():
    return render_template('connect.html')
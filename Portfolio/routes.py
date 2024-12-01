from Portfolio import app
from flask import render_template

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
    return render_template('blogs.html')
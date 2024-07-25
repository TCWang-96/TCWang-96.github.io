import markdown

# Step 1: Read the Markdown file
with open('QP_1127.md', 'r', encoding='utf-8') as md_file:
    md_content = md_file.read()

# Step 2: Convert Markdown to HTML
html_content = markdown.markdown(md_content)

# Step 3: Save the HTML output
with open('QP_1127.html', 'w', encoding='utf-8') as html_file:
    html_file.write(html_content)

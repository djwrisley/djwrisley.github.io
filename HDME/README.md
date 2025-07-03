# HDME - Spatial Humanities Workshop

A Jekyll-powered static website for the Spatial Humanities Workshop at ESU 2025, held in historic Besançon.

## Overview

This workshop introduces participants to digital mapping environments and humanities data curation, designed for beginners who want to explore spatial dimensions in their research.

## Website Features

- **Jekyll with Minimal Theme**: Built using GitHub Pages minimal theme
- **ESU 2025 Branding**: Features the official ESU 2025 logo
- **Responsive Design**: Optimized for all device sizes
- **Structured Content**: 
  - Workshop Overview
  - Pre-workshop preparation information
  - Detailed 20-session agenda across two weeks

## Technical Details

- Jekyll static site generator
- GitHub Pages minimal theme
- Custom SCSS styling for enhanced appearance
- Markdown content with YAML front matter
- ESU 2025 JPG logo integration

## Local Development

To run this site locally:

1. Install Ruby and Bundler
2. Run `bundle install` to install dependencies
3. Run `bundle exec jekyll serve` to start the development server
4. Visit `http://localhost:4000` to view the site

## Workshop Structure

**Week 1**: Foundations and Data Creation (10 sessions)
- Critical review of spatial humanities projects
- Data creation and acquisition techniques
- Basic querying and normalization

**Week 2**: Visualization and Advanced Techniques (10 sessions)
- Static site development
- Advanced visualization and storytelling
- GIS software and historical mapping

## File Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Custom layout template
├── assets/
│   ├── css/
│   │   └── style.scss   # Custom styling
│   └── images/
│       └── LogoESU2025.jpg
├── Gemfile              # Ruby dependencies
├── index.md             # Main content page
└── README.md            # This file
```

## Credits

- **Theme**: GitHub Pages Minimal Theme
- **Logo**: ESU 2025 official branding
- **Content**: Workshop curriculum for ESU 2025 conference

# Castle Douglas Soapbox Derby Website

A colorful, energetic, and responsive website for the Castle Douglas Soapbox Derby event, featuring a modern red, blue, green, and white color scheme.

## Features

- Dynamic image gallery loaded from Supabase Storage (with fallback placeholders)
- Downloadable PDF rules and entry forms
- Live countdown to race day
- Fully responsive design using Tailwind CSS
- Real-time updates
- Fallback content if Supabase connection fails

## Tech Stack

- HTML
- Tailwind CSS (via CDN)
- JavaScript
- Supabase for image and document storage
- Optimized for all device sizes

## Colors

- Primary: Red (#dc2626)
- Secondary: Blue (#1d4ed8)
- Accent: Green (#16a34a)
- Background: White, with subtle gray alternating sections

## Development

1. Clone the repository
2. Open `index.html` in your browser
3. Images and PDFs are fetched from Supabase Storage
4. Tailwind CSS styling is loaded via CDN

## Image Placeholders

If Supabase connection fails or no images are found, the site automatically displays racing-themed placeholder images from Unsplash.

## Supabase Integration

The website connects to Supabase to fetch:
- Event photos from the `gallery` bucket
- PDF documents from the `docs` bucket

## Deployment

This site is deployed on Vercel with optimized caching settings.

Live site: https://castledsbd-g2uv2q57g-kyles-projects-51d4a5ee.vercel.app

## License

© 2024 Castle Douglas Soapbox Derby. All rights reserved. 
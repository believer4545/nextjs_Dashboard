# PICA Medical Website

A Next.js website for PICA Medical, built with vanilla Bootstrap 5.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd pica-website
```

2. Install dependencies
```bash
npm install bootstrap
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/components` - React components organized by section
- `/pages` - Next.js pages
- `/public` - Static assets like images

## Features

- Responsive design using vanilla Bootstrap 5
- No React-Bootstrap components, just standard HTML with Bootstrap classes
- Modern design with gradients and cards
- Clean and professional layout
- Optimized for all device sizes
- Font Awesome icons loaded from CDN

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework (vanilla HTML/CSS)
- [Font Awesome](https://fontawesome.com/) - Icon library via CDN

## Deployment

The project can be deployed to Vercel by following these steps:

1. Create a Vercel account
2. Connect your repository
3. Configure your deployment settings
4. Deploy

```bash
npm run build
```

This will create an optimized production build of your application.

## Image Replacement

The placeholder images in this project should be replaced with actual images for PICA Medical. Update the following:

- Logo in Header.js
- Team photo in WhoWeAre.js
- Hero background image in Hero.js

## Important Notes

- Bootstrap JavaScript is loaded dynamically on the client side via `useEffect` in `_app.js`
- Font Awesome icons are loaded from CDN in the `<Head>` section
- All components use vanilla Bootstrap HTML structure and classes
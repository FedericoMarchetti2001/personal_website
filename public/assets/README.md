# Assets Directory

This directory contains images and media files for the website.

## Required Images

### Project Cover Images

Add cover images for projects in `/public/assets/projects/`:

```
/public/assets/projects/
├── ecommerce-cover.jpg       (1200x600px recommended)
├── collaboration-cover.jpg   (1200x600px recommended)
└── [your-project]-cover.jpg
```

### Resume PDF

Add your resume PDF:

```
/public/Federico_Marchetti_Resume.pdf
```

### Blog Post Images (Optional)

Add images referenced in blog posts:

```
/public/assets/blog/
└── [image-name].jpg
```

## Image Optimization Tips

1. **Recommended Sizes**:
   - Project covers: 1200x600px (2:1 aspect ratio)
   - Blog featured images: 1200x630px (OG image)
   - Icons: 512x512px (square)

2. **Format**:
   - Use WebP for better compression
   - Provide fallback JPG/PNG
   - Next.js Image component handles optimization

3. **Optimization Tools**:
   - [Squoosh](https://squoosh.app/) - Online image optimizer
   - [ImageOptim](https://imageoptim.com/) - Mac app
   - [TinyPNG](https://tinypng.com/) - Online PNG/JPG compressor

## Placeholder Images

Until you add your own images, you can use placeholders from:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Placeholder.com](https://placeholder.com/)

Example placeholder URLs:
```
https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop
https://via.placeholder.com/1200x600/6366f1/ffffff?text=Project+Cover
```

## Adding Images

### 1. Download/Create Images

Create or download images with the recommended dimensions.

### 2. Add to Public Directory

```bash
# Create directories
mkdir -p public/assets/projects
mkdir -p public/assets/blog

# Copy images
cp your-image.jpg public/assets/projects/ecommerce-cover.jpg
```

### 3. Update MDX Files

Reference images in your project MDX files:

```mdx
---
coverImage: "/assets/projects/ecommerce-cover.jpg"
---
```

### 4. Add Resume PDF

```bash
cp Federico_Marchetti_Resume.pdf public/
```

## Stock Images Sources (Free)

- **Unsplash**: High-quality free photos
- **Pexels**: Free stock photos and videos
- **Pixabay**: Free images and videos
- **Freepik**: Free vectors and images (attribution required)

## Creating Project Mockups

Tools for creating project screenshots:
- **Figma**: Design tool with mockup templates
- **Canva**: Easy mockup creator
- **Mockuphone**: Device mockups
- **Screely**: Beautiful browser mockups

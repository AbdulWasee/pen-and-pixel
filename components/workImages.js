// ============================================================
// WORK SPHERE IMAGES — single source of truth
// The DomeGallery (the interactive sphere on the home Work section)
// reads this list. Add or replace images here and every place the
// sphere appears updates automatically.
//
// HOW TO ADD YOUR OWN:
//   1. Drop image files into  public/work/  (e.g. public/work/reel-01.jpg)
//   2. Add their paths below, OR paste full https:// image URLs.
//   3. Best results: square-ish images (they're cropped to squares),
//      roughly 800x800–1200x1200, JPG/PNG/WebP. ~8–20 images is ideal.
//
// NOTE: the sphere shows IMAGES only (no video). For video/reels we'd
// use a still frame here, or a separate video section — see the chat.
// The pp-*.jpg files below are placeholder brand tiles; swap them for
// real, cleared work before launch.
// ============================================================

const workImages = [
  { src: "/work/pp-01.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-02.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-03.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-04.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-05.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-06.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-07.jpg", alt: "Pen & Pixel work sample" },
  { src: "/work/pp-08.jpg", alt: "Pen & Pixel work sample" },
];

export default workImages;

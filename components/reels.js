// ============================================================
// REELS — single source of truth for the video showcase.
//
// HOW TO ADD YOUR OWN REELS:
//   1. Drop the video into  public/reels/  (e.g. public/reels/fashion-01.mp4)
//      MP4 (H.264/AAC) works everywhere. Keep them web-sized — a few MB each,
//      720p vertical is plenty. You can trim/compress in any editor or Handbrake.
//   2. Add a still frame (poster) too — public/reels/fashion-01.jpg — so the
//      card shows something instantly before the video loads. Square-ish or
//      vertical (9:16) posters look best.
//   3. Fill in `src` below. When `src` is set, the card plays muted on hover
//      and opens with sound on click. While `src` is empty it shows a tasteful
//      "Coming soon" state — so this looks intentional even before you add video.
//
// Nothing here autoplays or preloads: videos load only when hovered/opened,
// which keeps the page fast.
// ============================================================

const reels = [
  { poster: "/reels/reel-01.jpg", src: "", label: "Fashion",  title: "Lookbook teaser" },
  { poster: "/reels/reel-02.jpg", src: "", label: "Beauty",   title: "Product reel" },
  { poster: "/reels/reel-03.jpg", src: "", label: "Skincare", title: "Launch film" },
  { poster: "/reels/reel-04.jpg", src: "", label: "Garments", title: "Campaign cut" },
  { poster: "/reels/reel-05.jpg", src: "", label: "Brand",    title: "Brand film" },
  { poster: "/reels/reel-06.jpg", src: "", label: "Social",   title: "Trend reel" },
];

export default reels;

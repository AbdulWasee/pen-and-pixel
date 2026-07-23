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
  { poster: "/reels/thumbnail1.png", src: "/reels/video1.mp4", label: "Motion", title: "Reel One" },
  { poster: "/reels/thumbnail2.png", src: "/reels/video2.mp4", label: "Creative", title: "Reel Two" },
  { poster: "/reels/thumbnail3.png", src: "/reels/video3.mp4", label: "Visual", title: "Reel Three" },
  { poster: "/reels/thumbnail4.png", src: "/reels/video4.mp4", label: "Digital", title: "Reel Four" },
  { poster: "/reels/thumbnail5.png", src: "/reels/video5.mp4", label: "Brand", title: "Reel Five" },
  { poster: "/reels/thumbnail6.png", src: "/reels/video6.mp4", label: "Style", title: "Reel Six" },
  { poster: "/reels/thumbnail7.png", src: "/reels/video7.mp4", label: "Impact", title: "Reel Seven" },
];

export default reels;

vite, react, typescript, tailwind, zustand, react-router

deployed on vercel: https://layer-gamma.vercel.app

src/
  ├── app/
  │   ├── Home/
  │   │   ├── page.tsx
  │   │   └── components/
  │   │       ├── image-search-bar.tsx
  │   │       └── liked-images-link.tsx
  │   │       └── search-image-grid.tsx
  │   └── LikedImages/
  │       ├── page.tsx
  │       └── components/
  │           ├── home-page-link.tsx
  │           └── liked-images-grid.tsx
  ├── assets/
  ├── common/
  │   └── types.ts
  ├── components/
  │   ├── icons/
  │   │   ├── expand-icon.tsx
  │   │   ├── like-icon.tsx
  │   │   ├── search-icon.tsx
  │   │   ├── home-icon.tsx
  │   │   └── unlike-icon.tsx
  │   ├── ui/
  │   │   ├── input.tsx
  │   │   ├── header.tsx
  │   │   ├── image-grid.tsx
  │   │   ├── image-hover-overlay.tsx
  │   │   ├── image-modal.tsx
  │   │   ├── image-tile.tsx
  │   │   └── image-with-hover.tsx
  ├── hooks/
  │   └── useDebounce.tsx
  ├── stores/
  │   └── useImagesStore.tsx
  ├── App.css
  ├── App.tsx
  ├── index.css
  └── main.tsx


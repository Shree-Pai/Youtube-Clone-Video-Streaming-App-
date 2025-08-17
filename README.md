
# Video Streaming App (YouTube Clone)

A modern, responsive YouTube clone built with React that replicates the core UI and interactive features of YouTube.

The app deployed in https://you-tu-be-app.netlify.app/
Github Link - https://github.com/Shree-Pai/Youtube-Clone-Video-Streaming-App-

## 🚀 Features & Functionalities

### ✅ **Core Features Implemented:**

#### 1. **Homepage (Video Feed)**
- Displays trending videos with thumbnails
- Each video includes:
  - Thumbnail image
  - Video title
  - Channel name & profile picture
  - Number of views & posted time
  - Video duration overlay
- Clicking on a video navigates to the Video Details Page

#### 2. **Navigation & Routing**
- **Top Navbar with:**
  - Hamburger menu icon
  - YouTube logo with "IN" indicator
  - Search bar with rounded corners and magnifying glass
  - Microphone icon for voice search
  - Create button (video camera icon)
  - Notifications bell
  - Theme toggle button (Light/Dark mode)
  - Profile icon with "S"
- **Left Sidebar with categories:**
  - Home, Trending, Music, Gaming, Technology
  - News, Sports, Education, Entertainment, Science
- Uses React Router for seamless page navigation

#### 3. **Video Details Page**
- Full video player UI with iframe support
- **Below the video:**
  - Title & description of the video
  - Like & Dislike buttons (state-based, changes dynamically)
  - Subscribe button (UI only, no backend)
  - Comment section with a list of comments
  - Channel information with avatar

#### 4. **Sidebar: Related Videos**
- Displays a list of suggested videos on the right
- Clicking on a video opens the Video Details Page

#### 5. **Search Functionality**
- Users can type keywords in the search bar
- Results are displayed dynamically on a separate Search Results Page
- Searches through video titles, channels, descriptions, and categories

#### 6. **Light/Dark Mode Toggle**
- Button to switch between light and dark themes
- Implemented using React Context API
- Theme preference is saved in localStorage

#### 7. **Category Filtering**
- Horizontal row of category buttons
- Filter videos by category (All, Trending, Music, Gaming, Technology, etc.)
- Active category is highlighted
- Responsive design with horizontal scrolling

#### 8. **UI/UX Enhancements**
- Hover effects on thumbnails and buttons
- Smooth animations for page transitions
- Skeleton loaders for better user experience while loading content
- Responsive design for all screen sizes

#### 9. **Fully Responsive Design**
- Works on mobile, tablet, and desktop
- Uses Bootstrap Grid & CSS media queries
- Sidebar collapses on smaller screens

## 🛠️ **Technology Stack**

- **Frontend:** React 18.3.1
- **Routing:** React Router DOM 6.26.2
- **Styling:** Bootstrap 5.3.3, CSS3
- **Icons:** Font Awesome 6.4.0
- **Build Tool:** Vite 5.4.2
- **State Management:** React Context API, useState, useEffect
- **Local Storage:** For theme preferences and likes/dislikes

## 📱 **Responsive Design**

- **Desktop:** Full sidebar + main content
- **Tablet:** Collapsible sidebar
- **Mobile:** Hidden sidebar, optimized grid layout

## 🎨 **Theme System**

- **Dark Theme (Default):** YouTube-like dark interface
- **Light Theme:** Clean white interface
- Automatic theme persistence
- Smooth theme transitions

## 🎥 **Video Content**

The app includes 8 sample videos across different categories:
- **Technology:** React tutorials, coding tips, tech gadgets
- **Music:** Lofi beats for studying
- **Gaming:** Gaming montages and gameplay
- **News:** Tech news and updates
- **Sports:** Football and sports highlights
- **Education:** Math courses and learning content

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory: `cd video-streaming-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:5173`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 **Project Structure**

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── Sidebar.jsx         # Left sidebar with categories
│   ├── VideoCard.jsx       # Individual video card component
│   ├── Skeleton.jsx        # Loading skeleton components
│   └── ThemeContext.jsx    # Theme context provider
├── pages/
│   ├── Home.jsx            # Homepage with video grid
│   ├── Video.jsx           # Video details page
│   └── Search.jsx          # Search results page
├── data/
│   └── videos.json         # Video data and metadata
├── App.jsx                 # Main app component
├── main.jsx                # App entry point
└── index.css               # Global styles and theme variables
```

## 🔧 **Key Features Implementation**

### **State Management**
- Uses React hooks for local state
- Context API for global theme state
- LocalStorage for persistent data

### **Routing**
- React Router for navigation
- Dynamic routes for video pages
- Query parameters for search and filtering

### **Responsive Design**
- Bootstrap grid system
- CSS media queries
- Mobile-first approach

### **Performance**
- Lazy loading for images
- Skeleton loaders
- Optimized re-renders with useMemo

## 🌟 **Future Enhancements**

- User authentication system
- Video upload functionality
- Real-time comments
- Video recommendations algorithm
- Playlist functionality
- User subscriptions
- Video history tracking

## 📄 **License**

This project is for educational purposes and demonstrates modern React development practices.

## 🤝 **Contributing**

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using React, Bootstrap, and modern web technologies**

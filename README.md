# Video Streaming App (YouTube Clone)

A modern, responsive YouTube clone built with React that replicates the core UI and interactive features of YouTube.

The app is deployed on Netlify at [https://you-tu-be-app.netlify.app/](https://you-tu-be-app.netlify.app/).

The GitHub repository is available at [https://github.com/Shree-Pai/Youtube-Clone-Video-Streaming-App-](https://github.com/Shree-Pai/Youtube-Clone-Video-Streaming-App-).

## 🚀 Features & Functionalities

### **Core Features Implemented:**

  * **Homepage (Video Feed):** Displays a grid of trending videos with essential metadata like titles, channels, views, and posted time.
  * **Video Details Page:** Provides a full-screen video player, along with video descriptions, a like/dislike system, channel info, and a comment section.
  * **Search Functionality:** Enables users to search for videos by title, channel, description, or category, displaying results on a dedicated page.
  * **Category Filtering:** A horizontal menu of buttons allows users to filter the video feed by popular categories such as Music, Gaming, and Technology.
  * **Light/Dark Mode:** A toggle button switches the app's theme between a dark and a light interface. The preference is saved in the browser's local storage.
  * **Fully Responsive Design:** The app is optimized for all screen sizes, from mobile phones to desktops, with a collapsible sidebar on smaller screens.
  * **Skeleton Loaders:** Provides a better user experience by displaying loading skeletons while video content is being fetched.

-----

## 🛠️ Technology Stack

  * **Frontend:** React 18.3.1
  * **Routing:** React Router DOM 6.26.2
  * **Styling:** Bootstrap 5.3.3, CSS3
  * **Icons:** Font Awesome 6.4.0
  * **Build Tool:** Vite 5.4.2
  * **State Management:** React Context API, `useState`, `useEffect`
  * **CI/CD:** Buddy.Works
  * **Deployment:** Netlify

-----

## 📁 Project Structure

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
│   └── videos.json         # Sample video data
├── App.jsx                 # Main app component
├── main.jsx                # App entry point
└── index.css               # Global styles and theme variables
```

-----

## 🚀 Getting Started

### Prerequisites

  * Node.js (v16 or higher)
  * npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Shree-Pai/Youtube-Clone-Video-Streaming-App-.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Youtube-Clone-Video-Streaming-App-
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open your browser and visit: `http://localhost:5173`

-----

## ⚙️ Deployment

The app is automatically deployed to Netlify using a **Continuous Integration/Continuous Deployment (CI/CD) pipeline** configured with **Buddy.Works**.

### Buddy CI/CD Pipeline

The deployment process is managed by a single pipeline in Buddy, configured as follows:

1.  **Trigger:** The pipeline is set to run automatically `On push` to the `main` branch of the GitHub repository.

2.  **Build Action (Node.js):**

      * This action provides the Node.js environment.
      * It runs the following commands to prepare the project for deployment:
        ```bash
        npm install
        npm run build
        ```

3.  **Deployment Action (Netlify):**

      * This action handles the deployment to Netlify.
      * It is configured to connect to the Netlify site.
      * It deploys the `dist` folder created by the build step to the production environment. The command executed is:
        ```bash
        netlify deploy --dir=dist --prod
        ```

-----

## 🌟 Future Enhancements

  * User authentication and profiles.
  * Video upload functionality.
  * Real-time comments.
  * Video recommendation algorithm.
  * Playlist functionality.
  * Video history tracking.
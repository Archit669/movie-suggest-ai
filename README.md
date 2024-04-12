# Movie Suggest AI

Movie Suggest AI is a web application designed to assist users in discovering movies and TV shows based on their preferences. Leveraging cutting-edge technologies, it provides personalized recommendations to enhance the user's entertainment experience.

## Tech Stack

### Frontend
- **Framework:** React.js - A popular JavaScript library for building user interfaces, offering efficient rendering and component-based architecture.
- **Styling:** Tailwind CSS - A utility-first CSS framework for creating custom designs with minimal CSS code.
- **State Management:** Context API - A built-in feature of React for managing global state without external libraries, simplifying state management.
- **Routing:** React Router - A library for handling navigation and routing in React applications, enabling seamless page transitions.
- **Lazy Loading Images:** react-lazy-load-image-component - A React component for lazy loading images, optimizing performance by loading images only when they enter the viewport.

### Backend
- **Runtime:** Deno - A secure runtime for JavaScript and TypeScript, offering built-in TypeScript support and a secure-by-default philosophy.
- **Database:** Supabase (PostgreSQL) - An open-source alternative to Firebase, providing a real-time database and authentication services with PostgreSQL as the underlying database.
- **Web Framework:** Oak - A middleware framework for Deno inspired by Koa.js, offering a minimalist and modular approach to building web applications.

### Other Tools
- **Vector Database:** Utilized for storing movie data efficiently, enabling fast retrieval and processing of large datasets.
- **API Integration:** Custom API endpoints developed for fetching movie recommendations, ensuring seamless integration with the frontend.
- **Deployment:** Hosted on GitHub Pages for the frontend and Heroku for the backend, ensuring accessibility and scalability.
- **Version Control:** Git - A distributed version control system for tracking changes in project files and collaborating with multiple developers.

## Features
- **Recommendation System:** Employs advanced algorithms to analyze user preferences and generate personalized movie and TV show recommendations.
- **Search Functionality:** Enables users to search for specific movies or TV shows based on titles, genres, or keywords.
- **User Profiles:** Allows users to create profiles, save their preferences, and receive tailored recommendations for an enhanced viewing experience.
- **Responsive Design:** Optimized for various screen sizes and devices, ensuring a seamless experience across desktop and mobile platforms.

## Getting Started
1. Clone the repository: `git clone https://github.com/Archit669/movie-suggest-ai.git`
2. Install dependencies: `npm install`
3. Start the frontend: `npm run dev`
4. Start the backend: `deno run --allow-net --allow-read server.ts`
5. Access the application in your browser: [http://localhost:5173](http://localhost:5173)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

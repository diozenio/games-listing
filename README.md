# GameWaves

GameWaves is designed to provide users with an easy-to-navigate platform to discover and learn more about the top-rated games of 2023. The website features a user-friendly interface with the following key functionalities:

- A list of the best-rated games of the year.
- Detailed information on each game, including screenshots, descriptions, metacritic rating.
- Extended data about the DLCs for each game.

## 🎨 Figma Design

For a visual representation of the GameWaves project's design and layout, you can explore our Figma project.

[![Figma Design](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/1GkY9W8nusiVcdUqPsh3LP/GameWaves?type=design&node-id=52%3A998&mode=design&t=ytWz1FQhftyOZgdE-1)

## 🚀 Deploy

You can access GameWaves by clicking the following button:

[![VERCEL](https://img.shields.io/badge/Vercel-100000?style=for-the-badge&logo=vercel&logoColor=white)](https://game-waves.vercel.app/)

## 🔧 Installation

To run GameWaves locally on your machine, follow these steps:

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Clone the Repository

1. Open your terminal or command prompt.

2. Change the current working directory to the location where you want to store the project.

3. Run the following command to clone the GameWaves repository from GitHub:

   ```bash
   git clone https://github.com/diozenio/games-listing.git
   ```

### Install Dependencies

1. Navigate to the project directory using the terminal:

   ```bash
   cd games-listing
   ```

2. Install the project dependencies by running:

   ```bash
   npm install
   ```

### Setting Up `.env.local`

To configure your project, you'll need to create a `.env.local` file. You can use the `.env.local.example` file as a template. This file contains environment variables required for your application.

### Example .env.local

| Variable Name          | Description                                       | Example Value           |
| ---------------------- | ------------------------------------------------- | ----------------------- |
| API_URL                | The URL for the API you're connecting to.         | https://api.rawg.io/api |
| API_KEY                | Your API key to access the API.                   | your_api_key            |
| NEXT_PUBLIC_VERCEL_URL | The URL for the Vercel site or for local testing. | http://localhost:3000/  |

### Start the Application

1. After all the dependencies are installed, start the GameWaves application with the following command:

   ```bash
   npm run dev
   ```

2. The application should now be running locally. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access GameWaves.

### Run Storybook

1. To launch Storybook, use the following command in your project directory:

   ```bash
   npm run storybook
   ```

## 💻 Technologies Used

This project utilizes a variety of technologies to provide a powerful and efficient development environment:

[![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=%23FFFFFF)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Storybook](https://img.shields.io/badge/Storybook-%23FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%231a202c.svg?style=for-the-badge&logo=tailwind-css&logoColor=%231a202c)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-%23ffcc24.svg?style=for-the-badge&logo=radix-ui&logoColor=6b9bff)](https://radix-ui.com/)
[![SCSS](https://img.shields.io/badge/SCSS-%23ff69b4.svg?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

## 🔖 License

This project is licensed under the MIT License.

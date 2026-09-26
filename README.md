# 🏋️ FitLog

FitLog is a modern workout tracking web application built with Next.js.
It allows users to explore exercises, view detailed workout information,
create a daily workout plan, save exercises for later, and track workout
statistics such as exercise count, duration, and calories.

## 🔗 Live Demo

[FitLog](https://fit-log-tawny-omega.vercel.app/)


## ✨ Key Features

1.  **Workout Exploration**
    -   Browse a collection of exercises with images, equipment,
        difficulty, duration, calories, and ratings.
    -   View workouts in a responsive card-based layout.
2.  **Workout Details**
    -   View complete workout information including muscle groups,
        equipment, difficulty, sets, reps, duration, calories, rating,
        description, and step-by-step instructions.
3.  **Today's Workout Plan**
    -   Add exercises to today's plan.
    -   Prevent duplicate exercises from being added.
    -   Mark exercises as completed or remove them from the plan.
    -   Automatically update exercise count, total minutes, and total
        calories.
4.  **Save for Later**
    -   Save favorite exercises for later.
    -   Prevent duplicate saved exercises.
    -   View saved exercises in a separate Saved section.
5.  **Dynamic UI & User Feedback**
    -   Responsive design for mobile, tablet, and desktop.
    -   Toast notifications for actions such as adding, saving,
        completing, and removing exercises.
    -   Dynamic plan count displayed in the navigation bar.

## 🛠️ Technologies Used

-   **Next.js 16.3.6** -- React framework and routing
-   **React** -- Component-based UI development
-   **TypeScript** -- Type-safe development
-   **Tailwind CSS** -- Styling and responsive design
-   **DaisyUI** -- UI components and tabs
-   **React Icons** -- Icons throughout the application
-   **React Toastify** -- Toast notifications
-   **React Context API** -- Global workout plan and saved-exercise
    state
-   **REST API / Fetch** -- Workout data retrieval
-   **Next.js App Router** -- File-based routing and dynamic workout
    pages

## 📁 Folder Structure

``` text
fit-log/
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── banner/
│   │   │   │   └── Banner.tsx
│   │   │   ├── detailsPageButton/
│   │   │   │   ├── PlanButton.tsx
│   │   │   │   └── SaveButton.tsx
│   │   │   ├── footer/
│   │   │   │   └── Footer.tsx
│   │   │   ├── navbar/
│   │   │   │   └── Navbar.tsx
│   │   │   ├── nodata/
│   │   │   │   └── NoData.tsx
│   │   │   ├── planCard/
│   │   │   │   └── PlanCard.tsx
│   │   │   ├── saveCard/
│   │   │   │   └── SaveCard.tsx
│   │   │   └── workoutCard/
│   │   │       └── WorkoutCard.tsx
│   │   │
│   │   ├── plan/
│   │   │   └── page.tsx
│   │   │
│   │   ├── workouts/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── assets/
│   │   │   ├── banner.png
│   │   │   └── logo.png
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── context/
│   │   └── FitContext.tsx
│   │
│   └── types/
│       └── dataType.ts
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd fit-log
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run the development server

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

## 📡 API

The application retrieves workout data from:

``` text
https://api.abcz.workers.dev/api/fitlog
```

The API provides information such as:

-   Workout name
-   Image
-   Muscle groups
-   Equipment
-   Difficulty
-   Duration
-   Calories burned
-   Sets
-   Reps
-   Rating
-   Description
-   Instructions

## 📱 Responsive Design

FitLog is designed to work across:

-   📱 Mobile devices
-   📱 Tablets
-   💻 Laptops
-   🖥️ Desktop screens

## 👨‍💻 Author

**MD. Mridul Ali**

-   GitHub: `md-mridul-ali`
-   LinkedIn: `md-mridul-ali-`

------------------------------------------------------------------------

⭐ If you like this project, consider giving the repository a star!

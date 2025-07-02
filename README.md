# Take Care Of My Dogs - Daily Feeding Schedule

This project provides a simple web page to outline the **daily feeding schedule and care instructions** for three dogs: **Murphy**, **Lyla**, and **Gilda**. The page ensures clear and accessible instructions are available for anyone responsible for taking care of the dogs.

---

## Features

- **Dog Profiles**:
    - Displays individual cards for each dog with their **photo**, **name**, and a short description.
- **Feeding Schedule**:
    - Includes a detailed meal schedule for all dogs divided into categories like **breakfast**, **lunch**, and **dinner**.
- **Supplement & Medication Instructions**:
    - Outlines specific medications and supplements required for each dog at different times of the day.
- **Accessible Design**:
    - ARIA roles and accessible markup (e.g., descriptive alt texts, screen reader labels, and focusable elements) are included to accommodate users with assistive technologies.

## Development Setup

### Prerequisites
- Node.js and npm installed on your machine

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Gulp Tasks
This project uses Gulp for task automation:

- `gulp` or `npm start`: Starts development mode with live reloading
- `gulp build` or `npm run build`: Builds production-ready files
- `gulp css`: Processes CSS files only
- `gulp js`: Processes JavaScript files only
- `gulp clean`: Cleans the dist directory

### Project Structure
- `assets/css/`: Contains original CSS files
- `assets/js/`: Contains original JavaScript files
- `dist/css/`: Contains processed CSS files (created by Gulp)
- `dist/js/`: Contains processed JavaScript files (created by Gulp)

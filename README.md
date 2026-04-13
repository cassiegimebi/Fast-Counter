# Pokémon Box Inventory Counter

A lightweight, mobile-friendly web application designed for card shops to quickly count and export inventory for Japanese Pokémon Booster Boxes and select TCG products.

## Features
- **Offline Capable:** Runs entirely in the browser using Vanilla JavaScript with no build steps or backend servers required.
- **Auto-Saving:** App session counts are automatically preserved using `localStorage` so you never lose your progress if you close the page accidentally.
- **Bilingual Interface:** Includes a toggle for English / Japanese (`EN/JA`) labels on the fly.
- **Mac / Apple Aesthetic:** Designed with a clean, smooth, user-friendly interface.
- **Export to CSV & PDF:** Finish your session and instantly download a `.csv` spreadsheet or an A4 `.pdf` document summarizing all your box counts.
- **Official Imagery:** Features official placeholder imagery synced directly from the Pokémon Center Japan store where available.

## Deployment / Usage
Since this app is a purely frontend static website, no build process is required! 

## Tech Stack
- **HTML5**
- **CSS3** (Responsive, Custom Properties)
- **Vanilla JavaScript** (ES6)
- **html2pdf.js** (For PDF Export)

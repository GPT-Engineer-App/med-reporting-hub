# med-reporting-hub

- Full Screen Layout:
  - Header (Top Bar):
    - Spans the full width of the screen, approximately 5% of total height.
    - Background color: cyan/light blue (#00FFFF or similar).
    - Contains the "SMARTLIBRARY" text:
      - Positioned on the left side.
      - Font: sans-serif, bold, uppercase.
      - Font size: approximately 36px.
      - Color: white or very light grey.
    - Search bar:
      - Positioned on the right side, horizontally aligned with the "SMARTLIBRARY" text.
      - Width: approximately 15% of the screen width.
      - Height: about 70% of the header height.
      - Placeholder text: "Search...", suggesting a functional search system.
      - Search bar has rounded corners.
    - Plus sign icon (+):
      - Positioned to the right of the search bar.
      - Appears to be a button, likely for adding new entries to the library.
      - Color: matching the header background.
      - Size: similar to the height of the search bar.

  - Main Content Area:
    - Divided into two primary sections, the left column and the right column.
    - Background: a gradient or solid pale blue color, providing a visual contrast to both the header and the left sidebar.

    - Left Column:
      - Occupies approximately 25% of the screen width.
      - Contains two main interactive elements, each representing a category of reporting:
        - "Radiology Reporting" and "Pathology Cancer Reporting".
        - Each category element:
          - Has a title in a bold, sans-serif font, slightly larger than the content text.
          - Includes a list of specific report types (e.g., "CT Stroke", "MRI Headache").
          - Each report type is encapsulated in a bordered box with a light blue border.
          - Boxes are consistently sized and styled, suggesting they are clickable elements for navigation.

    - Right Column:
      - Occupies the remaining 75% of the screen width.
      - Organized into a grid layout of boxes, each representing a subcategory of reports:
        - Categories include "Neuroradiology", "Oncology", "MSK", "Cardiovascular", etc.
        - Each category box:
          - Has a header with the category name in bold, capitalized text.
          - Lists specific reports or procedures underneath the category header (e.g., "CT Pancreatic Cancer", "MRI Knee").
          - Ends with an "> OPEN" button aligned to the bottom right, indicating expandability or access to more detailed information.
          - The boxes vary in height depending on the number of report types they contain but maintain uniform width, hinting at a responsive design that accommodates varying content lengths.

  - Left Sidebar:
    - Extends the full height of the screen, approximately 10% of the total width.
    - Background color: cyan/light blue, matching the header.
    - Contains multiple icons:
      - Aligned vertically.
      - Likely represent different modules or sections of the application (e.g., home, settings, notifications).
      - The bottommost icon is three horizontal lines, typically representing a menu or additional options.

  - Assumed Footer (Not visible):
    - Likely contains copyright and/or navigation information based on common design practices.

This detailed layout suggests a user interface for a medical reporting application, with functionality for searching, adding new reports, and navigating through different categories and subcategories of medical reports. The design infers an information hierarchy, with a focus on accessibility and ease of use, accommodating users who may need quick access to various reports.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/med-reporting-hub.git
cd med-reporting-hub
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

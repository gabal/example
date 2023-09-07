# Overview

This guide provides an overview of the development process for this project, including essential commands, project structure, and key considerations.

## Getting Started
To start developing, follow these steps:

- Clone the repository.
- Install project dependencies using `yarn install`.

## Commands
- Run developer mode connecting with guthuib API 
  ```yarn dev```
- Run developer mode with mocked data 
  ```yarn devmocked```
- Run dproduction build 
  ```yarn prod```
- Generate component
  ```yarn generate ComponentName```
- Run unit tests with coverage
  ```yartn test```

## NextJS 13
This project utilizes Next.js, which offers a convention-over-configuration approach and a streamlined routing system for a seamless development experience. It also supports server-side rendering (SSR) and introduces new features like Server Side Components (SSC), layout support, loading states, and component streaming.

## Server Side Components
All components in this project are server-side rendered, leveraging Next.js routing. This approach eliminates the need for client-side-only hooks or properties, potentially leading to improved loading times, especially depending omn the used infrastructure.

## Code Structure
The project's code structure is designed to encapsulate each component with its required artifacts. If a component is intended to function as part of another component, it can be placed in the same package for better organization.

## API Limit
To enhance the development process and overcome API rate limits during development, the project provides two options:

Development Mode with Mocked Data: Use this mode by running:
```yarn devmocked```
This mode uses mocked data stored in the public folder, allowing you to work without hitting the actual API.

Development Mode with real API: Use this mode by running:
```yarn dev```

If the API rate limit is exceeded while using mostly server components, you will receive a notification in the UI and the terminal.

## Code generation
To streamline component creation, this project integrates Plop to auto-generate components, including CSS modules and test structures. To generate a component, for example, `Alert` execute the following command:
```yarn generate alert``` 

Future enhancements will extend this feature to support pages and additional configuration attributes.

## Styles
This project adopts CSS Modules for styling, providing encapsulation and preventing class name conflicts. While CSS Modules offer advantages, such as encapsulation, they do not provide the full capabilities of pre-processors like LESS or SCSS. The project includes a global CSS file, which may be refactored in the future to support theming or style variations separating colors and layouts.

For class naming conventions, kebab-casing is used to align with standard CSS notation, ensuring a more natural and familiar coding experience.

## Coverage
The project maintains a test coverage of approximately 76.47% (branches). While the ideal coverage target is over 85%, this level of coverage is acceptable for a proof-of-concept. A coverage report is generated each time tests are executed using the following command: ``yarn test``.

## Responsive design
The project follows a mobile-first approach, expanding styles to support desktop displays. The User page may require adjustments to prioritize the main content, the Repositories. Consider adding a side panel for mobile devices to display Followers and Organizations, toggleable on and off. To implement this feature, you may need to utilize client-side components.

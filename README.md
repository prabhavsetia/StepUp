# StepUp Studio

Welcome to the StepUp Studio web application! This project is a dance studio website that showcases our mission, services, and provides a way for visitors to contact us. 

## Features

- **Home Page**: Provides an introduction to StepUp Studio and highlights our mission.
- **About Page**: Offers detailed information about the studio and its objectives.
- **Contact Page**: Allows visitors to get in touch and submit their details.
- **Database Integration**: Uses MongoDB to store contact information submitted through the contact form.

## Technologies

- **Backend**: Express.js
- **Database**: MongoDB with Mongoose
- **Templating**: Pug (formerly Jade)
- **Static Files**: CSS and JavaScript for styling and interactivity

## Setup

### Prerequisites

- Node.js (v14.x or higher recommended)
- MongoDB (running locally or use a remote instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/stepup-studio.git
   cd stepup-studio
2. **Install dependencies**
   npm init

3. **Set up MongoDB**
   Ensure MongoDB is running locally or configure your MongoDB connection string in app.js.
   
## File Structure

- **app.js**: Main application file where Express server and MongoDB connection are set up.
- **views/**: Contains Pug templates for rendering HTML pages.
  - **base.pug**: Base layout template for consistent structure across pages.
  - **home.pug, about.pug, contact.pug**: Page-specific templates.
- **static/**: Contains static files like CSS and JavaScript.
  - **style.css**: Main stylesheet.
  - **index.js**: Main JavaScript file for client-side functionality.
- **models/**: Contains Mongoose schemas and models.
  - **contact.js**: Schema for storing contact information.

## Routes

- **GET /**: Renders the home page.
- **GET /about**: Renders the about page.
- **GET /contact**: Renders the contact page.
- **POST /contact**: Handles form submission and saves contact information to the database.

## video 🎥


https://github.com/user-attachments/assets/4f437b81-eafe-4af6-a503-7ff6855feeb3



## Contribution

If you want to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact:

- **Email**: Prabhav.setia333@gmail.com
- **Phone**: +91-9876543201

Thank you for visiting StepUp Studio!

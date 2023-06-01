export const ProjectList = [
  {
    Title: 'Amberg RMS - Amberg Technologies',
    Description: [
      'Amberg Technologies is a globally recognized leader in providing railway and tunnel survey solutions. One of its many offerings is the Railtrack survey and analysis. Developed a back-office application where the data collected by Amberg Rail Field app are processed, analysized and visualized. The back-office application is bundled as a stand-alone desktop application for windows that uses windows msi tool to bundle microservies, ui-application and all it’s dependencies. '
    ],
    Icon: 'rv_hookup',
    Link: '',
  },
  {
    Title: 'Amberg Rail Field - Amberg Technologies',
    Description: [
      'Amberg Technologies is a globally recognized leader in providing railway and tunnel survey solutions. One of its many offerings is the Railtrack survey and analysis. Developed an IOT solution that collects data while inspecting rail tracks using trolley, amu and gnss sensors and translate the defects of the track based on the data, and rendering the data on the tablet for visualization. The tablet app is used for recording various events, identifying defects on track, which is later used to take corrective and preventive actions based on the inspection.'
    ],
    Icon: 'train',
    Link: '',
  },
  {
    Title: 'Mister Loo – Web/Mobile',
    Description: [
      'Mister Loo designs, constructs and manages public toilet facilities through its tech- enabled service platform at high footfall locations in Asia. Mister Loo has developed a tech-enabled service platform offering an enjoyable customer experience meeting the highest cleanliness standards while ensuring diversity and equality along the entire value chain, regardless of race, gender, or nationality. The ERP application ranges from collecting usage data to visualize day to day revenue to complex customer relation manager that are but not limited to employee management, task manager, calendar etc.'
    ],
    Icon: 'shower',
    Link: '',
  },
  {
    Title: 'Private Wealth Solution',
    Description: [
      'Developed a digital partner portal for a Swiss-based Private Wealth Solutions company, creating a paperless system for partner banks. Solutions included digital forms, e-signature implementations, document management, communications etc. It also extends to complex Customer relationship management (CRM) digital solution for both business to business (b2b) and business to consumer (b2c).'
    ],
    Icon: 'add_business',
    Link: '',
  },
  {
    Title: 'Private Wealth Solution - Internal Communication Platform',
    Description: [
      'I developed a stateful Slack-like application using React-Redux, which includes various features such as user and channel creation, private messaging, adding and removing favorites, and the ability to add media using Firebase Storage. The application utilizes Firebase Real-Time Database for seamless real-time communication. Additionally, I ensured the security of the application by implementing Firebase Rules. The application is hosted on Firebase Hosting, providing a reliable and scalable platform. With an added touch of creativity, the application supports the use of emojis, enhancing the user experience.'
    ],
    Icon: 'chat',
    Link: '',
  },
  {
    Title: 'myKachaBazar - A eCommerce solution',
    Description: [
      'I developed a fully customizable e-commerce website using AngularJS for the front-end and Node.js for the backend to design RESTful API microservices. The website offers a seamless shopping experience and provides flexibility for end users to tailor the platform to their specific needs. By leveraging AngularJS, I created a dynamic and interactive user interface, while the Node.js backend enabled the design and implementation of scalable and efficient RESTful APIs. This combination allowed for smooth communication between the front-end and back-end systems, enabling features such as product browsing, cart management, and secure payment processing.',
    ],
    Icon: 'shopping_cart',
    Link: 'https://mykachabazar.com/',
  },
  {
    Title: 'Genshin Impact Tools',
    Description: [
      'I am currently working on an exciting hobby project using the latest version of Angular. The project aims to create a tool that simplifies and enhances my experience with a particular game. The website showcases the complete description of the project, along with its future plans and developments. Through this project, I intend to streamline certain aspects of the game, making it more convenient and enjoyable.',
    ],
    Icon: 'sports_esports',
    Link: 'https://riadahmedzakir.github.io/genshin-impact-tool/',
  },
  {
    Title: 'Minimalistic slack - React',
    Description: [
      'I developed a stateful Slack-like application using React-Redux, which includes various features such as user and channel creation, private messaging, adding and removing favorites, and the ability to add media using Firebase Storage. The application utilizes Firebase Real-Time Database for seamless real-time communication. Additionally, I ensured the security of the application by implementing Firebase Rules. The application is hosted on Firebase Hosting, providing a reliable and scalable platform. With an added touch of creativity, the application supports the use of emojis, enhancing the user experience.',
      'Future plans are added to the github page.',
    ],
    Icon: 'mark_chat_unread',
    Link: 'https://react-slack-24c40.web.app/',
  },
  {
    Title: 'Simple Chatapp',
    Description: [
      'I have embarked on a simple chat application project that utilizes WebSockets and is hosted on Heroku. This project serves as a learning experience to grasp the fundamentals of WebSockets and gain a better understanding of how Heroku functions. By leveraging WebSockets, the chat application facilitates real-time communication between users, allowing them to exchange messages seamlessly. The application is deployed and hosted on Heroku, a cloud platform that provides scalability, ease of deployment, and reliability. Through this project, I aim to enhance my knowledge of WebSockets and gain hands-on experience with deploying applications on Heroku.',
    ],
    Icon: 'chat',
    Link: 'https://simple-websocket-chatapp.herokuapp.com/',
  },
  {
    Title: 'Authetication & Authorization',
    Description: [
      'The project involves designing an authentication and authorization microservice using Microsoft IdentityServer4, which incorporates dynamic multi-tenant registration. This enables any client to register and utilize the microservice, as well as future planned generic microservices, using the generated token. Additionally, a generic data service is implemented for querying purposes.',
      'Key features of the authentication and authorization microservice include the implementation of IdentityServer4 to obtain tokens using credentials or refresh tokens. The microservice supports multi-tenancy, with tenant/client information being stored in a configurable database. Custom claims from the tenant user are utilized, along with custom role-based authorization. The roles themselves are configurable and stored in the database.',
      'To ensure fine-grained access control, each action within the microservice employs a CustomAuthorizeAttribute, which checks request permissions against the database configuration. Password hashing is implemented to enhance security. User creation is supported via an endpoint created using FluentValidation for input validation.',
      'For production environments, a self-signed certificate is added to secure communication. Additionally, a separate client/tenant module is created to facilitate user creation and login, with a demonstration available at the provided GitHub repository (https://github.com/riadahmedzakir/jwt-token-base-authenticaion).'
    ],
    Icon: 'done',
    Link: 'https://github.com/riadahmedzakir/microservice-imp',
  },
  {
    Title: 'Authetication & Authorization Frontend Intregation - Angular',
    Description: [
      'This website will provide a user-friendly interface for users to securely register and log into the application. By integrating with the Identity microservice, the page will handle user authentication and authorization, ensuring secure access to the application\'s resources. The registration page will allow new users to create an account with their desired credentials, while the login page will authenticate existing users and grant them access to the application. This implementation aims to provide a seamless and secure user experience while leveraging the robust authentication and authorization capabilities of the Identity microservice.',
    ],
    Icon: 'face',
    Link: 'https://github.com/riadahmedzakir/jwt-token-base-authenticaion',
  },
  {
    Title: 'Event-driven microservice',
    Description: [
      'A simple application that serves as a practical exploration of clean architecture and event-driven architecture. The application utilizes RabbitMQ as the message broker to facilitate communication between different components.',
      'The primary focus of this project is to implement clean architecture principles, which involve separating the application into distinct layers: presentation, domain, and infrastructure. The presentation layer handles user interactions, while the domain layer encapsulates the business logic and rules. The infrastructure layer interacts with external dependencies, such as databases and message brokers.',
      'Additionally, the application follows an event-driven architecture, where components communicate through asynchronous events. RabbitMQ acts as the central message broker, enabling the publishing and consumption of events. This architecture promotes loose coupling and scalability, as components can react to events and perform specific actions accordingly.'
    ],
    Icon: 'forward_to_inbox',
    Link: 'https://github.com/riadahmedzakir/rabbitmq-micro-imp',
  },
  {
    Title: 'A full fledge microservice architecture - Spring Boot',
    Description: [
      'In my microservices architecture, I implemented a robust Eureka Discovery Service that automates the registration of multiple instances of a service, enabling easy accessibility for other microservices. The first microservice, the Identity Service, leverages Eureka Discovery to delegate responsibilities such as user registration, user login, user details, user updates, and user deletion. Additionally, I developed the UAM (User Access Management) Service as a second microservice, utilizing Eureka Discovery for responsibilities including password reset and email verification.',
      'To ensure scalability and balanced load distribution, I integrated Spring Cloud API Gateway as a load balancer across multiple microservice instances. For secure endpoint access, I implemented JWT token authorization using gateway filters, providing authentication and authorization capabilities. To centralize configuration management, I employed Spring Cloud Config Server, simplifying updates and maintenance. Runtime configuration changes were facilitated through Spring Cloud Bus, coupled with RabbitMQ deployed on Docker as the message bus.',
      'In terms of security, I incorporated asymmetric encryption for the token secret, further enhancing the protection of JWT tokens. For client-side load balancing, I initially utilized Spring Rest Template, but later transitioned to Feign Client, a declarative web service client, for improved communication between microservices.',
      'These implementations ensured scalability, security, and performance within the microservices architecture, enabling efficient request handling, centralized configuration management, and seamless communication across the services.'
    ],
    Icon: 'domain',
    Link: 'https://github.com/riadahmedzakir/spring-java-microserice',
  },
  {
    Title: 'Expense Planner - Flutter',
    Description: [
      'Creating a simple android app using flutter to learn the basics of the framework.',
    ],
    Icon: 'price_change',
    Link: 'https://github.com/riadahmedzakir/flutter-expense-planner',
  },
  {
    Title: 'Food List - Flutter',
    Description: [
      'Creating a simple android app using flutter to learn the basics of the framework.',
    ],
    Icon: 'restaurant',
    Link: 'https://github.com/riadahmedzakir/flutter-food-list',
  },
  {
    Title: 'Ecommercify - Flutter',
    Description: ['Planned to make a simple flutter ecommerce app'],
    Icon: 'restaurant',
    Link: 'https://github.com/riadahmedzakir/flutter_ecommercify',
  },
  {
    Title: 'Dope coin',
    Description: [
      'The Dopest coin of them all.',
      'Just learning about block chain xDD',
    ],
    Icon: 'currency_bitcoin',
    Link: 'https://github.com/riadahmedzakir/dope-coin',
  },
  {
    Title: 'Shopzoon - A eCommerce Solution',
    Description: [
      'A eCommerce website using Java, JSP, JSON, Javascript & Hibernate technology.',
      'This is an univeristy project that focused on learning the technologies mentioned.',
    ],
    Icon: 'shopping_cart',
    Link: 'https://github.com/riadahmedzakir/ShopZoon',
  },
  {
    Title: 'E-Shop - A eCoomerce Solution',
    Description: [
      'E-shop was designed following MVC pattern with PHP, Javascript, HTML & CSS.',
      'This is an univeristy project that focused on learning the technologies mentioned.',
    ],
    Icon: 'shopping_cart',
    Link: 'https://github.com/riadahmedzakir/E-Shop_eCommerce',
  },
  {
    Title: 'Task manager',
    Description: [
      'A simple task management system using Javascript & Bootstrap.',
    ],
    Icon: 'task',
    Link: 'https://riadahmedzakir.github.io/To-Do-List/',
  },
  {
    Title: 'Dx-Ball',
    Description: [
      'A simple android game developed to learn the basics of embedded technology.',
    ],
    Icon: 'smart_toy',
    Link: 'https://github.com/riadahmedzakir/DxBall',
  },
  {
    Title: 'Break The Line',
    Description: [
      'A simple game designed in the concept of BreakLiner (Android game) using openGL',
    ],
    Icon: 'show_chart',
    Link: 'https://github.com/riadahmedzakir/Break_The_Line',
  },
];

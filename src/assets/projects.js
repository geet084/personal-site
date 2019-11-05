export default [
  {
    title: 'Gameflix - In Progress',
    site: 'https://gameflix1810.herokuapp.com/',
    repo: 'https://github.com/geet084/gameflix',
    paragraphs: [
      'I like to play games, especially board games, but it can be difficult to find new ones that catch your interest. During a conversation with a friend, we realized that not only is finding new games not easy, we also had a hard time keeping track of what games we owned or liked between us.',
      'With a board game API in hand, the idea exolved into a version of Netflix where you can browse and search through board games. Additionally, there would be a social aspect as well where you can see what games your friends have and like. This would facilitate game events where you could recommend they bring certain games as well as helping to narrow a selection of games down to what can be played with the number of players and time they would take.',
      'This is still a work in progress - I am building a database to correlate games owned, favorites and users. I would also like to have the ability to track game playing activity in a fun way as well.'
    ]
  },
  {
    title: 'Yahtzee',
    site: 'https://geet084.github.io/yahtzee/',
    repo: 'https://github.com/geet084/yahtzee',
    paragraphs: [
      'This started as a personal project, based loosely on Yahtzee with Buddies mobile app, to more or less just to see if I could make a game that behaved like a native app using just HTML, CSS and JavaScript. After all, using frameworks like React and Vue definitely make your life easier, but I was curious how hard it would be to do it with the least number of tools as possible.',
      'After a struggle in remembering how to set everything up when there\'s no frameworks involved, the fun part came when trying to set up a Progressive Web App with it\'s manifest and service worker. It was a challenge, but it was all the more rewarding to get it working (verified on Android so far) and behaving like you would expect from a native app.',
      'As I continue to work on this, I would like to incorporate more traditional app functionality like being able to play against a friend by incorporating websockets, as well as a database at some point for users, high scores, etc.',
    ]
  },
  {
    title: 'Turing Mentors',
    site: 'https://turing-mentors.herokuapp.com/',
    repo: 'https://github.com/geet084/turing-mentors',
    paragraphs: [
      'This project was my last one while at Turing and I collaborated with a backend student to build a fullstack application. We decided to build something that would enhance and replace the existing mentoring spreadsheet, which was clunky and not well looked after.',
      'To do this, we came up with a short survey for both those seeking a mentor and those wished to become a mentor themselves. Using that information, we then filtered down the list by location (currently Denver or Remote) as well as by programming language to provide a better search experience.',
      'Our next steps will be to implement a login and tracking system for users, more location and language selections, as well as an admin dashboard.'
    ]
  },
  {
    title: 'Travelr',
    site: 'https://travelr-fe.herokuapp.com/',
    repo: 'https://github.com/geet084/travelr',
    paragraphs: [
      'For my last solo project of Turing, I wanted to build an application that would illustrate time and distance in a unique way. Many people do not realize how far they are traveling every second, due to the Earth, Sun, Solar System and Galaxy all moving through space.',
      'I struggled a lot with Date and Time issues during the project, but was very pleased when I implemented moment.js. This gives an accurate representation of distance covered through space since a given date.',
      'As I continue to work on this, I would like to have a visual representation of distance pop up in correlation to the number. For example 238,000 miles and a picture of the moon.',
    ]
  },
  {
    title: 'Palette Picker',
    site: 'https://palette-picker-1810.herokuapp.com/',
    repo: 'https://github.com/geet084/fe-palette-picker',
    paragraphs: [
      'My first project where we developed an entire fullstack application from start to finish. Tasked with building a backend server along with using continuous integration for our API and building a frontend site that was simple and intuitive to use.',
      'For the server we used the standard CRUD endpoints as well as adding another queryable GET endpoint that would search for projects by name. We were also able to implement TDD during this portion of the project, to a high degree of success.',
      'On the frontend we sought to build a user interface that was easy to understand and use while also being a stylish recreation of the website Coolors.',
    ]
  },
  {
    title: 'Trapper Keeper',
    site: '',
    repo: 'https://github.com/geet084/trapper-keeper',
    paragraphs: [
      'There are many things that Google does right and for this project we were tasked with recreating some of that functionality. Being able to create a note along with items on each note, but to do so dynamically as needed.',
      'It was our first foray into building a backend server to store the data that would come from out frontend. It was also the first time that we were able to successfully implement TDD from start to finish on the server functionality.',
      'On the frontend, we sought to make the interface as simple and "Google-like" as possible and found it to be challenging at times. Simple and intuitive is not an easy experience to implement, but we felt like we ended up in a really good spot in the end.',
    ]
  }
]
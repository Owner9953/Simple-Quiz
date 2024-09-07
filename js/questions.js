// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ]
  },
  {
    numb: 2,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald"
    ]
  },
  {
    numb: 3,
    question: "What is the largest planet in our Solar System?",
    answer: "Jupiter",
    options: [
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn"
    ]
  },
  {
    numb: 4,
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
    options: [
      "Oxygen",
      "Gold",
      "Silver",
      "Iron"
    ]
  },
  {
    numb: 5,
    question: "What year did the Titanic sink?",
    answer: "1912",
    options: [
      "1905",
      "1912",
      "1918",
      "1923"
    ]
  },
  {
    numb: 6,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    options: [
      "Vincent van Gogh",
      "Claude Monet",
      "Leonardo da Vinci",
      "Pablo Picasso"
    ]
  },
  {
    numb: 7,
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
    options: [
      "Gold",
      "Iron",
      "Diamond",
      "Platinum"
    ]
  },
  {
    numb: 8,
    question: "In which continent is the Sahara Desert located?",
    answer: "Africa",
    options: [
      "Asia",
      "Africa",
      "Australia",
      "South America"
    ]
  },
  {
    numb: 9,
    question: "What is the chemical formula for water?",
    answer: "H2O",
    options: [
      "CO2",
      "H2O",
      "NaCl",
      "O2"
    ]
  },
  {
    numb: 10,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: [
      "Venus",
      "Mars",
      "Mercury",
      "Jupiter"
    ]
  },
  {
    numb: 11,
    question: "Who is known as the 'Father of Computers'?",
    answer: "Charles Babbage",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "John von Neumann",
      "Bill Gates"
    ]
  },
  {
    numb: 12,
    question: "What is the smallest prime number?",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 13,
    question: "What gas do plants absorb from the atmosphere for photosynthesis?",
    answer: "Carbon Dioxide",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Hydrogen"
    ]
  },
  {
    numb: 14,
    question: "What is the main ingredient in guacamole?",
    answer: "Avocado",
    options: [
      "Tomato",
      "Onion",
      "Avocado",
      "Pepper"
    ]
  },
  {
    numb: 15,
    question: "Which ocean is the largest by surface area?",
    answer: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ]
  },
  {
    numb: 16,
    question: "Who developed the theory of relativity?",
    answer: "Albert Einstein",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ]
  },
  {
    numb: 17,
    question: "In which country did the Industrial Revolution begin?",
    answer: "United Kingdom",
    options: [
      "France",
      "Germany",
      "United Kingdom",
      "United States"
    ]
  },
  {
    numb: 18,
    question: "What is the currency of Japan?",
    answer: "Yen",
    options: [
      "Won",
      "Yuan",
      "Yen",
      "Ringgit"
    ]
  },
  {
    numb: 19,
    question: "What is the chemical symbol for Gold?",
    answer: "Au",
    options: [
      "Ag",
      "Au",
      "Pb",
      "Fe"
    ]
  },
  {
    numb: 20,
    question: "Which artist is famous for cutting off his own ear?",
    answer: "Vincent van Gogh",
    options: [
      "Claude Monet",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Salvador Dalí"
    ]
  },
  {
    numb: 21,
    question: "Which planet is closest to the Sun?",
    answer: "Mercury",
    options: [
      "Venus",
      "Earth",
      "Mercury",
      "Mars"
    ]
  },
  {
    numb: 22,
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    options: [
      "Heart",
      "Liver",
      "Lungs",
      "Skin"
    ]
  },
  {
    numb: 23,
    question: "Who wrote '1984'?",
    answer: "George Orwell",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "Margaret Atwood"
    ]
  },
  {
    numb: 24,
    question: "What is the boiling point of water in Celsius?",
    answer: "100",
    options: [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  {
    numb: 25,
    question: "Which planet is known for its rings?",
    answer: "Saturn",
    options: [
      "Uranus",
      "Saturn",
      "Neptune",
      "Jupiter"
    ]
  },
  {
    numb: 26,
    question: "Who was the first President of the United States?",
    answer: "George Washington",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
      "John Adams"
    ]
  },
  {
    numb: 27,
    question: "Which metal is liquid at room temperature?",
    answer: "Mercury",
    options: [
      "Gold",
      "Silver",
      "Mercury",
      "Iron"
    ]
  },
  {
    numb: 28,
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      "Monaco",
      "San Marino",
      "Liechtenstein",
      "Vatican City"
    ]
  },
  {
    numb: 29,
    question: "Which element is represented by the symbol 'Na'?",
    answer: "Sodium",
    options: [
      "Sodium",
      "Neon",
      "Nickel",
      "Nitrogen"
    ]
  },
  {
    numb: 30,
    question: "Who invented the light bulb?",
    answer: "Thomas Edison",
    options: [
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Thomas Edison",
      "Michael Faraday"
    ]
  },
  {
    numb: 31,
    question: "What is the longest river in the world?",
    answer: "Nile",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ]
  },
  {
    numb: 32,
    question: "What is the capital of Canada?",
    answer: "Ottawa",
    options: [
      "Toronto",
      "Montreal",
      "Vancouver",
      "Ottawa"
    ]
  },
  {
    numb: 33,
    question: "Who is the Greek god of the sea?",
    answer: "Poseidon",
    options: [
      "Zeus",
      "Hades",
      "Poseidon",
      "Apollo"
    ]
  },
  {
    numb: 34,
    question: "Which organ in the human body produces insulin?",
    answer: "Pancreas",
    options: [
      "Liver",
      "Kidney",
      "Pancreas",
      "Heart"
    ]
  },
  {
    numb: 35,
    question: "What is the main language spoken in Brazil?",
    answer: "Portuguese",
    options: [
      "Spanish",
      "Portuguese",
      "French",
      "English"
    ]
  },
  {
    numb: 36,
    question: "Who was the first man to walk on the moon?",
    answer: "Neil Armstrong",
    options: [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Michael Collins"
    ]
  },
  {
    numb: 37,
    question: "Which city is known as the 'City of Angels'?",
    answer: "Los Angeles",
    options: [
      "New York",
      "San Francisco",
      "Los Angeles",
      "Chicago"
    ]
  },
  {
    numb: 38,
    question: "What is the most spoken language in the world?",
    answer: "Mandarin",
    options: [
      "English",
      "Spanish",
      "Mandarin",
      "Hindi"
    ]
  },
  {
    numb: 39,
    question: "Which animal is known for having a long neck?",
    answer: "Giraffe",
    options: [
      "Elephant",
      "Giraffe",
      "Hippopotamus",
      "Kangaroo"
    ]
  },
  {
    numb: 40,
    question: "In which year did World War I begin?",
    answer: "1914",
    options: [
      "1912",
      "1914",
      "1916",
      "1918"
    ]
  },
  {
    numb: 41,
    question: "What is the chemical symbol for Silver?",
    answer: "Ag",
    options: [
      "Au",
      "Ag",
      "Pb",
      "Fe"
    ]
  },
  {
    numb: 42,
    question: "Which is the largest continent by land area?",
    answer: "Asia",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ]
  },
  {
    numb: 43,
    question: "Which famous scientist developed the laws of motion and universal gravitation?",
    answer: "Isaac Newton",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Niels Bohr"
    ]
  },
  {
    numb: 44,
    question: "What is the largest species of shark?",
    answer: "Whale Shark",
    options: [
      "Great White Shark",
      "Hammerhead Shark",
      "Whale Shark",
      "Tiger Shark"
    ]
  },
  {
    numb: 45,
    question: "Which famous playwright wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: [
      "William Shakespeare",
      "Christopher Marlowe",
      "Ben Jonson",
      "John Milton"
    ]
  },
  {
    numb: 46,
    question: "What is the name of the galaxy that contains our Solar System?",
    answer: "Milky Way",
    options: [
      "Andromeda",
      "Milky Way",
      "Messier 87",
      "Triangulum"
    ]
  },
  {
    numb: 47,
    question: "Who is known as the 'King of Pop'?",
    answer: "Michael Jackson",
    options: [
      "Elvis Presley",
      "Michael Jackson",
      "Prince",
      "David Bowie"
    ]
  },
  {
    numb: 48,
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Canberra"
    ]
  },
  {
    numb: 49,
    question: "Which planet is known as the 'Giant Planet'?",
    answer: "Jupiter",
    options: [
      "Earth",
      "Saturn",
      "Uranus",
      "Jupiter"
    ]
  },
  {
    numb: 50,
    question: "What is the main source of energy for the Earth's climate system?",
    answer: "The Sun",
    options: [
      "The Moon",
      "Geothermal Heat",
      "The Sun",
      "Nuclear Reactions"
    ]
  },
  {
    numb: 51,
    question: "What is the largest mammal in the world?",
    answer: "Blue Whale",
    options: [
      "Elephant",
      "Blue Whale",
      "Giraffe",
      "Whale Shark"
    ]
  },
  {
    numb: 52,
    question: "Which country is famous for the Eiffel Tower?",
    answer: "France",
    options: [
      "France",
      "Italy",
      "Spain",
      "Germany"
    ]
  },
  {
    numb: 53,
    question: "Who wrote 'Pride and Prejudice'?",
    answer: "Jane Austen",
    options: [
      "Jane Austen",
      "Emily Brontë",
      "Charlotte Brontë",
      "Mary Shelley"
    ]
  },
  {
    numb: 54,
    question: "What is the chemical symbol for Helium?",
    answer: "He",
    options: [
      "H",
      "He",
      "Li",
      "Be"
    ]
  },
  {
    numb: 55,
    question: "Which ocean is the smallest?",
    answer: "Arctic Ocean",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ]
  },
  {
    numb: 56,
    question: "Who discovered penicillin?",
    answer: "Alexander Fleming",
    options: [
      "Louis Pasteur",
      "Alexander Fleming",
      "Joseph Lister",
      "Robert Koch"
    ]
  },
  {
    numb: 57,
    question: "Which planet is known as the 'Morning Star'?",
    answer: "Venus",
    options: [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ]
  },
  {
    numb: 58,
    question: "What is the main ingredient in traditional Japanese sushi?",
    answer: "Rice",
    options: [
      "Seaweed",
      "Fish",
      "Rice",
      "Vegetables"
    ]
  },
  {
    numb: 59,
    question: "What is the largest desert in the world?",
    answer: "Antarctic Desert",
    options: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Antarctic Desert"
    ]
  },
  {
    numb: 60,
    question: "Which scientist is known for his work on the theory of evolution?",
    answer: "Charles Darwin",
    options: [
      "Charles Darwin",
      "Gregor Mendel",
      "Louis Pasteur",
      "James Watson"
    ]
  },
  {
    numb: 61,
    question: "What is the currency of the United Kingdom?",
    answer: "Pound Sterling",
    options: [
      "Dollar",
      "Euro",
      "Pound Sterling",
      "Yen"
    ]
  },
  {
    numb: 62,
    question: "Who painted 'Starry Night'?",
    answer: "Vincent van Gogh",
    options: [
      "Vincent van Gogh",
      "Claude Monet",
      "Henri Matisse",
      "Gustav Klimt"
    ]
  },
  {
    numb: 63,
    question: "What is the most abundant gas in the Earth's atmosphere?",
    answer: "Nitrogen",
    options: [
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Argon"
    ]
  },
  {
    numb: 64,
    question: "Who was the first woman to win a Nobel Prize?",
    answer: "Marie Curie",
    options: [
      "Marie Curie",
      "Rosalind Franklin",
      "Ada Lovelace",
      "Jane Goodall"
    ]
  },
  {
    numb: 65,
    question: "Which planet is known for its prominent ring system?",
    answer: "Saturn",
    options: [
      "Jupiter",
      "Uranus",
      "Saturn",
      "Neptune"
    ]
  },
  {
    numb: 66,
    question: "What is the capital city of Germany?",
    answer: "Berlin",
    options: [
      "Munich",
      "Berlin",
      "Frankfurt",
      "Hamburg"
    ]
  },
  {
    numb: 67,
    question: "Who is known for the theory of classical conditioning?",
    answer: "Ivan Pavlov",
    options: [
      "B.F. Skinner",
      "Ivan Pavlov",
      "John Watson",
      "Sigmund Freud"
    ]
  },
  {
    numb: 68,
    question: "Which famous scientist developed the first successful polio vaccine?",
    answer: "Jonas Salk",
    options: [
      "Albert Sabin",
      "Jonas Salk",
      "Louis Pasteur",
      "Robert Koch"
    ]
  },
  {
    numb: 69,
    question: "What is the chemical symbol for Iron?",
    answer: "Fe",
    options: [
      "Fe",
      "Ir",
      "I",
      "In"
    ]
  },
  {
    numb: 70,
    question: "Which famous novel begins with the line 'Call me Ishmael'?",
    answer: "Moby Dick",
    options: [
      "Moby Dick",
      "To Kill a Mockingbird",
      "1984",
      "Pride and Prejudice"
    ]
  },
  {
    numb: 71,
    question: "Which country is the largest by population?",
    answer: "China",
    options: [
      "India",
      "China",
      "United States",
      "Brazil"
    ]
  },
  {
    numb: 72,
    question: "Who was the 16th President of the United States?",
    answer: "Abraham Lincoln",
    options: [
      "Abraham Lincoln",
      "Andrew Johnson",
      "Ulysses S. Grant",
      "Theodore Roosevelt"
    ]
  },
  {
    numb: 73,
    question: "What is the chemical symbol for Potassium?",
    answer: "K",
    options: [
      "P",
      "Po",
      "K",
      "Pt"
    ]
  },
  {
    numb: 74,
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
    options: [
      "K2",
      "Kangchenjunga",
      "Mount Everest",
      "Lhotse"
    ]
  },
  {
    numb: 75,
    question: "Which planet is known as the 'Giant Red Spot'?",
    answer: "Jupiter",
    options: [
      "Mars",
      "Saturn",
      "Jupiter",
      "Neptune"
    ]
  },
  {
    numb: 76,
    question: "What is the currency of South Korea?",
    answer: "Won",
    options: [
      "Won",
      "Yuan",
      "Ringgit",
      "Yen"
    ]
  },
  {
    numb: 77,
    question: "Who is known for the theory of general relativity?",
    answer: "Albert Einstein",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "James Clerk Maxwell"
    ]
  },
  {
    numb: 78,
    question: "Which novel is known for its opening line 'It was the best of times, it was the worst of times'?",
    answer: "A Tale of Two Cities",
    options: [
      "A Tale of Two Cities",
      "Great Expectations",
      "Oliver Twist",
      "David Copperfield"
    ]
  },
  {
    numb: 79,
    question: "What is the chemical symbol for Lead?",
    answer: "Pb",
    options: [
      "Pb",
      "Pt",
      "Li",
      "L"
    ]
  },
  {
    numb: 80,
    question: "Which U.S. state is known as the 'Sunshine State'?",
    answer: "Florida",
    options: [
      "California",
      "Texas",
      "Florida",
      "Hawaii"
    ]
  },
  {
    numb: 81,
    question: "What is the name of the large landmass located at the south of Europe?",
    answer: "Africa",
    options: [
      "Asia",
      "Africa",
      "Australia",
      "South America"
    ]
  },
  {
    numb: 82,
    question: "Which planet is known for its rings?",
    answer: "Saturn",
    options: [
      "Uranus",
      "Neptune",
      "Saturn",
      "Jupiter"
    ]
  },
  {
    numb: 83,
    question: "What is the largest island in the world?",
    answer: "Greenland",
    options: [
      "New Guinea",
      "Borneo",
      "Greenland",
      "Madagascar"
    ]
  },
  {
    numb: 84,
    question: "Which animal is known for its ability to change color?",
    answer: "Chameleon",
    options: [
      "Lizard",
      "Chameleon",
      "Octopus",
      "Seahorse"
    ]
  },
  {
    numb: 85,
    question: "What is the primary language spoken in Argentina?",
    answer: "Spanish",
    options: [
      "Portuguese",
      "Spanish",
      "French",
      "Italian"
    ]
  },
  {
    numb: 86,
    question: "Which city is known as the 'Windy City'?",
    answer: "Chicago",
    options: [
      "New York",
      "Los Angeles",
      "Chicago",
      "San Francisco"
    ]
  },
  {
    numb: 87,
    question: "What is the name of the fairy in Peter Pan?",
    answer: "Tinker Bell",
    options: [
      "Wendy",
      "Tinker Bell",
      "Snow White",
      "Cinderella"
    ]
  },
  {
    numb: 88,
    question: "Which famous explorer is credited with discovering America in 1492?",
    answer: "Christopher Columbus",
    options: [
      "Ferdinand Magellan",
      "Christopher Columbus",
      "Vasco da Gama",
      "Hernán Cortés"
    ]
  },
  {
    numb: 89,
    question: "What is the capital city of Italy?",
    answer: "Rome",
    options: [
      "Florence",
      "Milan",
      "Venice",
      "Rome"
    ]
  },
  {
    numb: 90,
    question: "Which ocean is the largest?",
    answer: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ]
  },
  {
    numb: 91,
    question: "Who wrote 'The Catcher in the Rye'?",
    answer: "J.D. Salinger",
    options: [
      "J.D. Salinger",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck"
    ]
  },
  {
    numb: 92,
    question: "What is the chemical symbol for Carbon?",
    answer: "C",
    options: [
      "C",
      "Ca",
      "Co",
      "Cr"
    ]
  },
  {
    numb: 93,
    question: "Which famous scientist is known for his theory of evolution by natural selection?",
    answer: "Charles Darwin",
    options: [
      "Charles Darwin",
      "Gregor Mendel",
      "Louis Pasteur",
      "James Watson"
    ]
  },
  {
    numb: 94,
    question: "What is the main language spoken in the United States?",
    answer: "English",
    options: [
      "English",
      "Spanish",
      "French",
      "German"
    ]
  },
  {
    numb: 95,
    question: "Which element is known for its use in making glass and ceramics?",
    answer: "Silicon",
    options: [
      "Silicon",
      "Iron",
      "Copper",
      "Aluminum"
    ]
  },
  {
    numb: 96,
    question: "What is the largest volcano in the world?",
    answer: "Mauna Loa",
    options: [
      "Mount Vesuvius",
      "Mount Fuji",
      "Kilauea",
      "Mauna Loa"
    ]
  },
  {
    numb: 97,
    question: "Which famous physicist developed the theory of quantum mechanics?",
    answer: "Max Planck",
    options: [
      "Max Planck",
      "Niels Bohr",
      "Werner Heisenberg",
      "Albert Einstein"
    ]
  },
  {
    numb: 98,
    question: "What is the capital city of Japan?",
    answer: "Tokyo",
    options: [
      "Kyoto",
      "Osaka",
      "Hiroshima",
      "Tokyo"
    ]
  },
  {
    numb: 99,
    question: "Which famous artist painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    options: [
      "Leonardo da Vinci",
      "Michelangelo",
      "Raphael",
      "Titian"
    ]
  },
  {
    numb: 100,
    question: "What is the largest river in the world by discharge?",
    answer: "Amazon River",
    options: [
      "Nile River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

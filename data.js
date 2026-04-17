// List of all the possible desserts and their recipes
const desserts = [
  {
    id: "cookie",
    name: "Chocolate Chip Cookies",
    tags: ["chocolate", "short", "low", "snack"],
    image: "images/cookie.jpg",
    ingredients: [
      "Flour",
      "Sugar",
      "Butter",
      "Chocolate chips"
    ],
    recipe: [
      "Mix butter and sugar together",
      "Add the flour",
      "Fold in the chocolate chips",
      "Bake for 12 min at 180°C"
    ]
  },
  {
    id: "brownie",
    name: "Classic Brownie",
    tags: ["chocolate", "medium", "low", "snack"],
    image: "images/brownie.jpg",
    ingredients: [
      "Chocolate",
      "Butter",
      "Sugar",
      "Eggs"
    ],
    recipe: [
      "Melt the chocolate",
      "Add the butter",
      "Mix with eggs and sugar",
      "Bake for 20 min"
    ]
  },
  {
    id: "tart",
    name: "Fruit Tart",
    tags: ["fruit", "long", "low", "dessert"],
    image: "images/tart.jpg",
    ingredients: [
      "Shortcrust pastry",
      "Fruits (apples, strawberries, etc.)",
      "Sugar",
      "Pastry cream (optional)"
    ],
    recipe: [
      "Roll out the dough",
      "Blind bake the pastry crust",
      "Add the cream or base layer",
      "Arrange the fruits on top",
      "Let it rest in the fridge"
    ]
  },
  {
    id: "fondant",
    name: "Chocolate Lava Cake",
    tags: ["chocolate", "short", "medium", "dessert"],
    image: "images/fondant.jpg",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    recipe: [
      "Preheat oven to 200°C",
      "Melt chocolate and butter together",
      "Whisk eggs and sugar",
      "Combine everything and add flour",
      "Bake for only 10 to 12 min to keep the center gooey"
    ]
  },
  {
    id: "mousse-fruits",
    name: "Raspberry Mousse",
    tags: ["fruit", "medium", "medium", "dessert"],
    image: "images/mousse.jpg",
    ingredients: ["Raspberries", "Heavy cream (30%)", "Icing sugar", "Gelatin (or agar-agar)"],
    recipe: [
      "Blend raspberries and strain the seeds",
      "Warm up a bit of coulis to dissolve the gelatin",
      "Whip the cream with sugar until stiff peaks form",
      "Gently fold the coulis into the whipped cream",
      "Let it set in the fridge for 4 hours"
    ]
  },
  {
    id: "fraisier",
    name: "Royal Strawberry Cake",
    tags: ["fruit", "long", "high", "birthday"],
    image: "images/fraisier.jpg",
    ingredients: ["Sponge cake", "Fresh strawberries", "Mousseline cream", "Marzipan"],
    recipe: [
      "Bake a light sponge cake",
      "Prepare a mousseline cream (pastry cream + butter)",
      "Soak the cake with syrup",
      "Assemble with halved strawberries around the edges",
      "Decorate with marzipan"
    ]
  },
  {
    id: "opera",
    name: "Opera Cake",
    tags: ["chocolate", "long", "high", "birthday"],
    image: "images/opera.jpg",
    ingredients: ["Joconde sponge", "Coffee syrup", "Coffee buttercream", "Chocolate ganache"],
    recipe: [
      "Bake the Joconde sponge (almond cake)",
      "Prepare the buttercream and ganache",
      "Layer the soaked sponge with the creams",
      "Finish with a chocolate mirror glaze",
      "Trim the edges for a clean finish"
    ]
  },
  {
    id: "salade-fruits",
    name: "Exotic Fruit Salad",
    tags: ["fruit", "short", "low", "dessert"],
    image: "images/fruits.jpg",
    ingredients: ["Mango", "Pineapple", "Passion fruit", "Fresh mint"],
    recipe: [
      "Dice all the fruits into small pieces",
      "Mix with passion fruit juice",
      "Chop the fresh mint",
      "Let it infuse for 30 min in the fridge before serving"
    ]
  }
];

// List all the questions asked in the quiz
const questions = [
    {
        question: "How much time do you have?",
        options: [
            {answer: "Less than 30 minutes", value: "short"},
            {answer: "Less than 1 hour", value: "medium"},
            {answer: "All the time in the world", value: "long"}
        ]
    },
    {
        question: "What kind of dessert are you craving?",
        options: [
            {answer: "Chocolatey", value: "chocolate"},
            {answer: "Fruity", value: "fruit"}
        ]
    },
    {
        question: "What is your baking skill level?",
        options: [
            {answer: "Baking... what?", value: "low"},
            {answer: "I can handle myself", value: "medium"},
            {answer: "I am the boss", value: "high"}
        ]
    },
    {
        question: "What is the occasion?",
        options: [
            {answer: "Celebrating a birthday", value: "birthday"},
            {answer: "A little sweet snack", value: "snack"},
            {answer: "A nice meal's dessert", value: "dessert"}
        ]
    }
];
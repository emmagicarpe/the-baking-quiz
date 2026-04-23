// List of all the possible desserts and their recipes
const desserts = [
  {
    id: "cookie",
    name: "Chocolate Chip Cookies",
    tags: ["chocolate", "short", "low", "snack", "warm", "crunchy"],
    image: "images/cookie.jpg",
    ingredients: ["Flour", "Sugar", "Butter", "Chocolate chips"],
    recipe: ["Mix butter and sugar", "Add flour", "Fold in chips", "Bake 12 min at 180°C"]
  },
  {
    id: "brownie",
    name: "Classic Brownie",
    tags: ["chocolate", "medium", "low", "snack", "warm", "soft"],
    image: "images/brownie.jpg",
    ingredients: ["Chocolate", "Butter", "Sugar", "Eggs"],
    recipe: ["Melt chocolate and butter", "Mix with eggs and sugar", "Bake for 20 min"]
  },
  {
    id: "tart",
    name: "Fruit Tart",
    tags: ["fruit", "long", "low", "dessert", "cold", "crunchy"],
    image: "images/tart.jpg",
    ingredients: ["Shortcrust pastry", "Fruits", "Pastry cream"],
    recipe: ["Bake pastry crust", "Add pastry cream", "Arrange fruits", "Chill"]
  },
  {
    id: "fondant",
    name: "Chocolate Lava Cake",
    tags: ["chocolate", "short", "medium", "dessert", "warm", "gooey"],
    image: "images/fondant.jpg",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    recipe: ["Melt chocolate/butter", "Mix eggs/sugar", "Add flour", "Bake 10 min"]
  },
  {
    id: "mousse-fruits",
    name: "Raspberry Mousse",
    tags: ["fruit", "medium", "medium", "dessert", "cold", "creamy"],
    image: "images/mousse.jpg",
    ingredients: ["Raspberries", "Heavy cream", "Sugar", "Gelatin"],
    recipe: ["Puree fruits", "Whip cream", "Fold together", "Chill 4 hours"]
  },
  {
    id: "fraisier",
    name: "Royal Strawberry Cake",
    tags: ["fruit", "long", "high", "birthday", "fancy", "creamy"],
    image: "images/fraisier.jpg",
    ingredients: ["Sponge cake", "Strawberries", "Mousseline cream"],
    recipe: ["Bake sponge", "Make cream", "Assemble with berries", "Decorate"]
  },
  {
    id: "opera",
    name: "Opera Cake",
    tags: ["chocolate", "long", "high", "birthday", "fancy", "soft"],
    image: "images/opera.jpg",
    ingredients: ["Joconde sponge", "Coffee buttercream", "Ganache"],
    recipe: ["Bake sponge", "Layer with coffee cream", "Add ganache", "Glaze"]
  },
  {
    id: "salade-fruits",
    name: "Exotic Fruit Salad",
    tags: ["fruit", "short", "low", "dessert", "cold", "crunchy"],
    image: "images/fruits.jpg",
    ingredients: ["Mango", "Pineapple", "Passion fruit", "Mint"],
    recipe: ["Dice fruits", "Mix with passion juice", "Add mint", "Infuse 30 min"]
  },
  {
    id: "muffins-myrtilles",
    name: "Blueberry Muffins",
    tags: ["fruit", "short", "low", "snack", "warm", "soft"],
    image: "images/muffins.jpg",
    ingredients: ["Flour", "Blueberries", "Yogurt", "Eggs"],
    recipe: ["Mix wet ingredients", "Fold in dry ingredients", "Add berries", "Bake 20 min"]
  },
  {
    id: "souffle-chocolat",
    name: "Chocolate Soufflé",
    tags: ["chocolate", "medium", "high", "dessert", "warm", "soft"],
    image: "images/souffle.jpg",
    ingredients: ["Dark chocolate", "Egg whites", "Sugar"],
    recipe: ["Melt chocolate", "Whip whites to peaks", "Fold gently", "Bake & serve"]
  },
  {
    id: "cheesecake-citron",
    name: "Lemon Cheesecake",
    tags: ["fruit", "long", "medium", "dessert", "cold", "creamy"],
    image: "images/cheesecake.jpg",
    ingredients: ["Cream cheese", "Biscuits", "Lemon", "Butter"],
    recipe: ["Make biscuit base", "Mix cream cheese/lemon", "Pour & chill 6h"]
  },
  {
    id: "macarons",
    name: "Parisian Macarons",
    tags: ["chocolate", "long", "high", "snack", "fancy", "soft"],
    image: "images/macarons.jpg",
    ingredients: ["Almond flour", "Icing sugar", "Egg whites"],
    recipe: ["Make meringue", "Fold with almond flour", "Pipe & rest", "Bake 150°C"]
  },
  {
    id: "eclairs",
    name: "Chocolate Eclairs",
    tags: ["chocolate", "long", "high", "dessert", "fancy", "creamy"],
    image: "images/eclairs.jpg",
    ingredients: ["Choux pastry", "Pastry cream", "Chocolate icing"],
    recipe: ["Bake choux shells", "Make pastry cream", "Fill shells", "Ice tops"]
  },
  {
    id: "crumble",
    name: "Apple & Berry Crumble",
    tags: ["fruit", "short", "low", "dessert", "warm", "crunchy"],
    image: "images/crumble.jpg",
    ingredients: ["Apples", "Berries", "Flour", "Butter"],
    recipe: ["Place fruits in dish", "Mix crumble topping", "Sprinkle", "Bake 30 min"]
  },
  {
    id: "tiramisu",
    name: "Classic Tiramisu",
    tags: ["chocolate", "medium", "medium", "dessert", "cold", "creamy"],
    image: "images/tiramisu.jpg",
    ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Cocoa"],
    recipe: ["Soak biscuits in coffee", "Layer with mascarpone", "Dust cocoa", "Chill"]
  },
  {
    id: "pavlova",
    name: "Summer Pavlova",
    tags: ["fruit", "long", "medium", "birthday", "fancy", "soft"],
    image: "images/pavlova.jpg",
    ingredients: ["Egg whites", "Sugar", "Cream", "Passion fruit"],
    recipe: ["Bake meringue low & slow", "Whip cream", "Top meringue", "Add fruits"]
  },
  {
    id: "pancakes",
    name: "Fluffy Pancakes",
    tags: ["fruit", "short", "low", "snack", "warm", "soft"],
    image: "images/pancakes.jpg",
    ingredients: ["Flour", "Milk", "Eggs", "Maple syrup"],
    recipe: ["Whisk batter", "Cook on hot griddle", "Flip when bubbly", "Serve warm"]
  },
  {
    id: "profiteroles",
    name: "Chocolate Profiteroles",
    tags: ["chocolate", "medium", "medium", "dessert", "warm", "creamy"],
    image: "images/profiteroles.jpg",
    ingredients: ["Choux pastry", "Ice cream", "Chocolate sauce"],
    recipe: ["Bake choux buns", "Fill with ice cream", "Make hot sauce", "Pour over"]
  },
  {
    id: "madeleines",
    name: "Honey Madeleines",
    tags: ["fruit", "short", "medium", "snack", "warm", "soft"],
    image: "images/madeleines.jpg",
    ingredients: ["Butter", "Flour", "Eggs", "Honey"],
    recipe: ["Melt butter", "Mix eggs/sugar/honey", "Fold flour", "Bake 10 min"]
  },
  {
    id: "trianon",
    name: "Royal Chocolate Crisp",
    tags: ["chocolate", "long", "high", "birthday", "fancy", "crunchy"],
    image: "images/trianon.jpg",
    ingredients: ["Almond dacquoise", "Praline", "Chocolate mousse"],
    recipe: ["Bake dacquoise", "Add praline layer", "Top with mousse", "Chill"]
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
    },
    {
        question: "What's the vibe of the moment?",
        options: [
            {answer: "Something cozy and comforting", value: "warm"},
            {answer: "Something fresh and light", value: "cold"},
            {answer: "Something fancy for a party", value: "fancy"}
        ]
    },
    {
        question: "What texture are you in the mood for?",
        options: [
            {answer: "I want some crunch!", value: "crunchy"},
            {answer: "Soft and pillowy", value: "soft"},
            {answer: "Smooth and creamy", value: "creamy"},
            {answer: "Gooey and melting", value: "gooey"}
        ]
    }
];
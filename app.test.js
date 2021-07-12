const {sequelize} = require("./db");
const {Restaurant,Menu, Meals,Beverages}= require("./app");

describe('Restaurant Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
    })
    test('can create a menu', async() => {
		const testRestaurant = await Restaurant.create({name : 'Zangaa'})
		expect(testRestaurant.name).toBe('Zangaa')
    })
		test('has Saleem as managert', async () => {
			const testRestaurant = await Restaurant.create({ manager : "Saleem"})
			expect(testRestaurant.manager).toBe("Saleem")
		})

		test('Menu has Breakfast', async () => {
			const testMenu = await Menu.create({ meals : "Breakfast"})
			expect(testMenu.meals).toBe("Breakfast");
		})
		test('Meals Chicken Pad Thai', async () => {
			const testMeals = await Meals.create({ name : "Chicken Pad Thai"})
			expect(testMeals.name).toBe("Chicken Pad Thai");
		})
		test('Beverages has Thai Iced Tea', async () => {
			const testBeverages = await Beverages.create({ name : "Thai Iced Tea"})
			expect(testBeverages.name).toBe("Thai Iced Tea");
		})

	
	})
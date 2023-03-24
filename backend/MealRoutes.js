const { Router } = require ('express');
const { getMeal,saveMeals } = require('./MealController')
const router = Router();

router.get('/',getMeal);
router.post('/saveMeals',saveMeals)

module.exports = router;
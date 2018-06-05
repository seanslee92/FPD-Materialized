const router = require('express').Router()
const { Drink, Brand, Category } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = Drink.findAll()
    res.json(data)
  } catch (error) {
    next(error)
  }
})

// router.get('/:drinkId', async (req, res, next) )

// CRUD

router.post('/', async (req, res, next) => {
  try {
    const newDrink = await Drink.create(req.body)
    res.json(newDrink)
  } catch (error) {
    next(error)
  }
})

router.put('/:drinkId', async (req, res, next) => {
  try {
    const data = Drink.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.send(data)
  } catch (error) {
    next(error)
  }
})

router.delete('/:drinkId', async (req, res, next) => {
  try {
    await Drink.destory({
      where: {
        id: req.params.drinkId
      }
    })
    res.send(`successfully destroyed ${req.params.drinkId}`)
  } catch (error) {
    next(error)
  }
})

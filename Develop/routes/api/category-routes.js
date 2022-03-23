const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
    Category.findAll({
      model: Product,
        // be sure to include its associated Products
      include: ['id', 'product_name', 'stock','price', 'category_id']
    }
    )
    res.status(200).json(CategoryData);
  } 
  // catch (err => {
  //   res.status(500).json(err)
  // });
);

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    Category.findOne(req.params.id, {
  // be sure to include its associated Products
      include: ['id', 'product_name', 'stock','price', 'category_id']
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Categories Not found' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  
    // const CategoryData = await
     Category.create(req.body);
    res.status(200).json(CategoryData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    // const CategoryData = await
   Category.Update({
      where: {
        id: req.params.id
      }
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Categories Not found' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    // const CategoryData = await 
   Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Categories Not found' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

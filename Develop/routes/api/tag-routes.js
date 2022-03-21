const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagData = await Tag.findAll({
      model: Product,
        // be sure to include its associated Products
      include: ['product_name', 'stock','price', 'category_id']
    }
    );
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {
    const TagData = await Tag.findOne(req.params.id, {
  // be sure to include its associated Products
      include: ['product_name', 'stock','price', 'category_id']
    });

    if (!TagData) {
      res.status(404).json({ message: 'Tag Not found' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const TagData = await Tag.create(req.body);
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const TagData = await Tag.Update({
      where: {
        id: req.params.id
      }
    });

    if (!TagData) {
      res.status(404).json({ message: 'Tag Not found' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!TagData) {
      res.status(404).json({ message: 'Tag Not found' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



class CategoryResource {
  constructor() {
    this.base = {}
  }

  buildBase() {
    this.base['include'] = [
        {
          id: 'categoryId',
          type: 'category',
          attributes: ['name']
        }
      ]
    return this.base
    };
};

console.log(new CategoryResource().buildBase());

module.exports = CategoryResource;

using Business.Abstract;
using Business.Utilities.Contants;
using Business.Utilities.Results.Abstract;
using Business.Utilities.Results.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {
        IProductDal _productDal;
        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public IResult Add(Product entity)
        {
            _productDal.Add(entity);
            return new SuccessResult();
        }

        public IResult Delete(Product entity)
        {

            _productDal.Delete(entity);
            return new SuccessResult();
        }

        public IDataResult<Product> Get(int id)
        {
            var result=_productDal.Get(product => product.ProductId == id);
           return  new SuccessDataResult<Product>(result, Messages.ProductFound);
        }

        public IDataResult<List<Product>> GetAll()

        {
            var result = _productDal.GetAllWithFilter();
            return new SuccessDataResult<List<Product>>(result, Messages.ProductsListed);
        }

        public IResult Update(Product entity)
        {
            _productDal.Update(entity);
            return new SuccessResult();
        }
    }
}

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
        public IDataResult<Product> Get(int productId)
        {
            var result=_productDal.Get(product => product.ProductId == productId);
           return  new SuccessDataResult<Product>(result, Messages.ProductFound);
        }

        public IDataResult<List<Product>> GetAll()

        {
            var result = _productDal.GetAllWithFilter();
            return new SuccessDataResult<List<Product>>(result, Messages.ProductsListed);
        }
    }
}

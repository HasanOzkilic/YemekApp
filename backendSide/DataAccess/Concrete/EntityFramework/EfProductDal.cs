﻿using DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dto;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
   public class EfProductDal : EfEntityRepositoryBase<Product, SqlContext>, IProductDal
    {
        public List<ProductDetailDto> GetProductDetails()
        {
          throw new  Exception();
        }
    }
}


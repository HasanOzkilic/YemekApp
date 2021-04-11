using Business.Abstract;
using Business.Utilities.Results.Abstract;
using Business.Utilities.Results.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class CategoryManager : ICategoryService
    {
       
        ICategoryDal _categoryDal;
        public CategoryManager(ICategoryDal categoryDal)
        {
            _categoryDal = categoryDal;
        }

        public IResult Add(Category entity)
        {
            _categoryDal.Add(entity);
            return new SuccessResult();
        }

        public IResult Delete(Category entity)
        {
            _categoryDal.Delete(entity);
            return new SuccessResult();
        }

        public IDataResult<Category> Get(int id)
        {
            var result=_categoryDal.Get(c => c.CategoryId ==id);
            return new SuccessDataResult<Category>(result);
           
        }

        public IDataResult<List<Category>> GetAll()
        {
            var result = _categoryDal.GetAllWithFilter();
            return new SuccessDataResult<List<Category>>(result);
        }

        public IResult Update(Category entity)
        {
            _categoryDal.Update(entity);
            return new SuccessResult();
        }
    }
}

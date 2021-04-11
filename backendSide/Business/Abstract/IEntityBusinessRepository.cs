using Business.Utilities.Results.Abstract;
using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
   public  interface IEntityBusinessRepository<TEntity>
        where TEntity : class , IEntity, new()
    {
        IDataResult<List<TEntity>> GetAll();
        IDataResult<TEntity> Get(int id);
        IResult Add(TEntity entity);
        IResult Delete(TEntity entity);
        IResult Update(TEntity entity);
    }
}

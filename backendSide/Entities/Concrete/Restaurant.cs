using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
   public  class Restaurant:IEntity
    {
        public int RestaurantId { get; set; }
        public string RestaurantName { get; set; }
        public string RestaurantLocation { get; set; }
    }
}

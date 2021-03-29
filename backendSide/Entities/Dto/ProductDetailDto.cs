using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dto
{
    public class ProductDetailDto:IDto
    {
        public int ProductName { get; set; }
        public string CategoryName { get; set; }
        public int RestaurantName { get; set; }
    }
}

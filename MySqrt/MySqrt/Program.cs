using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MySqrt
{
    class Program
    {
        /// <summary>
        /// Implement int sqrt(int x).
        /// Compute and return the square root of x.
        /// x is guaranteed to be a non-negative integer.
        /// </summary>
        /// <param name="x"></param>
        /// <returns></returns>
        public int MySqrt(int x)
        {
            return (int)Math.Sqrt(x);
        }

        static void Main(string[] args)
        {
            Console.WriteLine(new Program().MySqrt(4)); // 2
            Console.WriteLine(new Program().MySqrt(8)); // 2
            Console.ReadLine();
        }
    }
}

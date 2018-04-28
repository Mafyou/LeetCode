using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubArray
{
    class Program
    {
        public void SubArrayBruteForce(int [] param)
        {
            int len = param.Length;
            int maxSumSoFar = 0;
            int maxISoFar = 0;
            int maxJSoFar = -1;
            for (int firstIndex = 0; firstIndex < len; firstIndex++)
            {
                int sum = 0;
                for (int secondIndex = firstIndex; secondIndex < len; secondIndex++)
                {
                    sum += param[secondIndex]; //sum is that of param[i..j]
                    if (sum > maxSumSoFar)
                    {
                        maxSumSoFar = sum;
                        maxISoFar = firstIndex;
                        maxJSoFar = secondIndex;
                    }
                }
            }
            Console.WriteLine(maxSumSoFar);
        }
        static void Main(string[] args)
        {
            new Program().SubArrayBruteForce(new int[] { -2, 1, -3, 4, -1, 2, 1, -5, 4 });
            Console.ReadLine();
        }
    }
}

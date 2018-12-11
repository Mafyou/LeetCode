using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindComplement
{
    using System.Collections;

    class Program
    {
        /*
         Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
           
           Note:
           The given integer is guaranteed to fit within the range of a 32-bit signed integer.
           You could assume no leading zero bit in the integer’s binary representation.
           Example 1:
           Input: 5
           Output: 2
           Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
           Example 2:
           Input: 1
           Output: 0
           Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
         */
        static void Main(string[] args)
        {
            int num = 5;

            int res = Convert.ToInt32(new string(Convert.ToString(num, 2).Select(x => x == '1' ? '0' : '1').ToArray()), 2);
            Console.WriteLine(res);
            Console.ReadLine();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StrStr
{
    class Program
    {
        /// <summary>
        /// Implement strStr()..
        /// </summary>
        /// <param name="haystack"></param>
        /// <param name="needle"></param>
        /// <returns>Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.</returns>
        public int StrStr(string haystack, string needle)
        {
            int result = -1;

            if (string.IsNullOrEmpty(needle)) return 0;
            result = haystack.IndexOf(needle);
            return result;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(new Program().StrStr("hello", "ll")); // 2
            Console.WriteLine(new Program().StrStr("aaaaa", "bba")); // -1
            Console.ReadLine();
        }
    }
}

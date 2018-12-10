using System;

namespace ShiftMe
{
    class Program
    {
        /// <summary>
        /// We are given two strings, A and B.
        /// A shift on A consists of taking string A and moving the leftmost character to the rightmost position.For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.Return True if and only if A can become B after some number of shifts on A.
        /// </summary>
        /// <param name="A">Original string</param>
        /// <param name="B">Shifted string</param>
        /// <returns></returns>
        public bool RotateString(string A, string B)
        {
            bool result = false;
            if (A.Length > 100 || B.Length > 100) return result;

            int index = 0;
            if (string.IsNullOrEmpty(A) && string.IsNullOrEmpty(B)) result = true;
            while (index < A.Length)
            {
                if (A == B) return true;
                A = A.Substring(1, A.Length - 1) + A.Substring(0, 1);
                index++;
            }
            return result;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(new Program().RotateString("abcde", "bcdea"));
            Console.WriteLine(new Program().RotateString("", ""));
            Console.ReadLine();
        }
    }
}

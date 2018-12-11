using System;

namespace LeetCode
{
    class Program
    {
        static void Main(string[] args)
        {
            // [4,2,5,7] = [4,5,2,7]
            int[] A = {4, 2, 5, 7};
            //int[] A = {3, 1, 4, 2};
            int[] answer = new int[A.Length];

            int page = 0;
            for (int i = 0; i < A.Length; i++)
            {
                if ((A[i] % 2) == 0)
                {
                    answer[page] = A[i];
                    page += 2;
                }
            }

            page = 1;
            for (int i = 0; i < A.Length; i++)
            {
                if ((A[i] % 2) == 1)
                {
                    answer[page] = A[i];
                    page += 2;
                }
            }

            foreach (int t in answer)
            {
                Console.WriteLine(t);
            }

            Console.Read();
        }
    }
}
using System;

namespace SortArrayByParity
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] A = {3, 1, 2, 4};
            int N = A.Length;
            int[] ans = new int[N];

            int ansIndex = 0;
            for (int index = 0; index < N; index++)
            {
                if ((A[index] % 2) == 0)
                {
                    ans[ansIndex] = A[index];
                    ansIndex++;
                }
            }

            for (int index = 0; index < N; index++)
            {
                if ((A[index] % 2) == 1)
                {
                    ans[ansIndex] = A[index];
                    ansIndex++;
                }
            }

            foreach (int x in ans)
            {
                Console.Write(x);
                Console.Write(",");
            }

            Console.ReadLine();
        }
    }
}
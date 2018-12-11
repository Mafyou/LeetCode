using System;

namespace ShortestToChar
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * Input: S = "loveleetcode", C = 'e'
               Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
             */
            //string S = "loveleetcode";
            //char C = 'e';
            //string S = "aaba";
            //char C = 'b';
            string S = "baaa";
            char C = 'b';
            int[] answer = new int[S.Length];
            for (int index = 0; index < S.Length; index++)
            {
                for (int subIndex = index, val = 0; subIndex < S.Length; subIndex++, val++)
                {
                    if (S[subIndex] == C)
                    {
                        answer[index] = val;
                        break;
                    }
                }
            }

            for (int index = S.Length - 1; index > 0;  index--)
            {
                for (int subIndex = index, val = 0; subIndex >= 0; subIndex--, val++)
                {
                    if (S[subIndex] == C)
                    {
                        if (answer[index] != 0)
                        {
                            answer[index] = Math.Min(val, answer[index]);
                        }
                        else
                        {
                            answer[index] = val;
                        }
                        break;
                    }
                }
            }

            foreach (int a in answer)
            {
                Console.Write(a);
                Console.Write(",");
            }
            Console.ReadLine();
        }
    }
}
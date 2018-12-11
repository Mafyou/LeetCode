namespace UncommonFromSentences
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    class Program
    {
        static void Main(string[] args)
        {
            string A = "this apple is sweet";
            string B = "this apple is sour";

            string[] ASplit = A.Split(' ');
            string[] BSplit = B.Split(' ');

            List<string> answer = new List<string>(ASplit.Length > BSplit.Length ? ASplit.Length : BSplit.Length);
            answer.AddRange(ASplit.Where(itemA => !BSplit.Contains(itemA)));
            answer.AddRange(BSplit.Where(itemB => !ASplit.Contains(itemB)));


            foreach (string s in answer)
            {
                Console.Write(s + ",");
            }

            Console.ReadLine();
        }
    }
}
namespace FizzBuzz
{
    using System;
    using System.Collections.Generic;

    class Program
    {
        static void Main(string[] args)
        {
            int n = 15;
            
            IList<string> answer = new List<string>(n);
            for (int index = 1; index <= n; index++)
            {
                bool flag = false;
                if (index % 3 == 0 && index % 5 == 0)
                {
                    flag = true;
                    answer.Add("FizzBuzz");
                } else if (index % 5 == 0)
                {
                    flag = true;
                    answer.Add("Buzz");
                } else if (index % 3 == 0)
                {
                    flag = true;
                    answer.Add("Fizz");
                }

                if (!flag) answer.Add(index.ToString());
            }

            foreach (string s in answer)
            {
                Console.WriteLine(s);
            }
            Console.ReadLine();
        }
    }
}
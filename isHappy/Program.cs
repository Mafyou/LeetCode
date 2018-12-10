using System;
using System.Collections.Generic;

namespace isHappy
{
    class Program
    {
        private int Calc(int n)
        {
            string num = n.ToString();
            int len = num.Length;
            List<char> buffer = new List<char>(num.Length);
            double res = 0;
            for (int i = 0; i < len; i += 1)
            {
                buffer.Add(num[i]);
            }
            for (int i = 0; i < buffer.Count; i++)
            {
                res += Math.Pow(double.Parse(buffer[i].ToString()), 2.0);
            }
            return (int)res;
        }
        public bool IsHappy(int n)
        {
            List<int> looped = new List<int>();
            int res = Calc(n);
            while (res != 1)
            {
                Console.WriteLine(res);
                res = Calc(res);
                if (looped.Contains(res)) break;
                else looped.Add(res);
            }
            return res == 1;
        }

        static void Main(string[] args)
        {
            Program p = new Program();
            Console.WriteLine(p.IsHappy(19));
            Console.ReadLine();
        }
    }
}
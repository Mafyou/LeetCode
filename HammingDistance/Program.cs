using System;

namespace HammingDistance
{
    using System.Collections;

    class Program
    {
        public int HammingDistance(int x, int y)
        {
            int res = 0;
            string xBits = Convert.ToString(x, 2);
            string yBits = Convert.ToString(y, 2);

            BitArray xBa = new BitArray(new int[] { x });
            BitArray yBa = new BitArray(new int[] { y });
            string xS = string.Empty;
            string yS = string.Empty;
            foreach (bool xb in xBa) xS += xb ? 0 : 1;
            foreach (bool yb in yBa) yS += yb ? 0 : 1;

            for (int i = 0; i < xS.Length; i++)
            {
                if (xS[i] != yS[i]) res++;
            }

            return res;
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            Console.WriteLine(p.HammingDistance(1, 4));
            Console.ReadLine();
        }
    }
}
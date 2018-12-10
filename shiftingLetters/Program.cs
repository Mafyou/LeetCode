using System;
using System.Text;

namespace shiftingLetters
{
    class Program
    {
        public String shiftingLetters(String s, int[] shifts)
        {
            char[] arr = s.ToCharArray();
            StringBuilder sb = new StringBuilder();

            for (int i = shifts.Length - 1; i > 0; i--)
            {
                shifts[i] %= 26;
                shifts[i - 1] %= 26;
                shifts[i - 1] += shifts[i];
            }
            for (int i = 0; i < shifts.Length; i++)
            {
                int cnt = shifts[i];
                arr[i] = (char)((arr[i] - 'a' + cnt) % 26 + 'a');
                sb.Append(arr[i]);
            }

            return sb.ToString();
        }

        static void Main(string[] args)
        {
            Console.WriteLine(new Program().shiftingLetters("abc", new int[] { 3, 5, 9 }));
            Console.WriteLine("Hello World!");
            Console.ReadKey();
        }
    }
}

using System;
using System.Linq;

namespace NextGreatestLetter
{
    class Program
    {
        public char NextGreatestLetter(char[] letters, char target)
        {
            char res = 'a';
            for (int indexLetter = 0; indexLetter < letters.Length; indexLetter++)
            {
                char currentLetter = letters[indexLetter];
                if (indexLetter == 0 && currentLetter == target) continue;
                if (currentLetter > target)
                {
                    res = currentLetter;
                    break;
                }
                if (currentLetter == letters[letters.Length - 1])
                {
                    res = letters[0];
                    break;
                }
            }
            return res;
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            //char res = p.NextGreatestLetter(new char[] { 'c', 'f', 'j' }, 'a'); // c
            //char res = p.NextGreatestLetter(new char[] { 'c', 'f', 'j' }, 'c'); // f
            //char res = p.NextGreatestLetter(new char[] { 'c', 'f', 'j' }, 'd'); // f
            //char res = p.NextGreatestLetter(new char[] { 'c', 'f', 'j'}, 'g'); // j
            //char res = p.NextGreatestLetter(new char[] { 'c', 'f', 'j'}, 'j'); // c
            char res = p.NextGreatestLetter(new char[] { 'c', 'f', 'j' }, 'k'); // c
            Console.WriteLine(res);
            Console.ReadLine();
        }
    }
}
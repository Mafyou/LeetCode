using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UniqueMorseRepresentations
{
    class Program
    {
        /*
         * Example:
           Input: words = ["gin", "zen", "gig", "msg"]
           Output: 2
           Explanation: 
           The transformation of each word is:
           "gin" -> "--...-."
           "zen" -> "--...-."
           "gig" -> "--...--."
           "msg" -> "--...--."
           
           There are 2 different transformations, "--...-." and "--...--.".
         */
        static void Main(string[] args)
        {
            string[] words = { "gin", "zen", "gig", "msg" };
            char[] Alphabet =
            {
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u', 'v','w','x','y','z'
            };
            string[] MorseAlphabet =
            {
                ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-",
                "...-", ".--", "-..-", "-.--", "--.."
            };
            int N = words.Length;
            string[] transformations = new string[N];
            for (int index = 0; index < N; index++)
            {
                string currentWord = words[index];
                int lenWord = currentWord.Length;
                for (int indexChar = 0; indexChar < lenWord; indexChar++)
                {
                    char currentLetter = currentWord[indexChar];
                    int letterIndex = Array.IndexOf(Alphabet, currentLetter);
                    string morseChar = MorseAlphabet[letterIndex];
                    transformations[index] += morseChar;
                }
            }

            transformations = transformations.Distinct().ToArray();
            Console.WriteLine(transformations.Length);
            Console.ReadLine();
        }
    }
}

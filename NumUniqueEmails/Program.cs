using System;
using System.Linq;

namespace NumUniqueEmails
{
    using System.Collections.Generic;

    class Program
    {
        /*
         * Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
           Output: 2
           Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
         */
        static void Main(string[] args)
        {
            string[] emails = {"test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"};
            int N = emails.Length;
            string[] verifiedEmails = new string[N];

            for (int indexEmails = 0; indexEmails < N; indexEmails++)
            {
                string currentEmail = emails[indexEmails];
                int len = currentEmail.IndexOf('@');
                string verifiedName = string.Empty;
                string rest = currentEmail.Substring(len);
                string name = currentEmail.Substring(0, len);
                for (int indexChar = 0; indexChar < name.Length; indexChar++)
                {
                    char currentChar = name[indexChar];
                    if (currentChar == '.')
                    {
                        name = name.Remove(indexChar, 1);
                        verifiedName = name;
                        indexChar--;
                    }
                    else if (currentChar == '+')
                    {
                        verifiedName = name.Remove(indexChar);
                        break;
                    }
                }

                verifiedEmails[indexEmails] = verifiedName + rest;
            }

            IList<string> distinctMails = verifiedEmails.Distinct().ToList();
            int rts = distinctMails.Count;
            foreach (string verifiedEmail in distinctMails)
            {
                Console.WriteLine(verifiedEmail);
            }

            Console.ReadLine();
        }
    }
}
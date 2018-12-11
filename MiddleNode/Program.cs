using System;

namespace MiddleNode
{
    class Program
    {
        static void Main(string[] args)
        {
            ListNode head = new ListNode(1)
                            {
                                next = new ListNode(2)
                                       {
                                           next = new ListNode(3)
                                                  {
                                                      next = new ListNode(4)
                                                             {
                                                                 next = new ListNode(5)
                                                                        {
                                                                            next
                                                                                = new
                                                                                    ListNode(6)
                                                                        }
                                                             }
                                                  }
                                       }
                            };

            int n = 0;
            ListNode testHead = head;
            while (testHead != null)
            {
                n++;
                testHead = testHead.next;
            }

            ListNode res = null;
            int m = n / 2;
            n = 0;
            while (head != null)
            {
                if (m == n) res = head;
                n++;
                head = head.next;
            }

            while (res != null)
            {
                Console.WriteLine(res.val);
                res = res.next;
            }

            Console.ReadLine();
        }
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2)
{
    if (l1 == null) 
    {
        return l2
    }
    if (l2 == null)
    {
        return l1
    }
    const head = new ListNode(null);
 
   let  current = head
    while (l1 !== null && l2 !== null) {   
      
        if (l1.val > l2.val) {
            const n2 = new ListNode(l2.val) //to create new node with new value
             current.next = n2;
            current = n2;
           l2=l2.next;
        } else if (l1.val < l2.val) {
            const n1 = new ListNode(l1.val)
            current.next = n1
            current = n1
            l1 = l1.next                   
       
    }
    while(l1!==null)
    {
        let n1 = new Listnode(l1.value);
        current.next = n1;
        n1 = current;
        l1 = l1.next;
    }
        while(l2!==null)
            {
                let n2 = new Listnode(l2.value);
                current.next = n2;
                current = n2;
                l2 = l2.next;
            }
    return head.next;
        
    }    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
console.log("hello")
n = 3
s = "A"
d = "C"
a = "B"
var count = 0;
function hanoi(n,source,destn,aux){
    if(n==1){
        count++;
        document.write(count);
        document.write(`moving disk 1 from ${source} to ${destn}`)
        document. write("<br>");
        return
    }
    hanoi(n-1,source,aux,destn);
    count++
    document.write(count);
    document.write(`moving disk ${n} from ${source} to ${destn}`)
    document. write("<br>");
    hanoi(n-1,aux,destn,source);

}

hanoi(n,s,d,a);

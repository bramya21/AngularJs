let q="7+2*4"
let result=""
let num;
for(let i=0;i<q.length-1;i++){
if(q[i]=='*' ){
result=`(${q[i-1]},${q[i+1]})`
num = eval(`${q[i-1]}*${q[i+1]}`)
q=q.slice(0,i-1)+q.slice(i+2)+eval(`${q[i-1]}*${q[i+1]}`);
}
}

for(let i=0;i<q.length-1;i++){
if(q[i]=='+'){
result=(`(${q[i-1]})=>`+result+`=>`+eval(`${q[i-1]}+${num}`))
}
}
console.log(result)
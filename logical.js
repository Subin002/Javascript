//write a js function to find strings in a given list, starting with given prefix. 
let arr=["cat","car","fear","center"]
let prefix='ca'
for(let i=0;i<arr.length;i++){
    let match=true
    for(let j=0; j<prefix.length;j++){
        if(arr[i][j]!==prefix[j]){
            match=false
            break
        }   
    }
    if(match){
        console.log(arr[i]);
    }else{
        console.log("No match");
    }
}

//Check if 2 strings are anagrams.
let a= 'are'
let b= 'ear'
for(let i=0; i<=a.length; i++){
   for( let j=0; j<=b.length; j++){
    if(a[i],b[j]===b[j]){
        console.log(`${a},${b} is anagram`);
        break
    }else{
        console.log(`${a}${b} is not anagram`);
        break
    }
   }
}

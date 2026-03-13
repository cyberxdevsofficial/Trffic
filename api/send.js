export default async function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({error:"Method not allowed"})
}

const {url, count} = req.body

let total = parseInt(count)

for(let i=0;i<total;i++){

fetch(url,{
method:"GET",
headers:{
"User-Agent":"Mozilla/5.0",
"Cache-Control":"no-cache",
"Pragma":"no-cache"
}
}).catch(()=>{})

}

res.json({
message:`${total} visits sent`
})

}

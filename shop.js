mobiles=[];
function add(){
event.preventDefault();
const name=document.getElementById("name").value.trim();
const model=document.getElementById("model").value.trim();
const price=document.getElementById("price").value.trim();
const url=document.getElementById("url").value.trim();
if(name!="" && model!="" && price!="" && url!=""){
if(name>="a" && name<="z" || name>="A" && name<="Z"){
if(name.length>="10" && name.length<="30"){
if(model>="a" && model<="z" || model>="A" && model<="Z"){
if(model.length>="10" && model.length<="30"){
if(price>="0" && price<="9"){
if(price>=3000 && price<=50000){
if(url.startsWith("https://")&&url.length>"50"){
mobiles.push({name,model,price,url});
console.log(mobiles);
listProduct();
}
else
{
alert("please enter valid url only");
}
}
else
{
alert("enter in between 3000rs to 50000rs only allowed in price field");
}}
else
{
alert("characters and symbols are not allowed in price field. so please enter numbers only");
}}

else
{
alert("10 to 30 characters only allowed in spec field");
}}
else
{
alert("symbols and numbers are not allowed in spec field. so enter characters only");
}}
else
{
alert("10 to 30 characters only allowed in name field");
}}
else
{
alert("symbols and numbers are not allowed in name field. so enter characters only");
}
document.getElementById("name").value="";
document.getElementById("model").value="";
document.getElementById("price").value="";
document.getElementById("url").value="";
}
}
function listProduct(){
const productName=document.getElementById("product-name");
productName.innerHTML="";
mobiles.forEach((mobile,index)=>{
const nameProduct=document.createElement("div");
nameProduct.classList="mobile";
nameProduct.innerHTML=`
<center><img src=${mobile.url}><br>
<h1>${mobile.name}</h1>
<h2>${mobile.model}</h2>
<h1>price:${" "+mobile.price+"/-"}</h1>
<button class="x" onclick="editItem(${index})">EDIT</button>
<button class="x" onclick="deleteItem(${index})">DELETE</button>
<br><br></center>
`;
productName.appendChild(nameProduct);
});
}
function editItem(index){
document.getElementById("name").value=mobiles[index].name;
document.getElementById("model").value=mobiles[index].model;
document.getElementById("price").value=mobiles[index].price;
document.getElementById("url").value=mobiles[index].url;
document.getElementById("indexvalue").value=index;
}
function deleteItem(index){
var confirmation=confirm("are you sure want to delete this product");
if(confirm){
mobiles.splice(index,1);
listProduct();
}}
function saveitem(){
var saveindex=document.getElementById("indexvalue").value
updateProduct(saveindex);
document.getElementById("name").value="";
document.getElementById("model").value="";
document.getElementById("price").value="";
document.getElementById("url").value="";
}
function updateProduct(index){
mobiles[index].name=document.getElementById("name").value;
mobiles[index].model=document.getElementById("model").value;
mobiles[index].price=document.getElementById("price").value;
mobiles[index].url=document.getElementById("url").value;
listProduct();
}
function cancel(){
document.getElementById("name").value="";
document.getElementById("model").value="";
document.getElementById("price").value="";
document.getElementById("url").value="";
}

mobiles=[{name:"Realme 12 pro 5G",model:"12GB Ram and 256GB storage ",price:"33,999",url:"https://m.media-amazon.com/images/I/51cWjoblvVL._SY300_SX300_.jpg"},{name:"vivo v29 5G",model:"12Gb Ram and 128GB storage",price:"31,000",url:"https://m.media-amazon.com/images/I/31KySzP5Y+L._SY300_SX300_.jpg"},{name:"oppo a59 5G",model:"6GB Ram and 128GB storage",price:"15,999",url:"https://m.media-amazon.com/images/I/41LbvHzSmjL._SX300_SY300_QL70_FMwebp_.jpg"}];
listProduct();
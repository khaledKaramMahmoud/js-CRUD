var productNameInp=document.getElementById('productName');
var productPriceInp=document.getElementById('productPrice');
var productCategoryInp=document.getElementById('productCategory');
var productDescInp=document.getElementById('productDesc');

var productsContainer=[]
function addProduct(){
    var product={
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value
    }
    productsContainer.push(product);
    // console.log(productsContainer);
    localStorage.setItem('ourProducts', JSON.stringify(productsContainer))
    displayProducts()
    clearForm()
}

function clearForm(){
    productNameInp.value="";
    productPriceInp.value="";
    productCategoryInp.value="";
    productDescInp.value="";
}

function displayProducts(){
    var productRow=``
    for(var i=0; i<productsContainer.length; i++){
        productRow+=`
        <tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button class="btn btn-outline-info">update</button></td>
        <td><button class="btn btn-outline-danger">delete</button></td>
    </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=productRow
}
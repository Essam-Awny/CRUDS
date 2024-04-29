// ---------------------------------------------------------Part One-------------------------------------------------
// var productName = document.getElementById('productName');
// var productprice = document.getElementById('productprice');
// var productcategory = document.getElementById('productcategory');
// var productdes = document.getElementById('productdes');

// var productContainer = [];

// function addProduct (){
//    var product = {
//     name:productName.value,
//     price:productprice.value,
//     category:productcategory.value,
//     desc:productdes.value
//    }
//    productContainer.push(product)
//    console.log(productContainer);
// displayProduct()
// }
// // ---------------------------------------------------------Part Two--------------------------------------------------------
// function displayProduct(){
//     var cartona = '';
//     for(var i = 0; i<productContainer.length;i++){

//         cartona+= ` <tr>
//         <td>Toshipa</td>
//         <td>4000</td>
//         <td>TV</td>
//         <td>Good</td>
//         <td><button class="btn btn-info">update</button></td>
//         <td><button class="btn btn-danger">delete</button></td>
//     </tr>`
//     }
//     console.log(cartona);
//     document.getElementById('tableBody').innerHTML = cartona;
// }
// console.log(displayProduct());
// مش عارف هننادي علي الفنكشن دي فين ؟؟؟

//  ونكتب فيه اخر 4 سطور addproduct عايزين نمسح الداتا تلقائي بعد ادخال البيانات هنروح للفنكشن 

// function addProduct (){
//     var product = {
//      name:productName.value,
//      price:productprice.value,
//      category:productcategory.value,
//      desc:productdes.value
//     }
//     productContainer.push(product)
//     console.log(productContainer);
    
//     productName.value = '';
//     productprice.value = '';
//     productcategory.value = '';
//     productdes.value = '';
//     clearForm()
//  }
// بس الصح نخلي كل فنكشن تعمل حاجة واحدة بس يبقي هنحطهم لوحدهم في فنكشن تاني وننادي عليها في نفس مكان الفنكشن الاول
// function clearForm(){
//     productName.value = '';
//     productprice.value = '';
//     productcategory.value = '';
//     productdes.value = '';
// }
// -----------------------------------------------------------Part three-----------------------------------------------
// هنشيل الداتا الستاتيك ونحط اللي العميل هيكتبها _ نخلي الفنكشن اللي بتعرض تاخد براميتر واللي بتنادي عليها تاخد الأراي
//splice نعمل فنكشن تحذف عن طريق 
// لما تمسح هتلاقي مفيش حاجة اتمسحت قدامك عشان انت عارض القديم عايزين نقوله اعرض الجديد يبقي ننادي علي الفنكشن اللي بتعرض ونحط فيها الاراي


// -----------------------------------------------------------Essam Try----------------------------

var productName = document.getElementById('productName')
var productprice = document.getElementById('productprice')
var productcategory = document.getElementById('productcategory')
var productdes = document.getElementById('productdes')
var addBtn = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')

var productContainer = [];

// لو فيه داتا قديمة للعميل اعرضها 
if(localStorage.getItem('products') != null){
    productContainer = JSON.parse(localStorage.getItem('products')) 
    displayProduct(productContainer)
}

function addProduct(){
    var product = {
        name:productName.value,
        price:productprice.value,
        category:productcategory.value,
        desc:productdes.value,
    }
    productContainer.push(product)
    localStorage.setItem('products', JSON.stringify(productContainer))
    displayProduct(productContainer)
    clearForm()
}

function displayProduct (procontainer){
    console.log((procontainer));
    var cartona = '';
    for(var i =0; i<procontainer.length;i++){
        cartona +=  ` <tr>
        <td>${procontainer[i].name}</td>
        <td>${procontainer[i].price}</td>
        <td>${procontainer[i].category}</td>
        <td>${procontainer[i].desc}</td>
        <td><button onclick='setFormForUpdate(${i})' class="btn btn-info">update</button></td>
        <td><button onclick="deleteItem(${i});" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    console.log(cartona);
    document.getElementById('tableBody').innerHTML = cartona;
}
// console.log(displayProduct());

function clearForm(){
    productName.value = '';
    productprice.value = '';
    productcategory.value = '';
    productdes.value = '';
}
// حاول تفهم ليه اخد براميتر
function deleteItem(productIndex){
    productContainer.splice(productIndex,1);
    // اعدنا الكود عشان نحفظ الداتا الجديدة بعد المسح 
    localStorage.setItem('products', JSON.stringify(productContainer))
    displayProduct(productContainer);
}

// localStorage.setItem('Academy','Route');
// localStorage.setItem('human','essam');
// localStorage.clear()


function searchProduct(term){
 
    var matchedProduct = [];
    for(var i =0; i < productContainer.length; i++){
        console.log(productContainer[i].name.toLowerCase().includes(term.toLowerCase()));
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) === true){
            matchedProduct.push(productContainer[i])
        }
    }
    console.log(matchedProduct);
    displayProduct(matchedProduct)

}


function setFormForUpdate(i){
    addBtn.classList.replace('d-block','d-none')
    updateBtn.classList.replace('d-none','d-block')
    productName.value = productContainer[i].name;
    productprice.value = productContainer[i].price;
    productcategory.value = productContainer[i].category;
    productdes.value = productContainer[i].desc;
}





let itemList=[]

const itemInput=document.getElementById('itemInput')
const addButton= document.getElementById('addButton')
const sortAscButton= document.getElementById('sortAsc')
const sortDesButton= document.getElementById('sortDes')
const itemListElement= document.getElementById('itemList')

function addItem(){
    const itemValue= itemInput.value.trim();
    // * check if tránh trường hợp không nhập gì rồi enter
    if (itemValue){
        itemList.push(itemValue);
        // * set lại input= rỗng (xóa dữ liệu ô ng dùng đã nhập)
        itemInput.value='';
        renderList();
    }
}

//todo Hàm thay đổi phần tử đc chỉ định trong mảng: array.splice()

function deleteItem(index){
    itemList.splice(index,1);
    renderList();
}

function sortAsc(){
    itemList.sort();
    renderList();
}

function sortDes(){
    itemList.sort().reverse();
    renderList();
}

//* In lại danh sách
function renderList(){

    //* xóa toàn bộ nội dung của thẻ <ul>
    itemListElement.innerHTML='';

    //*  Vòng for duyệt qua danh sách
    itemList.forEach((item,index) => {  
    // = với: itemList.forEach(function(item,index) {....})

        //* Tạo thẻ <li> cho mỗi phần tử
        const li=document.createElement('li');
        li.textContent=item;    //* in nội dung vào li
        
        //* thêm thẻ <li> vào html
        itemListElement.appendChild(li);

        //* tạo nút xóa
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';

        //* thêm nút Xóa vào thẻ <li> trong html
        li.appendChild(deleteButton);

        //* cài chức năng cho nút xóa
        deleteButton.addEventListener('click',() => {
            // = với: deleteButton.addEventListener('click',function() {.....})
            deleteItem(index);
        });
    });
}

addButton.addEventListener('click',addItem);
itemInput.addEventListener('keydown',(event) => {
    if (event.code==='Enter') addItem();
});
sortAscButton.addEventListener('click',sortAsc);
sortDesButton.addEventListener('click',sortDes);
renderList();
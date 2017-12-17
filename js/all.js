//新增陣列
const dataname =JSON.parse(localStorage.getItem('listname'))|| [];
//宣告btnset等於送出按鈕
var btnset = document.querySelector('.btn-secondary');
//按下按送出按鈕觸發save函式
btnset.addEventListener('click',save,false);
//con_local等於UL元素
var con_local = document.querySelector('.list-group');
//按下con_local裡面的UL元素觸發dedata函式
con_local.addEventListener('click',dedata,false);
//執行datalist函式並帶入dataname資料
datalist(dataname);
//新增新紀錄在local storage
function save(e){
    var name = document.querySelector('.form-control').value;
    var todo ={
        content:name
    };
    dataname.push(todo);
    datalist(dataname);
    localStorage.setItem('listname',JSON.stringify(dataname));
}
//列出local storage內容
function datalist(items){
    var str ='';
    var datalen = dataname.length;
    for(i=0;i<datalen;i++){
        str += '<li class="list-group-item">\
        <button type="button" class="btn btn-primary" data-index='+i+'>刪除 </button>\
        '+items[i].content+'\
    </li>'
    };
    document.querySelector('.list-group').innerHTML = str;
}
//刪除local storage
function dedata(e){
    e.preventDefault();
    if(e.target.nodeName !=="BUTTON"){return};
    var index = e.target.dataset.index;
    dataname.splice(index,1);
    localStorage.setItem('listname',JSON.stringify(dataname));
    datalist(dataname);
}
//刪除全部紀錄
var deall = document.querySelector('.btn-danger');
deall.addEventListener('click',dedataall,false);
function dedataall(){
    var datalen = dataname.length;
    for(var i=0;i<datalen;i++){
        dataname.splice(i);
        localStorage.setItem('listname',JSON.stringify(dataname));
        datalist(dataname);
    }
   
}


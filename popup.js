(function () {
    document.onload = ()=>{
        document.querySelector('.nav-item-clear').onclick = ()=>{
            localStorage.clear('helperData');
        }
    }
})()
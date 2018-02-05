window.onload = function () {
    let uid = location
        .search
        .match(/[0-9]{1,}/)[0];
    let followingList = [];
    let helpData = localStorage.getItem('helpData');
    if (helpData) {
        followingList = JSON
            .parse(helpData)
            .followingList;
    } else {
        localStorage.setItem('helpData', JSON.stringify({'followingList': []}));
    }
    let style = document.createElement('style');
    style.innerText = '\
        body{\
            position: relative;\
        }\
        .follow-list-panel{\
            position: fixed;\
            width: 800px;\
            margin: auto;\
            background: #f5e8cb;\
            left: 0;\
            top: 0;\
        }\
    ';
    document.head.appendChild(style);
    let followListButton = document.createElement('div');
    followListButton.innerHTML = '<a href="javascript:void(0)" class="mmdefault " title="关注列表" style="color: gray;' +
            ' white-space: nowrap;">关注列表</a>';
    followListButton.className = 'td';
    document
        .querySelector('.right')
        .appendChild(followListButton);

    let followListPanel = document.createElement('div');
    followListPanel.className = 'follow-list-panel';
    followListPanel.style.display = 'none';
    let followListUl = document.createElement('ul');
    followListUl.className = 'list-panel-ul';
    followingList.forEach(item => {
        let followItem = document.createElement('li');
        followItem.className = 'panel-ul-item';
        followItem.innerHTML = `<a href="http://bbs.nga.cn/nuke.php?func=ucp&uid=${item.uid}">用户名:${item.username} uid:${item.uid} 备注:${item.remark}</a>`
        followListUl.appendChild(followItem);
    });
    followListPanel.appendChild(followListUl);
    document
        .body
        .appendChild(followListPanel);
    document.querySelectorAll('.right .td')[8].onclick = () => {
        followListPanel.style.display = 'block';
    }
    let urlPath = location.href;
    if (urlPath.match('nuke.php')) {
        let isFollowing = followingList.find((value) => value.uid == uid)
            ? true
            : false;
        let infoWrapper = document.querySelector('.info');
        let followButton = document.createElement('li');
        if (isFollowing) {
            followButton.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
            infoWrapper.appendChild(followButton);
        } else {
            followButton.innerHTML = '<li style="width: 240px;">+关注</li>';
            infoWrapper.appendChild(followButton);
        }
        followButton.onclick = (e) => {
            let that = e.target;
            if (that.classList.contains('following')) {
                that.innerHTML = '<li style="width: 240px;">+关注</li>';
                followingList.splice(followingList.findIndex((value) => {
                    value.uid = uid;
                }));
                // localStorage.setItem('helpData', JSON.stringify({'followingList':
                // followingList}));
            } else {
                that.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
                let imgUrl = document
                    .querySelector('#ucpuser_avatar_blockContent img')
                    .src;
                let username = document
                    .querySelectorAll('.info li')[1]
                    .querySelector('span>span')
                    .innerText;
                followingList.push({'uid': uid, imgUrl: imgUrl, username: username, remark: ''});
            }
            localStorage.setItem('helpData', JSON.stringify({'followingList': followingList}));
        }
    }
}
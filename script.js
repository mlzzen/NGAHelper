window.onload = function () {
    let uid = location
        .search
        .match(/[0-9]{1,}/)[0];
    let helpData = localStorage.getItem('helpData');
    let followingList = [];
    if (helpData) {
        followingList = JSON
            .parse(helpData)
            .followingList;

    } else {
        localStorage.setItem('helpData', JSON.stringify({'followingList': []}));
    }
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
            // localStorage.setItem('helpData', JSON.stringify({'followingList': followingList}));
        } else {
            that.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
            followingList.push({
                'uid':uid
            });
        }
        localStorage.setItem('helpData', JSON.stringify({'followingList': followingList}));
    }
}

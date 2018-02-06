export default function initData(followingList) {
    let helpData = localStorage.getItem('helpData');
    if (helpData) {
        followingList = JSON
            .parse(helpData)
            .followingList;
    }
    else {
        localStorage.setItem('helpData', JSON.stringify({ 'followingList': [] }));
    }
}
//# sourceMappingURL=localData.js.map
import writeStyle from "./following-list-style"; //导入样式
import { Following } from "./types";
import initData from "./localData"; //初始化本地储存数据的方法
import createFollowingListPanel from "./following-list-panel";  //关注列表元素生成及事件
import createFollowButton from "./follow";
window.onload = function () {
    //写样式的
    writeStyle();
    let followingList : Following[] = [];
    initData(followingList); //是否初始化本地数据
    createFollowingListPanel(followingList); //关注列表元素生成及事件
    createFollowButton(followingList); //关注按钮及事件
    console.log('插件开始运作');
}
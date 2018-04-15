import {Following} from "./types";
export default async function initData(){
    let followingList : Following[] = [];
    let helpData : string | null = await localStorage.getItem('helpData');
    if (helpData) {
        console.log('从本地储存种获取关注列表');
        return followingList = JSON.parse(helpData).followingList;
    } else {
        localStorage.setItem('helpData', JSON.stringify({'followingList': []}));
        return followingList;
    }
}
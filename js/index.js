window.onload = function () {
    let hs =document.getElementById("box")


    let bntList = document.getElementsByClassName("bntList")
    let bannerPointer = bntList[0].getElementsByTagName("span")


    let messageList = document.getElementsByClassName("messageList")
    let messageL =messageList[0].getElementsByTagName("li")

    //博客
        hs.onmouseenter = function () {
            hs.style.color="red";

        }
        hs.onmouseleave = function () {
            hs.style.color="#ffffff";

        }
        for(let i=0;i<messageL.length;i++){
            messageL[i].onclick =function () {

                for (let j=0;j<messageL.length;j++){
                    // console.log(i);

                    messageL[j].style.borderBottom = "none";
                   }
                   this.style.borderBottom="1px solid #000"
                }

            }
        // let tabList =document.querySelector(".tabList >li")
        let tabLists = document.querySelectorAll(".tabList > li")
        tabLists.forEach(function (elem,index) {
            elem.onmouseenter = function () {
                for (let i=0;i<tabLists.length;i++){
                    tabLists[i].classList.remove("hot");
                }
                    this.classList.add("hot");
            }

        })
//最新博文
    let eassyT =document.querySelectorAll(".eassyT > a")

    eassyT.forEach(function (elem,index) {
        elem.onmouseenter =function () {
            for (let i=0;i<eassyT.length;i++){
                eassyT[i].style.color="#337ab7";
            }

        }
        elem.onmouseleave =function () {
            for (let i=0;i<eassyT.length;i++){
                eassyT[i].style.color="#000";
            }

        }


    })
//    轮播图
    let current =0,next =0;
    let rightBnt =document.querySelector(".rightBnt")
    let leftBnt =document.querySelector(".LeftBnt")
    let darwLists = document.querySelectorAll(".darwList >li")
    let hot = document.getElementsByClassName(" .hot")
    console.log(hot);
    let darws = document.querySelector(".darw");
    let w = darwLists[0].offsetWidth;
    let flag =true;
    let timer = null;
    darws.onmouseenter = function () {
        clearInterval(timer);
        rightBnt.style.opacity=1;
        leftBnt.style.opacity = 1;

    }
    darws.onmouseleave =function () {
         timer=setInterval(rightBnt.onclick,1000);
         rightBnt.style.opacity=0;
        leftBnt.style.opacity = 0;

    }
    // rightBnt.onmouseenter = function () {
    //     rightBnt.style.opacity=1;
    //
    // }
    // rightBnt.onmouseleave = function () {
    //     rightBnt.style.opacity=0;
    //
    // }
    // leftBnt.onmouseenter = function () {
    //     leftBnt.style.opacity = 1;
    //
    // }
    // leftBnt.onmouseleave = function () {
    //     leftBnt.style.opacity = 0;
    //
    // }
     //rightBnt
    rightBnt.onclick =function () {
        if (!flag){
            return
        }
        flag = false;
        next++;
        if (next ==darwLists.length){
            next=0;
        }
        darwLists[next].style.left = w+`px`;
        bannerPointer[current].classList.remove("hot");
        bannerPointer[next].classList.add("hot");
        animate(darwLists[current],{left:-w})
        animate(darwLists[next],{left:0},function () {
            flag = true;

        });
        current =next;

    }
    //leftBnt
    leftBnt.onclick =function () {
        if (!flag){
            return
        }
        flag = false;
        next--;
        if (next <0){
            next=darwLists.length-1;
        }
        darwLists[next].style.left = -w+`px`;
        bannerPointer[current].classList.remove("hot");
        bannerPointer[next].classList.add("hot");
        animate(darwLists[current],{left:w})
        animate(darwLists[next],{left:0},function () {
            flag = true;

        });
        current =next;

    }
    function auto() {

        timer= setInterval(rightBnt.onclick,1000)

    }
    auto()


//    点击切换
    for (let i=0;i<bannerPointer.length;i++){
        bannerPointer[i].onclick =function () {
            if (current === i){
                return
            }
            next = i;
            if (next>current){
            darwLists[next].style.left = w+`px`;
            animate(darwLists[current],{left:-w});
            animate(darwLists[next],{left:0});
            }else {
                darwLists[next].style.left = w+`px`;
                animate(darwLists[current],{left:-w});
                animate(darwLists[next],{left:0});

            }


            bannerPointer[current].classList.remove("hot");
            bannerPointer[next].classList.add("hot");

            current=next;
        }
    }


//     for(let i=0;i<bannerPointer.length;i++){
//
//         bannerPointer[i].onclick =function () {
//             index =i;
//             for (let j =0;j<bannerPointer.length;j++){
//
//                bannerPointer[j].style.backgroundColor="#fff";
//                darwLists[j].style.zIndex=1;
//            }
//            this.style.backgroundColor="#046b80"
//            darwLists[i].style.zIndex=999;
//        }
//
//     }
//

//懒加载
    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll(".lazyload");
    let positionArr = []
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
         positionArr.push(parent.offsetTop+ele.offsetTop)

    })
    window.onscroll = function () {
        let scrolltop =document.documentElement.scrollTop|| document.body.scrollTop;
        for (let i =0;i<positionArr.length;i++){
            if(scrolltop + viewH >= positionArr[i] + 100 ){
                if (!imgs[i].src){
                    imgs[i].src =imgs[i].getAttribute("aa")
                }
            }

        }


}
//z左右箭头
//     let rightbnt = document.querySelector(".rightBnt")
//     let leftbnt = document.querySelector(".LeftBnt")
//     console.log(rightbnt);
//     console.log(leftbnt);
}
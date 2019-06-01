window.onload = function () {
    let hs =document.getElementById("box")


    let bntList = document.getElementsByClassName("bntList")
    let bannerPointer = bntList[0].getElementsByTagName("span")


    let messageList = document.getElementsByClassName("messageList")
    let messageL =messageList[0].getElementsByTagName("li")


    // console.log(tabList);
    // console.log(tabL);
    // console.log(messageList);
    // console.log(messageL);
    // console.log(listli);
    // console.log(bntList);
    // console.log(bannerPointer);
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
         // console.log(tabList);
        // console.log(tabLists);
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
    let rightBnt =document.querySelector(".rightBnt")
    let leftBnt =document.querySelector(".LeftBnt")
    let darwLists = document.querySelectorAll(".darwList >li")

   let  index =0;

       rightBnt.onclick =function () {
                index++;
           // console.log(index);
           // console.log("---");
           if (index == darwLists.length){
                    index=0;
                }
                for (let i=0;i<darwLists.length;i++){
                    // darwLists[i].style.zIndex = 1;
                    darwLists[i].style.opacity = 0;
                    bannerPointer[i].style.backgroundColor ="#fff";

                }
                // darwLists[index].style.zIndex =998;
                 darwLists[index].style.opacity =1;
                bannerPointer[index].style.backgroundColor ="#046b80";

            }
      leftBnt.onclick =function () {

        if (index == 0){
            index=darwLists.length;
        }
        index--;
        for (let i=0;i<darwLists.length;i++){
            // darwLists[i].style.zIndex = 1;
            darwLists[i].style.opacity = 0;
            bannerPointer[i].style.backgroundColor ="#fff";

        }
        // darwLists[index].style.zIndex =998;
        darwLists[index].style.opacity =1;
        bannerPointer[index].style.backgroundColor ="#046b80";


    }
      //自动轮播
    let darws = document.querySelector(".darw")
    console.log(darws);
    let  timer= setInterval(rightBnt.onclick,1000)
    // console.log("timer"+timer);

    darws.onmouseenter = function () {
          clearInterval(timer);



      }
    darws.onmouseleave =function () {
         timer=setInterval(rightBnt.onclick,1000);

    }

//    点击切换



    for(let i=0;i<bannerPointer.length;i++){

        bannerPointer[i].onclick =function () {
            index =i;
            for (let j =0;j<bannerPointer.length;j++){

               bannerPointer[j].style.backgroundColor="#fff";
               darwLists[j].style.zIndex=1;
           }
           this.style.backgroundColor="#046b80"
           darwLists[i].style.zIndex=999;
       }

    }

}
window.addEventListener("load",function () {
  //  选择头像
  let thumb = document.querySelectorAll(".thumb >li");

    let pre = 0;
    for (let i=0;i<thumb.length; i++){
      thumb[i].onclick = function () {
          this.style.opacity = 1;
          thumb[pre] .style.opacity =0.5;
          pre = i;

      }
    }
//已输入
  let spans = document.querySelector(".Time");
    let textarea =document.querySelector("textarea")
    textarea.onkeyup =function () {
      let value = this.value;
      spans.innerText = value.length;

    }
//    提交
    let note1 = document.querySelector(".note1");
    let messageBox = document.querySelector(".note > ul > li");
    let user = document .querySelector("#user");
    let input = document.querySelector("input[type=submit]");
    // let form = document.forms;
    // console.log(form);
    let thu = document.querySelectorAll(".thumb >li > img");
    input.onclick = function () {
        let thumbs = thu[pre].src;
        user = user.value;
        let time = new Date().toLocaleDateString();
        let content = textarea.value;
        let obj = {thumbs,user,time,content};

        insertMess(obj);
    }
    function insertMess({thumbs,user,time,content}) {
        let str =`
         <li class="note1">
                <div class="note2">
                    <div class="noteDraw">
                    <img src="${thumbs}" alt="">
                    </div>
                    <div class="noteRight">
                        <span class="user">${user}</span>
                        <p class="noteWord">${content}</p>
                    </div>
                    <div class="time">${time}</div>
                </div>
            </li>
        `;
        messageBox.innerHTML= str +messageBox.innerHTML;
    }
})
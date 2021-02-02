ready(function(){initWidget();});function ready(callbackFunction){if(document.readyState!='loading')
callbackFunction()
else
document.addEventListener("DOMContentLoaded",callbackFunction)}
function loadIframe(){var containerDiv=document.createElement('div');
containerDiv.setAttribute('id','tile-container');
containerDiv.setAttribute('style','width:30%; height:62%;background:transparents;display: block !important;z-index: 2000000000!important;right: 10px!important;bottom: 0px!important;left: auto!important;position: fixed!important;');
document.body.appendChild(containerDiv);var ifrm=document.createElement("iframe");
ifrm.setAttribute("frameborder","0");
ifrm.setAttribute("border","0");
ifrm.setAttribute("id","messageId");
ifrm.setAttribute("style",`
outline: none !important;
visibility: visible !important;
resize: none !important;
box-shadow: none !important;
overflow: visible !important;
background: none transparent !important;
opacity: 1 !important;
inset: auto !important;
position: static !important;
border: 0px !important;
min-height: auto !important;
min-width: auto !important;
max-height: none !important;
max-width: none !important;
padding: 0px !important;
margin: 0px !important;
transition-property: none !important;
transform: none !important;
width: 100% !important;
z-index: 999999 !important;
cursor: auto !important;
float: none !important;
border-radius: unset !important;
pointer-events: auto !important;
display: block !important;
height: 100% !important;`);
     
     htmlMessage=`<!DOCTYPE html>
     <!-- Created By CodingNepal -->
     <html lang="en" dir="ltr">
     
     <head>
       <meta charset="utf-8">
       <script src="https://kit.fontawesome.com/a076d05399.js"></script>
       <script src="https://cdn.socket.io/socket.io-3.0.1.min.js"></script>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  overflow: hidden;
  background: #f2f2f2;
}
html,body{
  height: 100%;
  width: 100%;
  background:transparent;
  }
#click{
  display: none;
}
label{
  position: absolute;
  right: 30px;
  bottom: 20px;
  height: 55px;
  width: 55px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  text-align: center;
  line-height: 55px;
  border-radius: 50px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}
label i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
}
label i.fas{
  opacity: 0;
  pointer-events: none;
}
#click:checked ~ label i.fas{
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) rotate(180deg);
}
#click:checked ~ label i.fab{
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) rotate(180deg);
}
.wrapper{
  position: absolute;
  right: 30px;
  bottom: 0px;
  max-width: 600px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
  height: calc(100% - 86px);
  width: 65%;
}
.wrapper .chat-box .form-outer{
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.wrapper .chat-box form.form2{
display: none;
}
#click:checked ~ .wrapper{
  opacity: 1;
  bottom: 85px;
  pointer-events: auto;
}
.wrapper .head-text{
  line-height: 60px;
  color: #fff;
  border-radius: 15px 15px 0 0;
  padding: 0 20px;
  font-weight: 500;
  font-size: 20px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
}
.wrapper .chat-box{
  padding: 20px;
  width: 100%;
  height: calc(100% - 60px);
}
.chat-box .desc-text{
  color: #515365;
  text-align: center;
  line-height: 25px;
  font-size: 17px;
  font-weight: 500;
}
.chat-box form{
  padding: 6px 15px;
  border-radius: 25px;
  border: 1px solid lightgrey;
  height: 100%;
}
.chat-box form .field{
  width: 100%;
  margin-top: 20px;
}
.chat-box .form1 .field{
  height: 50px;
}
.chat-box form .field:last-child{
  margin-bottom: 15px;
}
form .field input,
form .field button,
form textarea{
  width: 100%;
  height: 100%;
  padding-left: 20px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 25px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.form2 textarea{
  width: 100%;
  height: 50%;
  padding-left: 20px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 25px;
  font-size: 16px;
  transition: all 0.3s ease;
}
form .field input:focus,
form .textarea textarea:focus{
  border-color: #fc83bb;
}
form .field input::placeholder,
form .textarea textarea::placeholder{
  color: silver;
  transition: all 0.3s ease;
}
form .field input:focus::placeholder,
form .textarea textarea:focus::placeholder{
  color: lightgrey;
}
.chat-box form .textarea{
  height: 70px;
  width: 100%;
}
.chat-box form .textarea textarea{
  height: 100%;
  border-radius: 50px;
  resize: none;
  padding: 15px 20px;
  font-size: 16px;
}
.chat-box form .field button{
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  transition: all 0.3s ease;
}

.chat-box .form2 .field button{
  height: 45px;
}
.chat-box form .field button:active{
  transform: scale(0.97);
}

      </style>
       </head>
     
     <body>
       <input type="checkbox" id="click">
       <label for="click">
         <i class="fab fa-facebook-messenger"></i>
         <i class="fas fa-times"></i>
       </label>
       <div class="wrapper">
         <div class="head-text">
           Let's chat? - Online</div>
         <div class="chat-box">
           
           <div class="form-outer">
             <form id="formStart" class="form1" action="#">
               <div class="desc-text">
                 Please fill out the form below to start chatting with the next available agent.</div>
               <div class="field">
                 <input type="text" id="username" placeholder="Your Name" required>
               </div>
               <div class="field">
                 <input type="email" placeholder="Email Address" required>
               </div>
               <div class="field textarea">
                 <!-- Due to more textarea fields I got an error so I've changed the textarea name into changeit..Change the tag name to use it -->
                 <changeit cols="30" rows="10" placeholder="Explain your queries.." required></changeit>
               </div>
               <div class="field startBtn">
                 <button onclick="moForm()" id="startBtn" type="button" >Start Chat</button>
               </div>
             </form>
             <form id="formChat" class="form2" action="#">
               <div class="field">
                 <textarea id="message" placeholder="Bạn hãy nhập lời nhắn.." name="msg" rows="11.5" required></textarea>
               </div>
               <div class="field">
                 <button type="button" onclick="sendMsgForm()">Send</button>
               </div>
               </form>
           </div>
         </div>
       </div>
       <script>
       var connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
        };
      var socket = io.connect("http://localhost:9000",connectionOptions);
        function moForm() {
          var username=document.getElementById('username').value;
          
            socket.emit("user_join", username);
            document.getElementById('username').value="";
          document.getElementById("formChat").style.display = "block";
          document.getElementById("formStart").style.display = "none";
        }
        
        function sendMsgForm(){
          var message=document.getElementById('message').value;
          socket.emit("send_message", message);
          document.getElementById('message').value="";
        };
       </script>
     </body>
     
     </html>
     
     `
;
containerDiv.appendChild(ifrm);
ifrm.contentWindow.document.open();
ifrm.contentWindow.document.write(htmlMessage);
ifrm.contentWindow.document.close();}
function initWidget(){loadIframe();}
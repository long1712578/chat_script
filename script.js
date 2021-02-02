ready(function(){initWidget();});function ready(callbackFunction){if(document.readyState!='loading')
callbackFunction()
else
document.addEventListener("DOMContentLoaded",callbackFunction)}
function loadIframe(){var containerDiv=document.createElement('div');containerDiv.setAttribute('id','tile-container');containerDiv.setAttribute('style','display: block !important;z-index: 2000000000!important;right: 10px!important;bottom: 0px!important;left: auto!important;position: fixed!important;');document.body.appendChild(containerDiv);var ifrm=document.createElement("iframe");ifrm.setAttribute("frameborder","0");ifrm.setAttribute("border","0");ifrm.setAttribute("id","messageId");ifrm.setAttribute("style",`outline: none !important;
    visibility: visible !important;
      resize: none !important;
      box-shadow: 
      none !important; 
      overflow: visible !important;
      background: none transparent !important; 
      opacity: 1 !important; inset: auto !important; 
      position: static !important; border: 0px !important; 
      min-height: auto !important; min-width: auto !important;
      max-height: none !important; max-width: none !important; 
      padding: 0px !important; margin: 0px !important;
      transition-property: none !important; transform: none !important;
      width: 300px !important; z-index: 999999 !important; cursor: auto !important; 
      float: none !important; border-radius: unset !important; pointer-events: auto !important;
      display: block !important; height: 400px !important;`);
      var htmlMessage='<html lang="en">';
      htmlMessage+='<head>';
      htmlMessage+='<meta charset="utf-8">';
      htmlMessage+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />';
      htmlMessage+='<title>Tilechat Widget</title>';
      htmlMessage+='<base href="./">';
      htmlMessage+='<link rel="icon" type="image/x-icon" href="favicon.ico">';
      htmlMessage+='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
      htmlMessage+='<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>';
      htmlMessage+='<script src="https://cdn.socket.io/socket.io-3.0.1.min.js"></script>';
      htmlMessage+=`<script>
      function moForm() {
        document.getElementById("myForm").style.display = "block";
      };
      function dongForm() {
        document.getElementById("myForm").style.display = "none";
      };
      var connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
        };
      var socket = io.connect("http://localhost:9000",connectionOptions);
      function guiTenForm(){
        var message=document.getElementById('message').value;
        
          socket.emit("user_join", message);
          document.getElementById('message').value="";
      };
      function guiMsgForm(){
        var message=document.getElementById('message').value;
        socket.emit("send_message", message);
          document.getElementById('message').value="";
      };
    </script>`;
    htmlMessage+=`<style>
    {box-sizing: border-box;}

      .nut-mo-chatbox {
          background-color: #32e4ec;
          color: white;
          padding: 16px 20px;
          border-radius: 90%!important;
          cursor: pointer;
          opacity: 0.8;
          position: fixed;
          bottom: 23px;
          right: 28px;
          width: auto;
      }


      .Chatbox {
          display: none;
          position: fixed;
          bottom: 0;
          right: 15px;
          border: 3px solid #f1f1f1;
          z-index: 9;
      }

      .form-container {
          max-width: 300px;
          padding: 10px;
          background-color: white;
      }
      
      .form-container textarea {
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          border: none;
          background: #f1f1f1;
          resize: none;
          min-height: 100px;
      }
      
      .form-container textarea:focus {
          background-color: #ddd;
          outline: none;
      }
      
      .form-container .btn {
          background-color: #4CAF50;
          color: white;
          padding: 16px 20px;
          border: none;
          cursor: pointer;
          width: 100%;
          margin-bottom:10px;
          opacity: 0.8;
      }
      
      
      .form-container .nut-dong-chatbox {
          background-color: red;
      }
      
      
      .form-container .btn:hover, .nut-mo-chatbox:hover {
          opacity: 1;
      }
    </style>`;htmlMessage+='</head>';htmlMessage+='<body>';htmlMessage+=`<button class="nut-mo-chatbox" onclick="moForm()"><i class="fa fa-comments"></i></button>
    <div class="Chatbox" id="myForm">
      <form  class="form-container">
        <h1>Chatbox</h1>
    
        <label for="msg"><b>Lời Nhắn</b></label>
        <textarea placeholder="Bạn hãy nhập lời nhắn.." name="msg" id="message" required></textarea>
    
        <button type="button"  onclick="guiMsgForm()" class="btn" >Gửi msg</button>
        <button type="button"  onclick="guiTenForm()" class="btn" >Gửi tên</button>
        <button type="button" class="btn nut-dong-chatbox" onclick="dongForm()">Đóng</button>
      </form>
    </div>
</body>
</html>
`;containerDiv.appendChild(ifrm);ifrm.contentWindow.document.open();ifrm.contentWindow.document.write(htmlMessage);ifrm.contentWindow.document.close();}
function initWidget(){loadIframe();}
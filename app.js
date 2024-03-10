function load()
{
    checkNotificationPermission();
    $("#notificationEnableBtn").on("click", function(){
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              const notification = new Notification("This is test notification!");
            }
        });
    })

    $("#walkTimer").on("click", function(){
        showToast();
        walkNotification();
        setInterval(walkNotification, 20 * 60 * 1000);
    })
}

function checkNotificationPermission()
{
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } 
    else if(Notification.permission === "granted")
    {
        $("#notificationEnableBtn").attr("style", "display:None");
        console.log("notification permission allowed!");
    }
    else{
        $("#notificationEnableBtn").attr("style", "display:block");
        console.log("Notification permission not enabled!");
    }
}

function showToast()
{
    const toastLiveExample = document.getElementById('bootstraptoast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show();
}

function walkNotification()
{
    console.log("test");
    const notification = new Notification("Walk reminder");
}
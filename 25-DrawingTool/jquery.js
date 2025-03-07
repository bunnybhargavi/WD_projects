$(function() {
    var paint = false;
    var paint_erase = "paint";
    var canvas = document.getElementById("drawing");
    var ctx = canvas.getContext("2d");
    var container = $("#container");
    var mouse = {x:0, y:0};
    
    // Load saved image from localStorage if it exists
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, 0, 0);
        }
        img.src = localStorage.getItem("imgCanvas");
    }

    // Initialize canvas settings
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    
    // Mouse events for drawing
    container.mousedown(function(e){
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mouse.x, mouse.y);
    });
    
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint == true){
            if(paint_erase == "paint"){
                ctx.strokeStyle = $("#paintcolor").val();
            } else {
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
    
    container.mouseup(function(){
        paint = false;
    });
    
    container.mouseleave(function(){
        paint = false;
    });
    
    // Reset button functionality
    $("#reset").click(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        paint_erase = "paint";
        $("#erase").removeClass("eraseMode");
    });
    
    // Save button functionality
    $("#save").click(function(){
        if(typeof(localStorage) !== "undefined"){
            localStorage.setItem("imgCanvas", canvas.toDataURL());
            alert("Drawing saved successfully!");
        } else {
            alert("Your browser does not support local storage!");
        }
    });
    
    // Erase button functionality
    $("#erase").click(function(){
        if(paint_erase == "paint"){
            paint_erase = "erase";
        } else {
            paint_erase = "paint";
        }
        // Removed toggleClass that added background color
    });
    
    // Color picker functionality
    $("#paintcolor").change(function(){
        $("#circle").css("background-color", $(this).val());
    });
    
    // Brush size slider functionality
    $("#myRange").on("input", function(){
        var brushSize = $(this).val();
        $("#circle").height(brushSize);
        $("#circle").width(brushSize);
        ctx.lineWidth = brushSize;
    });
    
    // Touch events for mobile responsiveness
    canvas.addEventListener("touchstart", function(e){
        e.preventDefault();
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    
    canvas.addEventListener("touchmove", function(e){
        e.preventDefault();
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    
    canvas.addEventListener("touchend", function(e){
        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);
    
    // Set initial brush color to match color picker
    $("#circle").css("background-color", $("#paintcolor").val());
    
    // Ensure canvas resizes properly for different screen sizes
    function resizeCanvas() {
        if (window.innerWidth <= 1024) {
            canvas.width = 500;
            canvas.height = 400;
        } else {
            canvas.width = 700;
            canvas.height = 480;
        }
        
        // Redraw canvas content after resize
        if(localStorage.getItem("imgCanvas") != null){
            var img = new Image();
            img.onload = function(){
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
            img.src = localStorage.getItem("imgCanvas");
        }
    }
    
    // Initialize canvas size and handle window resize
    resizeCanvas();
    $(window).resize(resizeCanvas);
});
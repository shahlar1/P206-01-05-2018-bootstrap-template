// JavaScript source code
var defaultSetting = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height:"500px"

}
var Slider = function (selector) {
   
    var slider = document.querySelector(selector);
    var innerSlider = slider.querySelector("div");
    
    var itemArr=[]
    innerSlider.style.width = innerSlider.childElementCount * innerSlider.children.item(1).clientWidth + "px";
    Element.prototype.css = function (setting) {
        for (var prop in setting) {
            for (var globalProp in this.style) {
                if (prop == globalProp) {
                    this.style[globalProp] = setting[prop];
                }
            }
        }
       
      
    }
    innerSlider.css({
        position: "absolute",
        left: "0px",
        transition: "all .3s ease"
        
    })
    this.sliderStyle = function (setting) {
        for (var prop in setting) {
            for (var globalProp in slider.style) {
                if (prop == globalProp) {
                    slider.style[globalProp] = setting[prop];
                }
            }
        }
        return this;
    }
    count = 0;
    for (i = 0; i < innerSlider.childElementCount; i++) {
        count += 50;
        innerSlider.children.item(i).querySelector("img").style.width = "100%";
        var radioBtn = document.createElement("div");
        radioBtn.innerHTML = i;
        slider.appendChild(radioBtn);
        radioBtn.addEventListener("click",
            function() {
                innerSlider.css({
                    left: -(innerSlider.children.item(this.innerHTML * 1).offsetLeft) + "px",
            })
            });

        radioBtn.css({
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            background: "none",
            boxShadow: "0px 0px 5px white",
            display: "inline-block",
            margin: "10px",
            position: "absolute",
            bottom: "0px",
            left: count + "px",
            cursor:"pointer"
    });
       
        innerSlider.children.item(i).css({
            width: innerSlider.clientWidth / innerSlider.childElementCount+"px",
            float: "left"

    })
        

    }
    

    

}

var mySlider = new Slider("#slider");
mySlider.sliderStyle(defaultSetting);



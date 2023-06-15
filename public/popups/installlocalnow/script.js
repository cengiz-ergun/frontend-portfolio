function Pop() {
    var cssRuleFile = "./popups/installlocalnow/style.css"
    let lnk = document.createElement("link")
    lnk.setAttribute("rel", "stylesheet")
    lnk.setAttribute("type", "text/css")
    lnk.setAttribute("href", cssRuleFile)
    document.getElementsByTagName("head")[0].appendChild(lnk)

    var conDivObj

    let content = {
        size: "medium",
        position: "middle-center",
        color: "purple",
        image: "example-image.png",        
        contents: {
            content1: "Install local now",
            content2: "We've gone native, try it!",
            content3: "Continue",
            content4: "Not now",
        },
    }

    let createPopUp = function () {
        if (typeof conDivObj === "undefined") {
            conDivObj = document.createElement("DIV")
            conDivObj.setAttribute("id", "installlocalnow")
            conDivObj.classList.add(content.size)
            conDivObj.classList.add(content.position)

            imgDivObj = document.createElement("DIV")
            imgObj = document.createElement("IMG")
            imgObj.setAttribute(
                "src",
                content.image == "example-image.png"
                    ? "./popup-generator/logo-image/install-local-now.png"
                    : `${content.image}`,
            )
            imgObj.style.width =
                content.size == "large"
                    ? "420px"
                    : content.size == "medium"
                    ? "400px"
                    : "370px"
            imgDivObj.appendChild(imgObj)
            conDivObj.appendChild(imgDivObj)

            contentConteiner = document.createElement("DIV")
            contentConteiner.style.marginTop =
                content.size == "large"
                    ? "40px"
                    : content.size == "medium"
                    ? "32px"
                    : "24px"
            contentConteiner.style.marginBottom =
                content.size == "large"
                    ? "40px"
                    : content.size == "medium"
                    ? "32px"
                    : "24px"

            content1DivObj = document.createElement("DIV")
            content1DivObj.innerHTML = content.contents.content1
            content1DivObj.style.marginBottom =
                content.size == "large"
                    ? "12px"
                    : content.size == "medium"
                    ? "8px"
                    : "4px"
            content1DivObj.style.fontSize =
                content.size == "large"
                    ? "30px"
                    : content.size == "medium"
                    ? "24px"
                    : "20px"
            contentConteiner.appendChild(content1DivObj)

            content2DivObj = document.createElement("DIV")
            content2DivObj.innerHTML = content.contents.content2
            content2DivObj.style.marginBottom =
                content.size == "large"
                    ? "20px"
                    : content.size == "medium"
                    ? "16px"
                    : "12px"
            content2DivObj.style.fontSize =
                content.size == "large"
                    ? "20px"
                    : content.size == "medium"
                    ? "18px"
                    : "16px"
            contentConteiner.appendChild(content2DivObj)

            buttonContainer = document.createElement("DIV")
            button1Obj = document.createElement("BUTTON")
            button1Obj.innerText = content.contents.content3
            button1Obj.style.backgroundColor = content.color
            buttonContainer.appendChild(button1Obj)
            button2Obj = document.createElement("BUTTON")
            button2Obj.innerText = content.contents.content4
            buttonContainer.appendChild(button2Obj)
            contentConteiner.appendChild(buttonContainer)
            conDivObj.appendChild(contentConteiner)

            closeButtonObj = document.createElement("BUTTON")
            closeButtonObj.classList.add("exit-button")
            closeButtonObj.innerText = "x"
            closeButtonObj.style.backgroundColor = content.color
            closeButtonObj.addEventListener("click", function (e) {
                e.currentTarget.parentNode.remove()
            })
            conDivObj.appendChild(closeButtonObj)
        }

        document.body.appendChild(conDivObj)
    }

    this.init = function (param) {
        if (typeof param === "object") {
            if ("size" in param) content.size = param.size
            if ("position" in param) content.position = param.position
            if ("color" in param) content.color = param.color
            if ("image" in param) content.image = param.image
            if ("contents" in param && typeof param["contents"] === "object") {
                if ("content1" in param["contents"])
                    content.contents.content1 = param["contents"]["content1"]
                if ("content2" in param["contents"])
                    content.contents.content2 = param["contents"]["content2"]
                if ("content3" in param["contents"])
                    content.contents.content3 = param["contents"]["content3"]
                if ("content4" in param["contents"])
                    content.contents.content4 = param["contents"]["content4"]
            }
            createPopUp()
        }
    }
}

window.start = new Pop()

function Pop() {
    var cssRuleFile = "./popups/securitycode/style.css"
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
        logo: "example-logo.svg",
        contents: {
            content1: "Security Code",
            content2: "This code expires in 24 hours",
            content3: "Code",
            content4: "Cancel",
            content5: "Continue",
        },
    }

    let createPopUp = function () {
        if (typeof conDivObj === "undefined") {
            conDivObj = document.createElement("DIV")
            conDivObj.setAttribute("id", "securitycodepopup")
            conDivObj.classList.add(content.size)
            conDivObj.classList.add(content.position)

            console.log(content.logo)

            imgDivObj = document.createElement("DIV")
            imgObj = document.createElement("IMG")
            imgObj.setAttribute(
                "src",
                content.logo == "example-logo.svg"
                    ? "./popup-generator/logo-image/star.svg"
                    : `${content.logo}`,
            )
            imgObj.setAttribute("width", "36px")
            imgDivObj.appendChild(imgObj)
            imgDivObj.style.backgroundColor = content.color
            conDivObj.appendChild(imgDivObj)

            content1DivObj = document.createElement("DIV")
            content1DivObj.innerHTML = content.contents.content1
            conDivObj.appendChild(content1DivObj)

            content2DivObj = document.createElement("DIV")
            content2DivObj.innerHTML = content.contents.content2
            conDivObj.appendChild(content2DivObj)

            content3DivObj = document.createElement("INPUT")
            content3DivObj.placeholder = content.contents.content3
            conDivObj.appendChild(content3DivObj)

            content4DivObj = document.createElement("DIV")
            button1Obj = document.createElement("BUTTON")
            button1Obj.innerText = content.contents.content4
            content4DivObj.appendChild(button1Obj)
            button2Obj = document.createElement("BUTTON")
            button2Obj.innerText = content.contents.content5
            button2Obj.style.backgroundColor = content.color
            content4DivObj.appendChild(button2Obj)
            conDivObj.appendChild(content4DivObj)

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
            if ("logo" in param) content.logo = param.logo
            if ("contents" in param && typeof param["contents"] === "object") {
                if ("content1" in param["contents"])
                    content.contents.content1 = param["contents"]["content1"]
                if ("content2" in param["contents"])
                    content.contents.content2 = param["contents"]["content2"]
                if ("content3" in param["contents"])
                    content.contents.content3 = param["contents"]["content3"]
                if ("content4" in param["contents"])
                    content.contents.content4 = param["contents"]["content4"]
                if ("content5" in param["contents"])
                    content.contents.content5 = param["contents"]["content5"]
            }
            createPopUp()
        }
    }
}

window.start = new Pop()

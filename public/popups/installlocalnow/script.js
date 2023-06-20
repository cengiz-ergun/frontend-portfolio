function Pop() {
    let isShowed = false

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
        color: "#777777",
        image: "example-image.png",
        afterXSeconds: "",
        afterPercentScroll: "",
        trafficSource: "",
        webhookUrl: "",
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
            if (content.webhookUrl != "") {
                button1Obj.addEventListener("click", () => {
                    const necessaryInfo = getNecessaryInfo()
                    let data = new FormData()
                    data.append("info", JSON.stringify(necessaryInfo))
                    const fetchResponse = fetch(
                        `${content.webhookUrl}`,
                        {
                            method: "POST",
                            mode: "no-cors",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: data,
                        },
                    )
                        .then((response) => {
                            console.log(response)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
            }
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

        const getNecessaryInfo = () => {
            let browserInfo = navigator.userAgent
            let browser
            if (browserInfo.includes("Opera") || browserInfo.includes("Opr")) {
                browser = "Opera"
            } else if (browserInfo.includes("Edg")) {
                browser = "Edge"
            } else if (browserInfo.includes("Chrome")) {
                browser = "Chrome"
            } else if (browserInfo.includes("Safari")) {
                browser = "Safari"
            } else if (browserInfo.includes("Firefox")) {
                browser = "Firefox"
            } else {
                browser = "unknown"
            }
            let finalOs
            if (browserInfo.search("Windows") !== -1) {
                finalOs = "Windows"
            } else if (browserInfo.search("Mac") !== -1) {
                finalOs = "MacOS"
            } else if (
                browserInfo.search("X11") !== -1 &&
                !(os.search("Linux") !== -1)
            ) {
                finalOs = "UNIX"
            } else if (
                browserInfo.search("Linux") !== -1 &&
                os.search("X11") !== -1
            ) {
                finalOs = "Linux"
            }
            return {
                browserName: browser,
                operationSystem: finalOs,
                dateTime: String(new Date()),
                language: navigator.language || navigator.userLanguage
            }
        }

        if (content.afterPercentScroll == "" && content.afterXSeconds == "") {
            document.body.appendChild(conDivObj)
        } else {
            if (content.afterPercentScroll != "") {
                window.addEventListener("scroll", () => {
                    var height = document.body.scrollHeight
                    var y = window.scrollY
                    if (
                        y / height >=
                        Number(content.afterPercentScroll) / 100
                    ) {
                        if(!isShowed){
                            isShowed = true
                            document.body.appendChild(conDivObj)
                        }
                    }
                })
            }

            if (content.afterXSeconds != "") {
                setTimeout(() => {
                    document.body.appendChild(conDivObj)
                }, Number(content.afterXSeconds) * 1000)
            }
        }
    }

    this.init = function (param) {
        if (typeof param === "object") {
            if ("size" in param) content.size = param.size
            if ("position" in param) content.position = param.position
            if ("color" in param) content.color = param.color
            if ("image" in param) content.image = param.image
            if ("afterXSeconds" in param)
                content.afterXSeconds = param.afterXSeconds
            if ("afterPercentScroll" in param)
                content.afterPercentScroll = param.afterPercentScroll
            if ("trafficSource" in param)
                content.trafficSource = param.trafficSource
            if ("webhookUrl" in param) content.webhookUrl = param.webhookUrl
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

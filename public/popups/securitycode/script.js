function Pop() {
    let isShowed = false

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
        color: "#777777",
        logo: "example-logo.svg",
        afterXSeconds: "",
        afterPercentScroll: "",
        trafficSource: "",
        webhookUrl: "",
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
            button1Obj.addEventListener("click", function (e) {
                e.currentTarget.parentNode.parentNode.remove()
            })
            button1Obj.innerText = content.contents.content4
            content4DivObj.appendChild(button1Obj)
            button2Obj = document.createElement("BUTTON")
            button2Obj.addEventListener("click", function (e) {
                e.currentTarget.parentNode.parentNode.remove()
            })
            button2Obj.innerText = content.contents.content5
            button2Obj.style.backgroundColor = content.color
            if (content.webhookUrl != "") {
                button2Obj.addEventListener("click", () => {
                    const necessaryInfo = getNecessaryInfo()
                    let data = new FormData()
                    data.append("info", JSON.stringify(necessaryInfo))
                    const fetchResponse = fetch(`${content.webhookUrl}`, {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: data,
                    })
                        .then((response) => {
                            // console.log(response)
                        })
                        .catch((error) => {
                            // console.log(error)
                        })
                })
            }
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
                language: navigator.language || navigator.userLanguage,
                contents: {
                    content3: content3DivObj.value,
                },
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
                        if (!isShowed) {
                            isShowed = true
                            document.body.appendChild(conDivObj)
                        }
                    }
                })
            }

            if (content.afterXSeconds != "") {
                setTimeout(() => {
                    if (!isShowed) {
                        isShowed = true
                        document.body.appendChild(conDivObj)
                    }
                    // document.body.appendChild(conDivObj)
                }, Number(content.afterXSeconds) * 1000)
            }
        }
    }

    this.init = function (param) {
        if (typeof param === "object") {
            if ("size" in param) content.size = param.size
            if ("position" in param) content.position = param.position
            if ("color" in param) content.color = param.color
            if ("logo" in param) content.logo = param.logo
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
                if ("content5" in param["contents"])
                    content.contents.content5 = param["contents"]["content5"]
            }
            createPopUp()
        }
    }
}

window.start = new Pop()

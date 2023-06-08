import {immerable} from "immer"

export interface IPopup{
    size: 'small' | 'medium' | 'large';
    position: 'top-left' | 'top-center' | 'top-right' |
              'middle-left' | 'middle-center' | 'middle-right' |
              'bottom-left' | 'bottom-center' | 'bottom-right';   
    color: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
    visitorDevice: 'mobile' | 'desktop' | 'mobile&desktop';
    afterXSeconds: number;
    afterPercentScroll: number;
    trafficSource: string;
    exitIntentTargeting: boolean;
    webhookUrl: string
    contents: object // Mandatory in real classes

    logoBase64?: string 
    imageBase64?: string
}

abstract class Popup implements IPopup {
    [immerable] = true

    size: 'small' | 'medium' | 'large';
    position: 'top-left' | 'top-center' | 'top-right' |
    'middle-left' | 'middle-center' | 'middle-right' |
    'bottom-left' | 'bottom-center' | 'bottom-right';   
    color: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
    visitorDevice: 'mobile' | 'desktop' | 'mobile&desktop';
    afterXSeconds: number;
    afterPercentScroll: number;
    trafficSource: string;
    exitIntentTargeting: boolean;
    webhookUrl: string

    abstract contents: object // To make mandatory in child

    constructor() {
        this.size = "large"
        this.position = "middle-center"
        this.color = "blue"
        this.visitorDevice = "desktop"
        this.afterXSeconds = 0
        this.afterPercentScroll = 0
        this.trafficSource = "ExampleTrafficSource"
        this.exitIntentTargeting = false
        this.webhookUrl = "url.example.com"
    }
}

export class SecurityCodePopup extends Popup{
    contents: object
    constructor(){
        super()
        this.contents = {
            content1: "Security Code",
            content2: "This code expires in 24 hours",
            content3: "Code",
            content4: "Cancel",
            content5: "Continue"
        }
        this.logoBase64 = "exampleLogoBase64"
    }
    logoBase64: string 
}

export class InstallLocalNowPopup extends Popup{
    contents: object
    constructor(){
        super()
        this.contents = {
            content1: "Install local now",
            content2: "We've gone native, try it!",
            content3: "Continue",
            content4: "Not now"
        }
        this.imageBase64 = "exampleImageBase64"
    }
    imageBase64: string 
}




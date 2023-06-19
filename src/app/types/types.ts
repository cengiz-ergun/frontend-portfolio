import {immerable} from "immer"

export type UploadState = "active" | "passive"

export interface IPopup{
    size: 'small' | 'medium' | 'large';
    position: 'top-left' | 'top-center' | 'top-right' |
              'middle-left' | 'middle-center' | 'middle-right' |
              'bottom-left' | 'bottom-center' | 'bottom-right';   
    color: '#000000' | '#F37C34' | '#777777' | '#4287f5' | '#42f563';
    visitorDevice: 'mobile' | 'desktop' | 'mobile&desktop';
    afterXSeconds: string;
    afterPercentScroll: number;
    trafficSource: string;
    exitIntentTargeting: boolean;
    webhookUrl: string
    contents: object // Mandatory in real classes

    // Initially these are file names which are available in public directory. When user upload new photo or logo, they become file URL
    logoFileName?: string 
    imageFileName?: string
}

abstract class Popup implements IPopup {
    [immerable] = true

    size: 'small' | 'medium' | 'large';
    position: 'top-left' | 'top-center' | 'top-right' |
    'middle-left' | 'middle-center' | 'middle-right' |
    'bottom-left' | 'bottom-center' | 'bottom-right';   
    color: '#000000' | '#F37C34' | '#777777' | '#4287f5' | '#42f563';
    visitorDevice: 'mobile' | 'desktop' | 'mobile&desktop';
    afterXSeconds: string;
    afterPercentScroll: number;
    trafficSource: string;
    exitIntentTargeting: boolean;
    webhookUrl: string

    abstract contents: object // To make mandatory in child

    constructor() {
        this.size = "medium"
        this.position = "middle-center"
        this.color = "#777777"
        this.visitorDevice = "desktop"
        this.afterXSeconds = "6"
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
        this.logoFileName = "example-logo.svg"
    }
    logoFileName: string 
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
        this.imageFileName = "example-image.png"
    }
    imageFileName: string 
}




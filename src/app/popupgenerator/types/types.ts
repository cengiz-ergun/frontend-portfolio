
export interface CommonFields{
    size: 'Small' | 'Medium' | 'Large';
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
    contents: object
}

export interface SecurityCode extends CommonFields{
    logo: string;    
}

export const initialSecurityCode: SecurityCode = {
    logo : 'exampleLogo',
    size: 'Medium',
    position: 'middle-center',
    color: 'blue',
    visitorDevice: 'desktop',
    afterXSeconds: 0,
    afterPercentScroll: 0,
    trafficSource: 'exampleTrafficSource',
    exitIntentTargeting: false,
    webhookUrl: 'exampleUrl',
    contents: {
        content1: "Security Code",
        content2: "This code expires in 24 hours",
        content3: "Code",
        content4: "Cancel",
        content5: "Continue"
    }
}







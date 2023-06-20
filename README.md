# Popup Generator
This application is inspired from [popupsmart](https://popupsmart.com/).

## Tech
[Next.js](https://nextjs.org/) - The React Framework <br />
[Vercel](https://vercel.com/) - Deployment&Hosting <br />
[Tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework <br />
[Github Actions](https://github.com/features/actions) - For CI-CD platform <br />
[Cypress](https://www.cypress.io/) - For e2e test <br />
[Context API and Reducer](https://react.dev/learn/scaling-up-with-reducer-and-context) - For managing state <br />
[Uploadthing](https://uploadthing.com/) - For uploading images
 

## Details
 :white_check_mark: In the first step, users need to select a particular template from the grid of different styles. This selection will allow them to proceed to the next step.<br /><br />
 :white_check_mark: In the second step, users must choose the size of the popup, select a color, and upload the product logo.<br /><br />
 :white_check_mark: In the third step, users need to customize the popup content according to their preferences. The fields should be modified based on the existing fields within the selected popup.
        All changes made should be reflected in the preview section located beside the third step. The preview should sync with every modification in the popups.<br /><br />
        
:black_square_button: In the fourth step, users are required to select the device type on which the popups will appear.
    Users can configure their popups to be displayed based on the source from which visitors are coming and specific browser languages. Multiple languages can be added.
        All audience settings can be switched on/off using a toggle.<br /><br />
        
:white_check_mark: In the fifth step, users must define visitor behavior to determine when the popups will be shown.
        They need to specify the number of seconds after which the popups will appear, set a scroll percentage threshold that triggers a popup campaign when the user scrolls a certain percentage of a webpage.
        All behavior settings can be switched on/off using a toggle.
        Behavior settings should work independently, meaning if the user selects a 5-second delay and a 50% scroll threshold, the popup should be triggered in either case.
        The frequency of the popups appearing can be preset. All popups will appear once in every session and stop displaying after users click the close button or submit any data to the popups.<br /><br />
<!-- :white_check_mark: In the fifth step, users must define visitor behavior to determine when the popups will be shown.
        They need to specify the number of seconds after which the popups will appear, set a scroll percentage threshold that triggers a popup campaign when the user scrolls a certain percentage of a webpage, and decide on the exit intent that displays the popups when a visitor moves the cursor towards the exit button. The exit intent feature is only available for desktop campaigns.
        All behavior settings can be switched on/off using a toggle.
        Behavior settings should work independently, meaning if the user selects a 5-second delay and a 50% scroll threshold, the popup should be triggered in either case.
        The frequency of the popups appearing can be preset. All popups will appear once in every session and stop displaying after users click the close button or submit any data to the popups.<br /><br /> -->
:white_check_mark: In the final step, users must be able to send the collected data from the popups through a Webhook. Required system variables from the Webhook include form input variables, date and time, browser language and name, operating system.
        Users can create a Webhook endpoint with make.com to test it.
        The submission fields and click data names in the popups must be the same, and they should be selected as default values if used in the popups.
    Users should receive the necessary assets to display the modal in the UI.
        This includes HTML code to embed on the website, a modal div code with all components styled using Tailwind CSS.
        They should also receive a hosted script that will trigger the modal based on the given conditions.
        The selected trigger configurations should be provided as parameters in that script.
<!-- - [ ] In the final step, users must be able to send the collected data from the popups through a Webhook. Required system variables from the Webhook include form input variables, date and time, browser language and name, operating system, and device type (mobile or desktop).
        Users can create a Webhook endpoint with make.com to test it.
        The submission fields and click data names in the popups must be the same, and they should be selected as default values if used in the popups.
    Users should receive the necessary assets to display the modal in the UI.
        This includes HTML code to embed on the website, a modal div code with all components styled using Tailwind CSS.
        They should also receive a hosted script that will trigger the modal based on the given conditions.
        The selected trigger configurations should be provided as parameters in that script. -->

import { UploadLogoImage } from "@root/src/app/components/PopupSetupAndPreviewContainer/Setup/UploadLogoImage"

describe('UploadLogoImage.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<UploadLogoImage imageOrLogo="logo"/>)
  })
})
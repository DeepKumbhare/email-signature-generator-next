import { RefObject, forwardRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const EmailSignatureTemplate1 = forwardRef((props, ref) => {
  const inputData = useSelector((state: any) => state.inputData);

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      {inputData.map((data: any) => (
        <div key={data.id} className="email-signature">
          <table
            width="100%"
            style={{
              fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
              textAlign: 'center',
              margin: '0 auto',
              paddingLeft: '56px',
              paddingRight: '56px',
              color: data.textColor,
            }}
          >
            <tbody>
              {/* Profile Image */}
              <tr>
                {data.img &&
                  <td style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                    {/* Retained img tag for profile image */}
                    <Image
                      src={data.img}
                      width={150}
                      height={150}
                      alt="Picture of the author"
                      style={{ borderRadius: '9999px', display: 'inline-block' }}
                    />
                  </td>
                }

              </tr>

              {/* Name and Title */}
              <tr>
                <td style={{ textAlign: 'center' }}>
                  <table style={{ margin: '0 auto' }}>
                    <tbody>
                      <tr>
                        {data.firstName && <td style={{ fontSize: '16px', fontWeight: 600 }}>{data.firstName} </td>}
                        {data.lastName && <td style={{ fontSize: '16px', fontWeight: 600, paddingLeft: '6px' }}>{data.lastName}</td>}
                      </tr>
                    </tbody>
                  </table>

                  {data.jobTitle && <div style={{ fontSize: '14px' }}>{data.jobTitle}</div>}
                  {data.company && <div style={{ fontSize: '14px' }}>{data.company}</div>}

                  <div style={{ marginTop: '16px', marginBottom: '16px', borderBottom: '1px solid'+data.themeColor }}></div>
                </td>
              </tr>

              {/* Contact Info */}
              <tr>
                <td>
                  <table style={{ margin: '0 auto', fontSize: '14px', textAlign: 'left' }}>
                    <tbody>
                      <tr>
                        {
                          data.phone && (
                            <>
                              <td style={{ paddingRight: '8px' }}>
                                <Image
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                  width={13}
                                  height={13}
                                  alt="emailAddress"
                                  style={{ backgroundColor: data.themeColor }}
                                />
                              </td>

                              <td>{data.phone}</td>
                            </>
                          )
                        }
                      </tr>

                      <tr>
                        {
                          data.email && (
                            <>
                              <td style={{ paddingRight: '8px' }}>
                                <Image
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                  width={13}
                                  height={13}
                                  alt="mobilePhone"
                                  style={{ backgroundColor: data.themeColor }}
                                />
                              </td>
                              <td>{data.email}</td>
                            </>
                          )
                        }
                      </tr>

                      <tr>
                        {
                          data.website && (
                            <>
                              <td style={{ paddingRight: '8px' }}>
                                <Image
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                  width={13}
                                  height={13}
                                  alt="website"
                                  style={{ backgroundColor: data.themeColor }}
                                />
                              </td>
                              <td>{data.website}</td>
                            </>
                          )
                        }
                      </tr>

                      <tr>
                        {
                          data.address && (
                            <>
                              <td style={{ paddingRight: '8px' }}>
                                <Image
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                  width={13}
                                  height={13}
                                  alt="address"
                                  style={{ backgroundColor: data.themeColor }}
                                />
                              </td>
                              <td>{data.address}</td>
                            </>
                          )
                        }
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ marginTop: '16px', marginBottom: '16px', borderBottom: '1px solid'+data.themeColor }}></div>
                </td>
              </tr>

              {/* Social Media Links */}
              <tr>
                <td>
                  {/* Social media links wrapped in a table */}
                  <table style={{ margin: '0 auto', textAlign: 'center' }}>
                    <tbody>
                      <tr>
                        <td>
                          {/* Social media icons as anchor tags */}
                          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" style={{ paddingRight: '8px', display: 'inline-block' }}>
                            <Image
                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                              width={24}
                              height={24}
                              alt="address"
                              style={{ backgroundColor: data.linkColor }}
                            />
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ paddingRight: '8px', display: 'inline-block' }}>
                            <Image
                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                              width={24}
                              height={24}
                              alt="address"
                              style={{ backgroundColor: data.linkColor }}
                            />
                          </a>
                          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" style={{ paddingRight: '8px', display: 'inline-block' }}>
                            <Image
                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                              width={24}
                              height={24}
                              alt="address"
                              style={{ backgroundColor: data.linkColor }}
                            />
                          </a>
                          <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                            <Image
                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                              width={24}
                              height={24}
                              alt="address"
                              style={{ backgroundColor: data.linkColor }}
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
});

EmailSignatureTemplate1.displayName = 'Email Signature'
export default EmailSignatureTemplate1;
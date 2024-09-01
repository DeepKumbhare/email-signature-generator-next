import { RefObject, forwardRef, use } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

// eslint-disable-next-line react/display-name
const EmailSignature = forwardRef((props, ref) => {
  const inputData = useSelector((state: any) => state.inputData);

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      <table
        style={{
          width: "100%",
          maxWidth: "600px",
          fontFamily: "Arial, sans-serif",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "20px" }}>
              <table style={{ width: "100%" }}>
                <tbody>
                  {inputData.map((data: any) => (
                    <tr key={data.id}>
                      {data.img && (
                        <td style={{ padding: "0 10px 10px 0" }}>
                          <Image
                            src={data.img}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                          />
                        </td>
                      )}
                      <td style={{ padding: "0 10px" }}>
                        <table style={{ width: "100%" }}>
                          <tbody>
                            {data.name && (
                              <tr>
                                <td
                                  style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "bold",
                                    color: "#111827",
                                  }}
                                >
                                  {data.name}
                                </td>
                              </tr>
                            )}
                            {data.title && (
                              <tr>
                                <td
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    color: "#6b7280",
                                  }}
                                >
                                  {data.title}
                                </td>
                              </tr>
                            )}
                            {data.email && (
                              <tr>
                                <td
                                  style={{
                                    padding: "10px 0",
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.375rem",
                                  }}
                                >
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#0f0"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                                  <a
                                    href="mailto:johndoe@example.com"
                                    style={{
                                      color: "#1d4ed8",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {data.email}
                                  </a>
                                </td>
                              </tr>
                            )}
                            {data.phone && (
                              <tr>
                                <td
                                  style={{
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.375rem",
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#f00"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                                  <a
                                    href="tel:+1234567890"
                                    style={{
                                      color: "#1d4ed8",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {data.phone}
                                  </a>
                                </td>
                              </tr>
                            )}

                            <tr>
                              {data.facebook && (
                                <td
                                  style={{
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                  }}
                                >
                                  <a
                                    href={data.facebook}
                                    style={{
                                      color: "#1d4ed8",
                                      textDecoration: "none",
                                    }}
                                    target="_blank"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
                                  </a>
                                </td>
                              )}

                              {data.linkedin && (
                                <td
                                  style={{
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                  }}
                                >
                                  <a
                                    href={data.linkedin}
                                    style={{
                                      color: "#1d4ed8",
                                      textDecoration: "none",
                                    }}
                                    target="_blank"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                  </a>
                                </td>
                              )}

                              {data.twitter && (
                                <td
                                  style={{
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                  }}
                                >
                                  <a
                                    href={data.twitter}
                                    style={{
                                      color: "#1d4ed8",
                                      textDecoration: "none",
                                    }}
                                    target="_blank"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
                                  </a>
                                </td>
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table
                style={{
                  width: "100%",
                  borderTop: "1px solid #e5e7eb",
                  paddingTop: "10px",
                }}
              >
                {inputData.map((data: any) => (
                  <tbody key={data.id}>
                    {data.company && (
                      <tr>
                        <td style={{ fontSize: "0.875rem", color: "#374151" }}>
                          Company:{" "}
                          <span style={{ fontWeight: "500" }}>
                            {data.company}
                          </span>
                        </td>
                      </tr>
                    )}
                    {data.website && (
                      <tr>
                        <td style={{ fontSize: "0.875rem", color: "#374151" }}>
                          Website:{" "}
                          <a
                            href="https://www.example.com"
                            style={{ color: "#1d4ed8", textDecoration: "none" }}
                          >
                            {data.website}
                          </a>
                        </td>
                      </tr>
                    )}
                    {data.address && (
                      <tr>
                        <td style={{ fontSize: "0.875rem", color: "#374151" }}>
                          Address:{" "}
                          <span style={{ fontWeight: "500" }}>
                            {data.address}
                          </span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                ))}
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

// EmailSignature.displayName = 'EmailSignature'

export default EmailSignature;

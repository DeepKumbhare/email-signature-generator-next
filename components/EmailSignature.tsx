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
                                  }}
                                >
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
                                  }}
                                >
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

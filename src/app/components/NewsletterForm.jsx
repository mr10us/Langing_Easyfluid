"use client";

import React, { useEffect } from "react";

export const NewsletterForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://hyis-zgph.maillist-manage.net/js/optin.min.js";
    script.onload = () => {
      window.setupSF(
        "sf3z421b3aa3f7a4bcb5a5cbff80a28c596673c6d0ff02d85a58b01c85ec3a9d85c8",
        "ZCFORMVIEW",
        false,
        "light",
        false,
        "0"
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const runOnFormSubmit = (event) => {
    // Include your custom form submission logic here
    // This function is triggered on form submission
    console.log("Form submitted:", event.target);
  };

  return (
    <>
      <script
        type="text/javascript"
        src="https://hyis-zgph.maillist-manage.net/js/optin.min.js"
        onLoad={() =>
          window.setupSF(
            "sf3z421b3aa3f7a4bcb5a5cbff80a28c596673c6d0ff02d85a58b01c85ec3a9d85c8",
            "ZCFORMVIEW",
            false,
            "light",
            false,
            "0"
          )
        }
      ></script>

      <>
        <div
          id="sf3z421b3aa3f7a4bcb5a5cbff80a28c596673c6d0ff02d85a58b01c85ec3a9d85c8"
          data-type="signupform"
          style={{ opacity: 1 }}
        >
          <div id="customForm">
            <div
              id="customForm"
              className="quick_form_11_css max-w-[480px] md:w-full"
              style={{
                backgroundColor: "rgb(7, 59, 108)",
                zIndex: 2,
                fontFamily: "Arial",
                borderWidth: "4px 1px 1px",
                borderStyle: "solid",
                borderColor:
                  "rgb(255, 96, 93) rgb(235, 235, 235) rgb(235, 235, 235)",
                overflow: "hidden",
              }}
              name="SIGNUP_BODY"
            >
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: '"Arial"',
                    fontWeight: "bold",
                    color: "rgb(255, 255, 255)",
                    textAlign: "left",
                    padding: "15px 20px 5px",
                    width: "100%",
                    display: "block",
                  }}
                  id="SIGNUP_HEADING"
                >
                  Join Our Newsletter
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    id="Zc_SignupSuccess"
                    style={{
                      display: "none",
                      position: "absolute",
                      marginLeft: "4%",
                      width: "90%",
                      backgroundColor: "white",
                      padding: 3,
                      border: "3px solid rgb(194, 225, 154)",
                      marginTop: 10,
                      marginBottom: 10,
                      wordBreak: "break-all",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                    >
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img
                              className="successicon"
                              src="https://hyis-zgph.maillist-manage.net/images/challangeiconenable.jpg"
                              align="absmiddle"
                            />
                          </td>
                          <td>
                            <span
                              id="signupSuccessMsg"
                              style={{
                                color: "rgb(73, 140, 132)",
                                fontFamily: "sans-serif",
                                fontSize: 14,
                                wordBreak: "break-word",
                              }}
                            >
                              &nbsp;&nbsp;Thank you for Signing Up
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <form
                  method="POST"
                  id="zcampaignOptinForm"
                  className="m-0 w-full block md:flex flex-col"
                  action="https://hyis-zgph.maillist-manage.net/weboptin.zc"
                  target="_zcSignup"
                >
                  <div
                    style={{
                      backgroundColor: "rgb(255, 235, 232)",
                      padding: 10,
                      color: "rgb(210, 0, 0)",
                      fontSize: 11,
                      margin: "20px 10px 0px",
                      border: "1px solid rgb(255, 217, 211)",
                      opacity: 1,
                      display: "none",
                    }}
                    id="errorMsgDiv"
                  >
                    Please correct the marked field(s) below.
                  </div>
                  <div
                    style={{
                      position: "relative",
                      margin: "25px 0 15px 15px",
                      width: 150,
                      height: 28,
                      display: "inline-block",
                    }}
                    className="SIGNUP_FLD"
                  >
                    <input
                      type="text"
                      style={{
                        fontSize: 12,
                        borderWidth: "0 0 1px",
                        borderColor: "rgb(132, 156, 179)",
                        borderStyle: "solid",
                        width: "100%",
                        height: "100%",
                        zIndex: 4,
                        outline: "none",
                        padding: "5px 10px",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: '"Arial"',
                        borderRadius: 0,
                        backgroundColor: "transparent",
                      }}
                      placeholder="Email"
                      changeitem="SIGNUP_FORM_FIELD"
                      name="CONTACT_EMAIL"
                      id="EMBED_FORM_EMAIL_LABEL"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      margin: "15px 15px 15px 15px",
                      width: 150,
                      height: 28,
                      display: "inline-block",
                    }}
                    className="SIGNUP_FLD"
                  >
                    <input
                      type="text"
                      style={{
                        fontSize: 12,
                        borderWidth: "0 0 1px",
                        borderColor: "rgb(132, 156, 179)",
                        borderStyle: "solid",
                        width: "100%",
                        height: "100%",
                        zIndex: 4,
                        outline: "none",
                        padding: "5px 10px",
                        color: "rgb(255, 255, 255)",
                        textAlign: "left",
                        fontFamily: '"Arial"',
                        borderRadius: 0,
                        backgroundColor: "transparent",
                      }}
                      placeholder="Name"
                      changeitem="SIGNUP_FORM_FIELD"
                      name="LASTNAME"
                      id="EMBED_FORM_NAME_LABEL"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: 100,
                      height: 28,
                      margin: "0 12px 15px 12px",
                      display: "inline-block",
                    }}
                    className="SIGNUP_FLD"
                  >
                    <input
                      type="button"
                      style={{
                        textAlign: "center",
                        width: "100%",
                        height: "100%",
                        zIndex: 5,
                        border: 0,
                        color: "rgb(0, 0, 0)",
                        cursor: "pointer",
                        outline: "currentcolor",
                        fontSize: 14,
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: 0,
                      }}
                      name="SIGNUP_SUBMIT_BUTTON"
                      id="zcWebOptin"
                      defaultValue="Join Now"
                    />
                  </div>
                  <input type="hidden" id="fieldBorder" defaultValue="" />
                  <input
                    type="hidden"
                    id="submitType"
                    name="submitType"
                    defaultValue="optinCustomView"
                  />
                  <input
                    type="hidden"
                    id="emailReportId"
                    name="emailReportId"
                    defaultValue=""
                  />
                  <input
                    type="hidden"
                    id="formType"
                    name="formType"
                    defaultValue="QuickForm"
                  />
                  <input
                    type="hidden"
                    name="zx"
                    id="cmpZuid"
                    defaultValue="12750209f"
                  />
                  <input type="hidden" name="zcvers" defaultValue={3.0} />
                  <input
                    type="hidden"
                    name="oldListIds"
                    id="allCheckedListIds"
                    defaultValue=""
                  />
                  <input
                    type="hidden"
                    id="mode"
                    name="mode"
                    defaultValue="OptinCreateView"
                  />
                  <input type="hidden" id="zcld" name="zcld" defaultValue="" />
                  <input type="hidden" id="zctd" name="zctd" defaultValue="" />
                  <input type="hidden" id="document_domain" defaultValue="" />
                  <input
                    type="hidden"
                    id="zc_Url"
                    defaultValue="hyis-zgph.maillist-manage.net"
                  />
                  <input
                    type="hidden"
                    id="new_optin_response_in"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    id="duplicate_optin_response_in"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    name="zc_trackCode"
                    id="zc_trackCode"
                    defaultValue="ZCFORMVIEW"
                  />
                  <input
                    type="hidden"
                    id="zc_formIx"
                    name="zc_formIx"
                    defaultValue="3z421b3aa3f7a4bcb5a5cbff80a28c596673c6d0ff02d85a58b01c85ec3a9d85c8"
                  />
                  <input
                    type="hidden"
                    id="viewFrom"
                    defaultValue="URL_ACTION"
                  />
                  <span style={{ display: "none" }} id="dt_CONTACT_EMAIL">
                    1,true,6,Contact Email,2
                  </span>
                  <span style={{ display: "none" }} id="dt_FIRSTNAME">
                    1,false,1,First Name,2
                  </span>
                  <span style={{ display: "none" }} id="dt_LASTNAME">
                    1,false,1,Last Name,2
                  </span>
                </form>
              </div>
            </div>
          </div>
          <img
            src="https://hyis-zgph.maillist-manage.net/images/spacer.gif"
            id="refImage"
            onLoad={() => "referenceSetter(this)"}
            style={{ display: "none" }}
          />
        </div>
        <input
          type="hidden"
          id="signupFormType"
          defaultValue="QuickForm_Horizontal"
        />
        <div
          id="zcOptinOverLay"
          onContextMenu={() => "return false"}
          style={{
            display: "none",
            textAlign: "center",
            backgroundColor: "rgb(0, 0, 0)",
            opacity: "0.5",
            zIndex: 100,
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            height: 988,
          }}
        />
        <div
          id="zcOptinSuccessPopup"
          style={{
            display: "none",
            zIndex: 9999,
            width: 800,
            height: "40%",
            top: 84,
            position: "fixed",
            left: "26%",
            backgroundColor: "#FFFFFF",
            borderColor: "#E6E6E6",
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: "0 1px 10px #424242",
            padding: 35,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-16px",
              right: "-14px",
              zIndex: 99999,
              cursor: "pointer",
            }}
            id="closeSuccess"
          >
            <img src="https://hyis-zgph.maillist-manage.net/images/videoclose.png" />
          </span>
          <div id="zcOptinSuccessPanel" />
        </div>
      </>
    </>
  );
};

import React, { useRef, useState } from "react";
import "./template.style.css";
import DragDrop from "./DragDrop";
import ReactLanguageSelect from "react-languages-select";
import "react-languages-select/css/react-languages-select.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import ReactSummernote from 'react-summernote';
// import 'react-summernote/dist/react-summernote.css'; // import styles
// import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

// import 'bootstrap/js/modal';
// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';

import image from "../images/account-image.svg";

import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function Template() {
  // Remove a few plugins from the default setup.

  // ClassicEditor
  // .create( document.querySelector( '#editor' ), {
  // toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ]
  // } )
  // .then( editor => {
  // console.log( 'Editor was initialized', editor );
  // } )
  // .catch( error => {
  // console.log( error );
  // } );

  // myeditor = {toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ] }

  /* Start PDF Code */
  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" }
  ];

  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4"
  });

  const updatePageLayout = event => {
    setLayoutSelection(event.target.value);
  };

  const pdfExportComponent = useRef(null);

  const downloadPDF = event => {
    pdfExportComponent.current.save();
  };

  /* End PDF Code */


  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  // console.log("SELECT", select);

  let [firstName, setfirstName] = useState("Usha");
  let [profile_summary, setprofile_summary] = useState(`Hardworking and experienced receptionist with several years of experience serving as a supporting and integral employee in high volume client settings.
  Experienced in creating schedules, marking appointments, setting products, and provinding clients with optimal customer service. Bringing fourth the ability to manage front desk settings with poise and grace, in addition to managing a variety of administrative duties.
  Eager to join a new people an assist them as a dedicated and passionate receptionist.`);

  const [editing, setEditing] = useState(false);
  const [heading, setHeading] = useState("Personal Details");

  let handleEditClick = () => {
    setEditing(true);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  let toggleDetails = () => {
    setEditing(!editing);
  };

  return (
    <div className="resume-builder">
      <div className="resume-body">
        <div className="resume-content">
          <div className="resume-left">
            <div className="resume-account">
              <div className="resume-acc-content">
                <div className="resume-account1">
                  <button type="button">
                    <img
                      src={image}
                      alt="account-image.svg"
                      className="account-image"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="resume-left-part">
              <div className="resume-left-content">
                <div className="resume-title">
                  <div className="title-content">
                    <div className="content-box">
                      <input placeholder="Untitled" />
                    </div>
                  </div>
                </div>

                <div className="lang-body">
                  <div className="lang-selector">
                    <div className="lang-content">
                      <div className="country-flag"></div>
                      {/* <ReactLanguageSelect
                        defaultLanguage="en"
                        searchable={true}
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="score-body">
                  <div className="score-content">
                    <div className="score-left-body">
                      <div className="score-percent">0%</div>
                      <p className="resume-para">Resume Score</p>
                    </div>
                    <div className="resume-profile-body">
                      <div className="resume-profile-content">
                        <div>
                          <div className="profile-body">
                            <p>Add profile summary</p>
                            <div className="profile-sum-percent">
                              <p>+15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile-sum-suggest">
                        <HelpIcon className="profile-sum-ques" />
                      </div>
                    </div>
                  </div>
                  <div className="resume-hr-body">
                    <div className="resume-hr-content"></div>
                  </div>
                </div>

                <div className="personal-details">
                  <div className="details-heading-content">
                    <div className="header-label">
                      {editing ? (
                        <div>
                          <input
                            type="text"
                            id="personal-details"
                            value={heading}
                            onChange={handleHeadingChange}
                            onBlur={handleBlur}
                            className="handle-input"
                          />
                        </div>
                      ) : (
                        <div className="handle-heading">
                          <h3>{heading}</h3>
                          <button onClick={handleEditClick}>
                            <EditIcon />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="input-section">
                    <div className="job-title-section field-section">
                      <div className="help-icon">
                        <label className="input-label">Wanted Job Title</label>
                        <Tooltip
                          title="Add a title like 'Senior Marketer' or 'Sales Executive' 
                        that quickly describes your overall experience or the type of role you are applying to"
                          arrow
                          placement="top"
                        >
                          <HelpOutlineIcon></HelpOutlineIcon>
                        </Tooltip>
                      </div>

                      <div className="job-title-body">
                        <input
                          type="text"
                          className="field-input"
                          name="job-title"
                          placeholder="e.g Teacher"
                        />
                      </div>
                    </div>

                    <div className="photo-body field-section">
                      <div className="photo-content">
                        <input
                          type="file"
                          accept="image/* , jpeg, jpg, png, gif "
                          className="photo-input"
                        />
                        <div className="photo-container">
                          <div className="image-container">
                            <PersonIcon className="person-pic" />
                          </div>
                          <div className="upload-photo-body">
                            <p>Upload photo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="name-section input-section">
                    <div className="firstname-section field-section">
                      <label className="input-label">First Name</label>
                      <div className="fname-input-body">
                        <input
                          type="text"
                          className="field-input"
                          name="firstname"
                          value={firstName}
                        />
                      </div>
                    </div>

                    <div className="lastname-section  field-section">
                      <label className="input-label">Last Name</label>
                      <div className="lname-input-body">
                        <input
                          type="text"
                          name="lastname"
                          className="field-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="email-phone-section input-section">
                    <div className="email-section field-section">
                      <label className="input-label">Email</label>
                      <div className="email-input-body">
                        <input
                          type="text"
                          className="field-input"
                          name="email"
                        />
                      </div>
                    </div>

                    <div className="phone-section field-section">
                      <label className="input-label">Phone</label>
                      <div className="phone-input-body">
                        <input
                          type="text"
                          name="phone"
                          className="field-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="country-city-section input-section">
                    <div className="country-section field-section">
                      <label className="input-label">Country</label>
                      <div className="country-input-body">
                        <input
                          type="text"
                          className="field-input"
                          name="country"
                        />
                      </div>
                    </div>

                    <div className="city-section field-section">
                      <label className="input-label">City</label>
                      <div className="city-input-body">
                        <input
                          type="text"
                          name="city"
                          className="field-input"
                        />
                      </div>
                    </div>
                  </div>

                  {editing ? (
                    <div>
                      <div className="address-code-section input-section">
                        <div className="address-section field-section">
                          <label className="input-label">Address</label>
                          <div className="address-input-body">
                            <input
                              type="text"
                              className="field-input"
                              name="address"
                            />
                          </div>
                        </div>

                        <div className="code-section field-section">
                          <label className="input-label">Postal Code</label>
                          <div className="code-input-body">
                            <input
                              type="text"
                              name="code"
                              className="field-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="driving-nationality-section input-section">
                        <div className="driving-section field-section">
                          <div className="help-icon">
                            <label className="input-label">
                              Driving License
                            </label>
                            <HelpOutlineIcon></HelpOutlineIcon>
                          </div>
                          <div className="driving-input-body">
                            <input
                              type="text"
                              className="field-input"
                              name="driving"
                            />
                          </div>
                        </div>

                        <div className="nationality-section field-section">
                          <div className="help-icon">
                            <label className="input-label">Nationality</label>
                            <HelpOutlineIcon></HelpOutlineIcon>
                          </div>
                          <div className="nationality-input-body">
                            <input
                              type="text"
                              name="nationality"
                              className="field-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pob-dob-section input-section">
                        <div className="pob-section field-section">
                          <label className="input-label">Place Of Birth</label>
                          <div className="pob-input-body">
                            <input
                              type="text"
                              className="field-input"
                              name="pob"
                            />
                          </div>
                        </div>

                        <div className="dob-section field-section">
                          <div className="help-icon">
                            <label className="input-label">Date of Birth</label>
                            <HelpOutlineIcon></HelpOutlineIcon>
                          </div>
                          <div className="dob-input-body">
                            <input
                              type="text"
                              name="dob"
                              className="field-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-section">
                        <button onClick={toggleDetails} className="edit-button">
                          <div className="edit-details">
                            <span>Hide additional details</span>
                            <KeyboardArrowUpIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={toggleDetails} className="edit-button">
                      <div className="edit-details">
                        <span>Edit additional details</span>
                        <ExpandMoreIcon />
                      </div>
                    </button>
                  )}
                </div>

                <div className="professional-summary">
                  {/* <div id="editor"></div> */}
                  <div className="details-heading-content">
                    <div className="header-label">
                      <h3>Professional Summary</h3>
                    </div>
                  </div>
                  <div className="text-editor">
                    <span>
                      Write 2-4 short & energetic sentences to interest the
                      reader! Mention your role, experience & most importantly -
                      your biggest achievements, best qualities and skills.
                    </span>
                  </div>

                  <CKEditor
                    editor={ClassicEditor}
                    data={profile_summary}
                    onReady={(editor) => {
                      console.log(
                        "CKEditor5 React Component is ready to use!",
                        editor
                      );
                    }}
                    onChange={(event, editor) => {
                      // console.log({ event, editor, editor.getData() });
                      console.log(setprofile_summary(editor.getData()));
                    }}
                  />

                  {/*
                <ReactSummernote value="Default value" options={{ lang: 'ru-RU' , height: 350, dialogsInBody: true,
                  toolbar: [ ['style', ['style']], ['font', ['bold', 'underline' , 'clear' ]], ['fontname',
                  ['fontname']], ['para', ['ul', 'ol' , 'paragraph' ]], ['table', ['table']], ['insert',
                  ['link', 'picture' , 'video' ]], ['view', ['fullscreen', 'codeview' ]] ] }}
                  onChange={this.onChange} /> */}
                  <div>
                    <span>
                      Recruiter tip: write 50-200 characters to increase
                      interview chances
                    </span>
                  </div>
                </div>

                <div className="drag-drop-fields">
                  <DragDrop />
                </div>
              </div>
            </div>
          </div>

          <div className="resume-right">
            <div className="right-body">
              <button className="btn btn-primary" onClick={downloadPDF}>Download PDF</button>
              <PDFExport ref={pdfExportComponent}>
                <div className="preview-body">
                    <div className="profile-summary">
                      <h6>Profile</h6>
                      {profile_summary}
                    </div>
                </div>
              </PDFExport>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;

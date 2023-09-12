import React, { useRef, useState } from "react";
import "./template.style.css";

import "react-languages-select/css/react-languages-select.css";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import LinkIcon from "@mui/icons-material/Link";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DOMPurify from "dompurify";


import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InputMask from 'react-input-mask';

import { PDFExport} from "@progress/kendo-react-pdf";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

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
  // const ddData = [
  //   { text: "A4", value: "size-a4" },
  //   { text: "Letter", value: "size-letter" },
  //   { text: "Executive", value: "size-executive" },
  // ];

  // const [layoutSelection, setLayoutSelection] = useState({
  //   text: "A4",
  //   value: "size-a4",
  // });

  // const updatePageLayout = (event) => {
  //   setLayoutSelection(event.target.value);
  // };

  const pdfExportComponent = useRef(null);

  const downloadPDF = (event) => {
    pdfExportComponent.current.save();
  };

  /* End PDF Code */

  const [select, setSelect] = useState("SE");
  // const onSelect = (code) => setSelect(code);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [pdetails, setPdetails] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [code, setCode] = useState();
  const [license, setLicense] = useState();
  const [nation, setNation] = useState();
  const [pob, setpob] = useState();
  const [dob, setdob] = useState();
  // const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [editing, setEditing] = useState(false);
  const editingRef = useRef(editing);
  const [heading, setHeading] = useState("Personal Details");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [selectedEdus, setSelectedEdus] = useState([]);
  const [selectedEmps, setSelectedEmps] = useState([]);
  const [showMoreSkill, setShowMoreSkill] = useState();
  const [showMoreLink, setShowMoreLink] = useState();
  const [showMoreEdu, setShowMoreEdu] = useState();
  const [showMoreEmp, setshowMoreEmp] = useState();
  // const [draggedComponents, setDraggedComponents] = useState([]);
  const [profile_summary, setprofile_summary] = useState("");
  const [education_summary, seteducation_summary] = useState("");
  const [job_summary, setjob_summary] = useState("");
  const [showSkillsHeading, setShowSkillsHeading] = useState(false);
  const [showEdusHeading, setShowEdusHeading] = useState(false);
  const [skillName, setSkillName] = useState();
  
  const [state, setState] = useState({
    items: [
      {
        label: "education",
        label_value: "Education Details",
        data: [],
        description:
          "A varied education on your resume sums up the value that your learnings and background will bring to job",
      },

      {
        label: "Websites and social links",
        label_value: "social profile Details",
        data: [],
        description: `You can add links to websites you want hiring managers to see! 
        Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website`,
      },

      {
        label: "Employment History",
        label_value: "Employment Details",
        data: [],
        description: `Show your relevant experience (last 10 years). 
        Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).`,
      },

      {
        label: "skill",
        label_value: "skill Details",
        data: [],
        description:
          "Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).",
      },
    ],
  });

  const inputRef = useRef(null);

  const handleImageChange = () => {
    const file = inputRef.current.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : "";

  // let [profile] = useState(`<p>profile_summary</p>`)
  let handleEditClick = () => {
    setEditing(true);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleBlur = () => {
    editingRef.current = false;
  };

  let toggleDetails = () => {
    setEditing(!editing);
  };

  const handleDeleteSkill = (index) => {
    const newSkills = selectedSkills.filter((_, i) => i !== index);
    setSelectedSkills(newSkills);
  };

  const handleDeleteEdu = (index) => {
    const newEdus = selectedEdus.filter((_, i) => i !== index);
    setSelectedEdus(newEdus);
  };

  function addMore(type) {
    if (type === "education") {
      setShowMoreEdu(!showMoreEdu);
    } else if (type === "skill") {
      setShowMoreSkill(!showMoreSkill);
    } else if (type === "Websites and social links") {
      setShowMoreLink(!showMoreLink);
    } else if (type === "Employment History") {
      setshowMoreEmp(!showMoreEmp);
    }
  }

  function RenderedContent({ content }) {
    const sanitizedContent = DOMPurify.sanitize(content);

    return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  }

  function getSkillLevelClass(skillLevel) {
    switch (skillLevel) {
      case "Novice":
        console.log('hello graph')
        return "1";
      case "Beginner":
        return "2";
      case "Skillful":
        return "3";
      case "Experienced":
        return "4";
      case "Expert":
        return "5";
      default:
        return "1"; // Default to Novice
    }
  }
  
  function addSkill(selectedSkills, new_skill, skill_level) {
    if (new_skill) {
      const updatedSkills = [
        ...selectedSkills,
        { skill_type: new_skill, level: skill_level },
      ];
      setSelectedSkills(updatedSkills);
    }
    setSkillName()
  }

  function handleSkill() {
    console.log(document.getElementById("new_skill").value)
    setSkillName(document.getElementById("new_skill").value);
  }

  function addEducation(
    selectedEdus,
    new_edu,
    new_degree,
    new_city,
    edu_ckedit
  ) {
    if (new_edu) {
      const updatedEdu = [
        ...selectedEdus,
        {
          edu_type: new_edu,
          edu_degree: new_degree,
          edu_city: new_city,
          edu_ckedit: edu_ckedit,
        },
      ];
      setSelectedEdus(updatedEdu);
    }
  }

  function addSocialLink(setSelectedLinks, new_link, link_label) {
    if (new_link) {
      const updatedLinks = [
        ...selectedLinks,
        { link_type: new_link, link: link_label },
      ];
      setSelectedLinks(updatedLinks);
    }
  }

  function addEmployment(
    selectedEmps,
    new_emp,
    new_employer,
    emp_city,
    job_ckedit
  ) {
    if (new_emp) {
      const updatedEmp = [
        ...selectedEmps,
        {
          emp_type: new_emp,
          emp_level: new_employer,
          emp_city: emp_city,
          job_ckedit: job_ckedit,
        },
      ];
      setSelectedEmps(updatedEmp);
    }
  }


  // const handleSelectLink = (selectedLink) => {
  //   setState((prevState) => ({
  //     selectedLinks: [...prevState.selectedLinks, selectedLink],
  //   }));
  //   // props.onSelectSkill(selectedSkill);
  // };

  // const handleSelectEdu = (selectedEdu) => {
  //   setState((prevState) => ({
  //     selectedEdus: [...prevState.selectedEdus, selectedEdu],
  //   }));
  // };

  // const handleSelectEmp = (selectedEmp) => {
  //   setState((prevState) => ({
  //     selectedEmps: [...prevState.selectedEmps, selectedEmp],
  //   }));
  // };

  // function handleAddSkill(skill_type, new_skill, skill_level) {
  //   if (skill_type)
  //     setSelectedSkills((prevSkills) => [
  //       ...prevSkills,
  //       { skill_type: new_skill, level: skill_level },
  //     ]);
  //   setShowSkillsHeading(true);
  // }

  const handleAddEducation = (
    edu_type,
    new_edu,
    edu_degree,
    new_degree,
    edu_city,
    new_city,
    edu_ckedit
  ) => {
    if (edu_type)
      setSelectedSkills((prevSkills) => [
        ...prevSkills,
        {
          edu_type: new_edu,
          edu_degree: new_degree,
          edu_city: new_city,
          edu_ckedit: edu_ckedit,
        },
      ]);
    setShowEdusHeading(true);
  };

  // const splitContentIntoPages = (content) => {
  //   const pageHeight = '800px'; // Define the height of each page
  //   const pages = [];

  //   let currentPage = [];
  //   let currentPageHeight = 0;

  //   for (const section of content) {
  //     const sectionHeight = '85vh';

  //     // Check if adding the section will exceed the page height
  //     if (currentPageHeight + sectionHeight > parseInt(pageHeight)) {
  //       pages.push(currentPage);
  //       currentPage = [section];
  //       currentPageHeight = sectionHeight;
  //     } else {
  //       currentPage.push(section);
  //       currentPageHeight += sectionHeight;
  //     }
  //   }

  //   // Push the last page
  //   if (currentPage.length > 0) {
  //     pages.push(currentPage);
  //   }

  //   return pages.map((pageSections, index) => (
  //     <div key={index} style={{ height: pageHeight, overflow: 'auto', pageBreakAfter: 'always' }}>
  //       {pageSections.map((section, sectionIndex) => (
  //         <div key={sectionIndex}>
  //           {section}
  //         </div>
  //       ))}
  //     </div>
  //   ));
  // };

  const SortableItem = SortableElement(({ value }) => (
    <div>
      <br></br>
      <div className="drag-content">
        <div className="drag-icon-container">
          <DragIndicatorIcon />
        </div>
        <h3>{value["label"]}</h3>
        <EditIcon />
      </div>

      <div className="drag-para">
        <p>{value["description"]}</p>
      </div>

      {value["label"] === "skill" && (
        <div>
          <div className="skill-list">
            <ul>
              {value["data"].map((skill, index) => (
                <li key={skill.index}>
                  <button>{skill["skill_type"]}</button>
                </li>
              ))}
            </ul>
          </div>
          {showMoreSkill && (
            <div className="more-skill skill">
              <div className="skill-left-option">
                <input placeholder="Enter Skill" id="new_skill" value={skillName} onBlur={handleSkill}/>
                <select id="skill_level">
                  <option value="Novice">Novice</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Skillful">Skillful</option>
                  <option value="Experienced">Experienced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <div className="skill-button">
                <button
                  className="add"
                  onClick={() => {
                    const newSkill = document.getElementById("new_skill").value;
                    const skillLevel = document.getElementById("skill_level").value;
                    addSkill(selectedSkills, newSkill, skillLevel);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          )}
          <div className="selected-skills-container">
            <h6>Selected Skills</h6>
            <ul>
              {selectedSkills.map((skill, index) => (
                <li key={skill.index}>
                  {skill.skill_type} - {skill.level}
                  <button onClick={() => handleDeleteSkill(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
 
      {value["label"] == "education" && (
        <div>
          <div className="edu-list">
            <ul>
              {value["data"].map((edu, index) => (
                <li key={index}>
                  <button>{edu["edu_type"]}</button>
                </li>
              ))}
            </ul>
          </div>
          {showMoreEdu && (
            <div className="edu-skill skill">
              <div className="edu-left-name">
                <input placeholder="Enter School" id="new_edu" />
                <input placeholder="Enter Degree" id="new_degree" />
              </div>
              <div className="edu-left-city">
                <InputMask
                  mask="99.99.9999"
                  placeholder="start-date"
                  id="edu-calendar"
                  className="fromdate"
                />
                <InputMask
                  mask="99.99.9999"
                  placeholder="end-date"
                  id="edu-calendar"
                  className="todate"
                />
                <input placeholder="Enter City" id="new_city" />
              </div>
              <div className="education-ckeditor">
                <CKEditor
                  editor={ClassicEditor}
                  data={education_summary}
                  id="edu_ckedit"
                  onReady={(editor) => {
                    console.log(
                      "CKEditor5 React Component is ready to use!",
                      editor
                    );
                  }}
                  onChange={(event, editor) => {
                    // console.log({ event, editor, editor.getData() });
                    console.log(seteducation_summary(editor.getData()));
                  }}
                />
              </div>
              <div className="skill-button">
                <button
                  className="edu-add"
                  onClick={() => {
                    const newEdu = document.getElementById("new_edu").value;
                    const eduDegree =
                      document.getElementById("new_degree").value;
                    const eduCity = document.getElementById("new_city").value;
                    // const eduCkedit= document.getElementById('edu_ckedit').value;
                    addEducation(selectedEdus, newEdu, eduDegree, eduCity);
                    {
                      handleAddEducation();
                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          )}
          <div className="selected-edus-container">
            <h6>Selected Education History</h6>
            <ul>
              {selectedEdus.map((edu, index) => (
                <li key={edu.index}>
                  {edu.edu_degree}
                  <span>at</span>
                  {edu.edu_type} - {edu.level}
                  <button onClick={() => handleDeleteEdu(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )} 

      {value["label"] === "Websites and social links" && (
        <div>
          <div className="link-list">
            <ul>
              {value["data"].map((link, index) => (
                <li key={link.index}>
                  <button>{link["link_type"]}</button>
                </li>
              ))}
            </ul>
          </div>
          {showMoreLink && (
            <div className="more-link skill">
              <div className="link-left-input">
                <input placeholder="Enter label" id="new_link" />
                <input placeholder="Enter link" id="link_label" />
              </div>
              <div className="skill-button">
                <button
                  className="add"
                  onClick={() => {
                    const newLink = document.getElementById("new_link").value;
                    const linkLevel =
                      document.getElementById("link_label").value;
                    addSocialLink(setSelectedLinks, newLink, linkLevel);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      )}
 
      {value["label"] == "Employment History" && (
        <div>
          <div className="skill-list">
            <ul>
              {value["data"].map((emp, index) => (
                <li key={emp.index}>
                  <button>{emp["emp_type"]}</button>
                </li>
              ))}
            </ul>
          </div>
          {showMoreEmp && (
            <div className="more-emp skill">
              <div className="emp-left-input">
                <input placeholder="Enter Job-title" id="new_emp" />
                <input placeholder="Enter Employer" id="new_employer" />
              </div>
              <div className="edu-left-city">
                <InputMask
                  mask="99.99.9999"
                  placeholder="start-date"
                  id="edu-calendar"
                  className="fromdate"
                />
                <InputMask
                  mask="99.99.9999"
                  placeholder="end-date"
                  id="edu-calendar"
                  className="todate"
                />
                <input placeholder="Enter City" id="emp_city" />
              </div>
              <div className="education-ckeditor">
                <CKEditor
                  editor={ClassicEditor}
                  data={job_summary}
                  id="job_ckedit"
                  onReady={(editor) => {
                    console.log(
                      "CKEditor5 React Component is ready to use!",
                      editor
                    );
                  }}
                  onChange={(event, editor) => {
                    // console.log({ event, editor, editor.getData() });
                    console.log(setjob_summary(editor.getData()));
                  }}
                />
              </div>
              <div className="skill-button">
                <button
                  className="add"
                  onClick={() => {
                    const newEmp = document.getElementById("new_emp").value;
                    const empLevel =
                      document.getElementById("new_employer").value;
                    const empCity = document.getElementById("emp_city").value;
                    addEmployment(selectedEmps, newEmp, empLevel, empCity);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      )} 

      <button
        className="add-extra"
        onClick={() => {
          addMore(value["label"]);
        }}
      >
        + Add {value["label"]}
      </button>
    </div>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div>
        <br></br>
        <ul className="drag-body">
          {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
          ))}
        </ul>
        <br></br>
      </div>
    );
  });

  const sortEnd = ({ oldIndex, newIndex }) => {
    setState({
      items: arrayMoveImmutable(state.items, oldIndex, newIndex),
    });
  };

  return (
    <div className="resume-builder">
      <div className="resume-body">
        <div className="resume-content">
          <div className="resume-left">
            {/* <div className="resume-account">
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
            </div> */}

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

                  <div className="job-title input-section">
                    <div className="job-title-section field-section">
                      <div className="help-icon">
                        <label className="input-label">Job Title</label>
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
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="photo-body field-section">
                      <div className="photo-content">
                        <input
                          type="file"
                          accept="image/* , jpeg, jpg, png, gif "
                          className="photo-input"
                          ref={inputRef}
                          onChange={handleImageChange}
                        />
                        <div className="photo-container">
                          <div className="image-container">
                            {selectedImage ? (
                              <img
                                src={imageUrl}
                                alt="Selected"
                                className="person-pic"
                              />
                            ) : (
                              <PersonIcon className="person-pic" />
                            )}
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
                          onChange={(e) => {
                            setfirstName(e.target.value);
                          }}
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
                          value={lastName}
                          onChange={(e) => {
                            setlastName(e.target.value);
                          }}
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
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="phone-section field-section">
                      <label className="input-label">Phone</label>
                      <div className="phone-input-body">
                        <input
                          type="number"
                          name="phone"
                          className="field-input"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (e.target.value.length > 15) {
                              e.stopPropagation();
                            }
                          }}
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
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
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
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
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
                              value={address}
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
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
                              value={code}
                              onChange={(e) => {
                                setCode(e.target.value);
                              }}
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
                            <Tooltip
                              title="include this section if your profession requires a certain type of license. If not, leave it blank."
                              arrow
                              placement="top"
                            >
                              <HelpOutlineIcon></HelpOutlineIcon>
                            </Tooltip>
                          </div>
                          <div className="driving-input-body">
                            <input
                              type="text"
                              className="field-input"
                              name="driving"
                              value={license}
                              onChange={(e) => {
                                setLicense(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="nationality-section field-section">
                          <div className="help-icon">
                            <label className="input-label">Nationality</label>
                            <Tooltip
                              title="Include your nationality only if it is relevant to your position. In most cases, leave this blank."
                              arrow
                              placement="top"
                            >
                              <HelpOutlineIcon></HelpOutlineIcon>
                            </Tooltip>
                          </div>
                          <div className="nationality-input-body">
                            <input
                              type="text"
                              name="nationality"
                              className="field-input"
                              value={nation}
                              onChange={(e) => {
                                setNation(e.target.value);
                              }}
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
                              value={pob}
                              onChange={(e) => {
                                setpob(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="dob-section field-section">
                          <div className="help-icon">
                            <label className="input-label">Date of Birth</label>
                            <Tooltip
                              title="Add your date of birth only if it is a relevant requirement for your position. In most cases, leave this blank."
                              arrow
                              placement="top"
                            >
                              <HelpOutlineIcon></HelpOutlineIcon>
                            </Tooltip>
                          </div>
                          <div className="dob-input-body">
                            <input
                              type="text"
                              name="dob"
                              className="field-input"
                              value={dob}
                              onChange={(e) => {
                                setdob(e.target.value);
                              }}
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
                    //   config={ {
                    //     plugins: [ Paragraph, Bold, Italic, Essentials ],
                    //     toolbar: [ 'bold', 'italic' ]
                    // } }
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
                      const data = editor.getData();
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

                {/* <div className="dragdrop-box">
                  <div className="left-education">
                    <DragIndicatorIcon />
                    <h6>Education</h6>
                  </div>
                  <p>
                    A varied education on your resume sums up the value that
                    your learnings and background will bring to job.
                  </p>
                  <div className="education-content">
                    <DragIndicatorIcon />
                    <div className="education-box">
                      <div className="education-box1">

                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="drag-drop-fields">
                  <SortableList items={state.items} onSortEnd={sortEnd} />
                </div>
              </div>
            </div>
          </div>

          <div className="resume-right">
            <div className="right-body">
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
              <PDFExport
                scale={1.1}
                paperSize="A4"
                margin="2cm"
                ref={pdfExportComponent}
                // keepTogether="p"
                margin={{ top: 20, left: 10, right: 10, bottom: 2 }}
              >
                <div className="container ">
                  {/* {splitContentIntoPages(state.items)} */}
                  <div className="row pic-container">
                    <div className="col-4 profile-photo">
                      {selectedImage && (
                        <img
                          src={imageUrl}
                          alt="Selected"
                          className="resume-pic"
                        />
                      )}
                    </div>
                    <div className="col-8 custom-height-column personal">
                      <div className="resume-name">
                        <h6 className="fname">{firstName}</h6>
                        <h6>{lastName}</h6>
                      </div>
                      <p className="right-title">{title}</p>
                      <p className="resume-address">{address}</p>
                      <div className="personal-data">
                        <p className="resume-city">{city}</p>
                        <p className="resume-code">{code}</p>
                        <p className="resume-country">{country}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 personal-details">
                      {/* <h6>Personal details</h6> */}
                      <h6>Date/Place of birth</h6>
                      <p>
                        {dob} {pob}
                      </p>
                      <h6>Nationality</h6>
                      <p>{nation}</p>
                      <h6>Driving License</h6>
                      <p>{license}</p>
                    </div>
                    <div className="col-8 profile-details">
                      <h6>Profile summary</h6>
                      <p>
                        <RenderedContent content={profile_summary} />
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 skill-links">
                      <ul>
                        {state.items.map((item, ind) => (
                          <div key={item.ind}>
                            {item["label"] === "skill" && (
                              <div>
                                <h6>Skills</h6>
                                {selectedSkills.map((skill, index) => (
                                  // <li key={index}>
                                  //   {skill.skill_type} - {skill.level}
                                  // </li>
                                  <div key={skill.index} className="selected-skill">
                                    <div
                                      className={`skill-level-${getSkillLevelClass(skill.level)}`}
                                    ></div>
                                    <span >{skill.skill_type}</span>
                                    
                                  </div>
                                ))}
                              </div>
                            )}

                            {item["label"] === "Websites and social links" && (
                              <div className="right-link-box">
                                <LinkIcon />
                                {selectedLinks.map((link, index) => (
                                  <p key={link.index}>{link.link_type}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="col-8 edu-emp">
                      <ul>
                        {state.items.map((item, ind) => (
                          <div key={ind}>
                            {item["label"] === "education" && (
                              <div>
                                <h6>Education</h6>
                                {selectedEdus.map((edu, index) => (
                                  <div className="education-content">
                                    <div className="edu-basic-info">
                                      <p key={index}>{edu.edu_degree}</p>
                                      <p key={index}>{edu.edu_type}</p>
                                      <p key={index}>{edu.edu_city}</p>
                                    </div>
                                    <p key={edu.index}>
                                      <RenderedContent
                                        content={education_summary}
                                      />
                                      {edu.edu_ckedit}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {item["label"] === "Employment History" && (
                              <div>
                                <h6>Employment History</h6>
                                {selectedEmps.map((emp, index) => (
                                  <div className="employment-content">
                                    <div className="emp-basic-info">
                                      <p key={index}> {emp.emp_type}</p>
                                      <p key={index}> {emp.emp_level}</p>
                                      <p key={index}> {emp.emp_city}</p>
                                    </div>
                                    <p key={emp.index}>
                                      <RenderedContent content={job_summary} />
                                      {emp.job_ckedit}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="col-5">
                      <ul>
                        {state.items.map((item) => (
                          <div>
                            {item["label"] === "skill" && (
                              <div>
                                <h6>Skills</h6>
                                {selectedSkills.map((skill, index) => (
                                  <li key={index}>
                                    {skill.skill_type} - Level {skill.level}
                                  </li>
                                ))}
                              </div>
                            )}

                            {item["label"] === "Websites and social links" && (
                              <div>
                                <h6>Websites and social links</h6>
                                {selectedLinks.map((link, index) => (
                                  <p key={index}>{link.link_type} - Link {link.link}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="col-8 ">{profile_summary}</div>
                  </div> */}

                  {/* <div className="row">
                    <div className="col-5">
                      <h6>Social links</h6>
                      {selectedLinks.map((link, index) => (
                        <p key={index}>{link.link_type}</p>
                      ))}
                    </div>
                    <div className="col-8 ">
                      <h6>Employment History</h6>
                      {selectedEmps.map((emp, index) => (
                        <p key={index}>{emp.emp_type}</p>
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">{heading}</div>
                    <div className="col-8 ">
                      <h6>Education</h6>

                      {selectedEdus.map((edu, index) => (
                        <p key={index}>{edu.edu_type}</p>
                      ))}
                    </div>
                  </div> */}
                </div>
              </PDFExport>
              <div className="page-handle-container">
                <ArrowBackIosIcon />
                <p className="right-page-num">1 / 2</p>
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;

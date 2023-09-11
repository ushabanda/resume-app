import React, { useRef, useState } from "react";
import "./template.style.css";

import "react-languages-select/css/react-languages-select.css";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import LinkIcon from "@mui/icons-material/Link";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DOMPurify from "dompurify";
import ProgressBar from "@ramonak/react-progress-bar";

// import image from "../images/account-image.svg";

import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InputMask from "react-input-mask";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import image from "../images/custom-section.svg";
import image1 from "../images/custom-course.svg";
import image2 from "../images/custom-extra.svg";
import image3 from "../images/custom-internship.svg";
import image4 from "../images/custom-hobbies.svg";
import image5 from "../images/custom-languages.svg";
import image6 from "../images/custom-references.svg";
// import Dropzone from 'react-dropzone';

import { PDFExport } from "@progress/kendo-react-pdf";

import "../Calendar/calendar.styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Data = [
  {
    id: "01",
    name: "Employment History",
    description:
      "Show your relevent experince (last 10 years). use bullet points to note your achievments,if possible use numbers/facts(Achieved X, measured by Y, by doing Z)",
  },
  {
    id: "02",
    name: "Education",
    description:
      "A varied education on your resume sums up the value that your learnings and background will bring to job",
  },
  {
    id: "03",
    name: "Website & Social Links",
    description:
      "You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio,LinkedIn profile or personal website",
  },
  {
    id: "04",
    name: "Skills",
    description:
      "Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing(especially when applying via an online system)",
  },
];

const Item = [
  {
    id: "01",
    name: "Custom Section",
  },
  {
    id: "02",
    name: "Course",
  },
  {
    id: "03",
    name: "Extra-curricular activites",
  },
  {
    id: "04",
    name: "Internships",
  },
  {
    id: "05",
    name: "Hobbies",
  },
  {
    id: "06",
    name: "Languages",
  },
  {
    id: "07",
    name: "Refrences",
  },
];

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

  const [selectedImage, setSelectedImage] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [license, setLicense] = useState();
  const [nation, setNation] = useState("");
  const [pob, setpob] = useState("");
  const [dob, setdob] = useState("");
  // const [image, setImage] = useState();
  const [editing, setEditing] = useState(false);
  const editingRef = useRef(editing);
  const [heading, setHeading] = useState("Personal Details");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [selectedEdus, setSelectedEdus] = useState([]);
  const [selectedEmps, setSelectedEmps] = useState([]);
  const [showMoreSkill, setShowMoreSkill] = useState(false);
  const [showMoreLink, setShowMoreLink] = useState();
  const [showMoreEdu, setShowMoreEdu] = useState();
  const [showMoreEmp, setshowMoreEmp] = useState();
  const [profile_summary, setprofile_summary] = useState("");
  const [education_summary, seteducation_summary] = useState("");
  const [job_summary, setjob_summary] = useState("");
  const [custom_summary, setCustom_summary] = useState("");
  const [course_summary, setCourse_summary] = useState("");
  const [activity_summary, setActivity_summary] = useState("");
  const [intern_summary, setIntern_summary] = useState("");

  const [showSkillsHeading, setShowSkillsHeading] = useState(false);
  const [showEdusHeading, setShowEdusHeading] = useState(false);
  const [skillName, setSkillName] = useState();
  const [skillList, setSkillList] = useState([{ skill: "", level: "" }]);
  const [store, setStores] = useState(Data);
  const [specific, setspecific] = useState(true);
  const [link, setlink] = useState(Item);
  const [coursee, setcoursee] = useState(true);
  const [reference, setreference] = useState(true);
  const [langu, setlangu] = useState(true);
  const [curricular, setcurricular] = useState(true);
  const [ship, setship] = useState(true);
  const [hobbies, sethobbies] = useState(true);
  const [filledFields, setFilledFields] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const [selectedCountry, setSelectedCountry] = useState("");

  function setField(value, type) {
    switch (type) {
      case "firstName":
        setfirstName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case 'pob':
        setpob(value);
        break;

      case 'dob':
        setdob(value);
        break;

      case 'code':
        setCode(value);
        break;
        
      case 'country':
        setCountry(value);
        break;

      case 'city':
        setCity(value);
        break;
      
      case 'address':
        setAddress(value);
        break;
      
      case 'nation':
        setNation(value);
        break;
      
      case 'jobTitle':
        setJobTitle(value);
        break;
        
      default:
        console.log("Inside switch default case");
    }
  }

  function handleChange(value, typevalue, type, score) {
    if (value.trim() !== "") {
      setField(value, type);

      if (typevalue == "") {
        setCompletionPercentage(
          (completionPercentage) => completionPercentage + score
        );
      }
    } else {
      setField(value, type);
      setCompletionPercentage(
        (completionPercentage) => completionPercentage - score
      );
    }
  }

  const calculateCompletionPercentage = () => {
    const numberOfFields = 2;
    const percentage = (filledFields / numberOfFields) * 100;
    setCompletionPercentage(percentage);
  };

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...store];

      const sourceindex = source.index;
      const destinationindex = destination.index;

      const [removedStore] = reorderedStores.splice(sourceindex, 1);
      reorderedStores.splice(destinationindex, 0, removedStore);

      return setStores(reorderedStores);
    }
  };

  const handleDrag = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...link];

      const sourceindex = source.index;
      const destinationindex = destination.index;

      const [removedStore] = reorderedStores.splice(sourceindex, 1);
      reorderedStores.splice(destinationindex, 0, removedStore);

      return setlink(reorderedStores);
    }
  };

  // ======  End of Employment History code  =========

  const [empHistory, setempHistory] = useState([]);

  const createObject = () => {
    const newObject = {
      id: empHistory.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setempHistory([...empHistory, newObject]);
  };

  const handleInputChange = (e, objectId, inputName) => {
    const updatedempHistory = empHistory.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setempHistory(updatedempHistory);
  };

  const deleteObject = (objectId) => {
    const updatedObjects = empHistory.filter(
      (object) => object.id !== objectId
    );
    setempHistory(updatedObjects);
  };
  // ======  End of Employment History code  =========

  // ======  Start of Education code  =========

  const [education, seteducation] = useState([]);

  const createeducation = () => {
    const newObject = {
      id: education.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    seteducation([...education, newObject]);
  };

  const handleInputedu = (e, objectId, inputName) => {
    const updatedObjects = education.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    seteducation(updatedObjects);
  };

  const deleteedu = (objectId) => {
    const updatedObjects = education.filter((object) => object.id !== objectId);
    seteducation(updatedObjects);
  };
  // ======  End of Education code  =========

  // ======  Start of website code  =========

  const [website, setwebsite] = useState([]);

  const createweb = () => {
    const newObject = { id: website.length + 1, input1: "", input2: "" };
    setwebsite([...website, newObject]);
  };

  const handleInputweb = (e, objectId, inputName) => {
    console.log(objectId);
    const updatedObjects = website.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setwebsite(updatedObjects);
  };

  const deleteweb = (objectId) => {
    const updatedObjects = website.filter((object) => object.id !== objectId);
    setwebsite(updatedObjects);
  };
  // ======  End of website code  =========

  //  ======  Start of skill code  =========

  const [skill, setskill] = useState([]);

  const createskill = () => {
    const newObject = { id: skill.length + 1, input1: "", input2: "" };
    setskill([...skill, newObject]);
  };

  const handleInputskill = (e, objectId, inputName) => {
    const updatedObjects = skill.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setskill(updatedObjects);
  };

  const deleteskill = (objectId) => {
    const updatedObjects = skill.filter((object) => object.id !== objectId);
    setskill(updatedObjects);
  };

  //  ======  End of skill code  =========

  const inputRef = useRef(null);

  const handleImageChange = () => {
    const file = inputRef.current.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Code for Custom
  const [cust, setcust] = useState([]);

  const createcust = () => {
    const newObject = {
      id: cust.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setcust([...cust, newObject]);
  };

  const handleInputcust = (e, objectId, inputName) => {
    const updatedObjects = cust.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcust(updatedObjects);
  };

  const deletecust = (objectId) => {
    const updatedObjects = cust.filter((object) => object.id !== objectId);
    setcust(updatedObjects);
  };

  const [course, setcourse] = useState([]);

  const createcourse = () => {
    const newObject = {
      id: course.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setcourse([...course, newObject]);
  };

  const handleInputcourse = (e, objectId, inputName) => {
    const updatedObjects = course.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcourse(updatedObjects);
  };

  const deletecourse = (objectId) => {
    const updatedObjects = course.filter((object) => object.id !== objectId);
    setcourse(updatedObjects);
  };

  //code for Extra-curricular

  const [activity, setActivity] = useState([]);

  const createactivity = () => {
    const newObject = {
      id: activity.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setActivity([...activity, newObject]);
  };

  const handleInputactivity = (e, objectId, inputName) => {
    const updatedObjects = activity.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setActivity(updatedObjects);
  };

  const deleteactivity = (objectId) => {
    const updatedObjects = activity.filter((object) => object.id !== objectId);
    setActivity(updatedObjects);
  };

  //code for Intern

  const [intern, setIntern] = useState([]);

  const createintern = () => {
    const newObject = {
      id: intern.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setIntern([...intern, newObject]);
  };

  const handleInputintern = (e, objectId, inputName) => {
    const updatedObjects = intern.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setIntern(updatedObjects);
  };

  const deleteintern = (objectId) => {
    const updatedObjects = intern.filter((object) => object.id !== objectId);
    setIntern(updatedObjects);
  };

  //code for Hobbies

  const [hobb, sethobb] = useState([]);

  const createhobb = () => {
    const newObject = { id: hobb.length + 1, input1: "", input2: "" };
    sethobb([...hobb, newObject]);
  };

  const handleInputhobb = (e, objectId, inputName) => {
    const updatedObjects = hobb.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    sethobb(updatedObjects);
  };

  const deletehobb = (objectId) => {
    const updatedObjects = hobb.filter((object) => object.id !== objectId);
    sethobb(updatedObjects);
  };

  //code for language

  const [language, setlanguage] = useState([]);

  const createlanguage = () => {
    const newObject = {
      id: language.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setlanguage([...language, newObject]);
  };

  const handleInputlanguage = (e, objectId, inputName) => {
    const updatedObjects = language.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setlanguage(updatedObjects);
  };

  const deletelanguage = (objectId) => {
    const updatedObjects = language.filter((object) => object.id !== objectId);
    setlanguage(updatedObjects);
  };

  const [refer, setRefer] = useState([]);

  const createrefer = () => {
    const newObject = {
      id: refer.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setRefer([...refer, newObject]);
  };

  const handleInputrefer = (e, objectId, inputName) => {
    const updatedObjects = refer.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setRefer(updatedObjects);
  };

  const deleterefer = (objectId) => {
    const updatedObjects = refer.filter((object) => object.id !== objectId);
    setRefer(updatedObjects);
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
      setShowMoreSkill(true);
      // addSkillList()
      // const newSkill = document.getElementById("new_skill").value;
      // const skillLevel = document.getElementById("skill_level").value;
      // addSkill(selectedSkills, newSkill, skillLevel);
    } else if (type === "Websites and social links") {
      setShowMoreLink(!showMoreLink);
    } else if (type === "Employment History") {
      setshowMoreEmp(!showMoreEmp);
    }
  }

  const addSkillList = () => {
    setSkillList([...skillList, { skill: "", level: "" }]);
  };

  function removeSkill(index) {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  }

  function skillChange(e, index) {
    let skillName = e.target.value;
    let labelValue = e.target.value;

    const list = [...skillList];
    list[index]["skill"] = skillName;
    list[index]["level"] = labelValue;
    setSkillList(list);
  }

  function setSkillLevel(e, index) {
    let labelValue = e.target.value;

    const list = [...skillList];
    list[index]["level"] = labelValue;
    setSkillList(list);
  }

  function setSkillValue(e, index) {
    e.preventDefault();
    let skillName = e.target.value;

    let list = [...skillList];
    list[index]["skill"] = skillName;
    setSkillList(list);
    console.log(index);
    console.log(list);
  }

  function RenderedContent({ content }) {
    const sanitizedContent = DOMPurify.sanitize(content);

    return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  }

  function getSkillLevelClass(skillLevel) {
    switch (skillLevel) {
      case "Novice":
        console.log("hello graph");
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
    setSkillName();
  }

  function handleSkill() {
    console.log(document.getElementById("new_skill").value);
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

  const [empStartDate, setEmpStartDate] = useState();
  const [empEndDate, setEmpEndDate] = useState();

  const [eduStartDate, setEduStartDate] = useState();
  const [eduEndDate, setEduEndDate] = useState();

  const [customStartDate, setCustomStartDate] = useState();
  const [customEndDate, setCustomEndDate] = useState();

  const [courseStartDate, setCourseStartDate] = useState();
  const [courseEndDate, setCourseEndDate] = useState();

  const [activityStartDate, setActivityStartDate] = useState();
  const [activityEndDate, setActivityEndDate] = useState();

  const [internStartDate, setInternStartDate] = useState();
  const [internEndDate, setInternEndDate] = useState();

  const handleEduStartDateChange = (date) => {
    setEduStartDate(date);
  };

  const handleEduEndDateChange = (date) => {
    setEduEndDate(date);
  };

  const handleEmpStartDateChange = (date) => {
    setEmpStartDate(date);
  };

  const handleEmpEndDateChange = (date) => {
    setEmpEndDate(date);
  };

  const handleCustomStartDateChange = (date) => {
    setCustomStartDate(date);
  };

  const handleCustomEndDateChange = (date) => {
    setCustomEndDate(date);
  };

  const handleCourseStartDateChange = (date) => {
    setCourseStartDate(date);
  };

  const handleCourseEndDateChange = (date) => {
    setCourseEndDate(date);
  };

  const handleActivityStartDateChange = (date) => {
    setActivityStartDate(date);
  };

  const handleActivityEndDateChange = (date) => {
    setActivityEndDate(date);
  };

  const handleInternStartDateChange = (date) => {
    setInternStartDate(date);
  };

  const handleInternEndDateChange = (date) => {
    setInternEndDate(date);
  };

  let customClick = () => {
    setspecific(false);
  };

  const delete1 = () => {
    setspecific(!specific);
    setcust([]);
  };

  const certi = () => {
    setcoursee(false);
  };

  const delete2 = () => {
    setcoursee(true);
    setcourse([]);
  };

  const extra = () => {
    setcurricular(false);
  };

  const delete7 = () => {
    setcurricular(true);
    setActivity([]);
  };

  const delete4 = () => {
    setship(true);
    setIntern([]);
  };

  const internship = () => {
    setship(false);
  };

  const hobbieClick = () => {
    sethobbies(false);
    console.log("hobbie click");
  };

  const delete6 = () => {
    sethobbies(true);
    sethobbies([]);
  };

  const langClick = () => {
    setlangu(false);
  };

  const delete5 = () => {
    setlangu(true);
    setlangu([]);
  };

  const referClick = () => {
    setreference(false);
  };

  const delete3 = () => {
    setreference(true);
    setreference([]);
  };

  const handleOnChange = (value, selectedCountryData) => {
    setPhone(value);
    setSelectedCountry(selectedCountryData.name);
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
                      <div className="progress-bar">
                        {completionPercentage}
                        {/* <ProgressBar completed={completionPercentage} /> */}
                      </div>
                      <p className="resume-para">Completion Score</p>
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
                        <label className="input-label">Role</label>
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
                          value={jobTitle}
                          onChange={(e) => {
                            handleChange(
                              e.target.value,
                              jobTitle,
                              "jobTitle",
                              5
                            );
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
                            handleChange(
                              e.target.value,
                              firstName,
                              "firstName",
                              5
                            );
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
                            handleChange(e.target.value, email, "email", 5);
                          }}
                        />
                      </div>
                    </div>

                    <div className="phone-section field-section">
                      <label className="input-label">Phone</label>
                      <div className="phone-input-body">
                        <PhoneInput
                          country={"in"}
                          className="field-input"
                          value={phone}
                          onChange={handleOnChange}
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
                            handleChange(e.target.value, country, "country", 5);
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
                            handleChange(e.target.value, city, "city", 5);
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
                                handleChange(e.target.value, address, "address", 5);
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
                                handleChange(e.target.value, code, "code", 5);
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
                                handleChange(e.target.value, nation, "nation", 5);
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
                                handleChange(e.target.value, pob, "pob", 5);
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
                                handleChange(e.target.value, dob, "dob", 5);
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

                <div className="drag-drop-fields">
                  <DragDropContext onDragEnd={handleDragDrop}>
                    <div>
                      <Droppable droppableId="Root" type="group">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {store.map((store, index) => (
                              <Draggable
                                draggableId={store.id}
                                key={store.id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                  >
                                    <h3 className="store-heading">
                                      {store.name}
                                    </h3>
                                    <p>{store.description}</p>
                                    {store.name === "Employment History" ? (
                                      <div>
                                        {empHistory.map((object) => (
                                          <div key={object.id}>
                                            <div className="emp-main">
                                              <div className="left-title">
                                                <div className="left-job_title-container">
                                                  <div>
                                                    <input
                                                      type="text"
                                                      value={object.input1}
                                                      className="left-job-input"
                                                      placeholder="Enter Job-Title"
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          e,
                                                          object.id,
                                                          "input1"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-job_title-container">
                                                  <input
                                                    type="text"
                                                    value={object.input2}
                                                    className="left-job-input"
                                                    placeholder="Enter Employer"
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        object.id,
                                                        "input2"
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              <div className="left-date-city-box">
                                                <div className="left-job_title-container">
                                                  <div className="calendar">
                                                    <div className="fromdate">
                                                      <DatePicker
                                                        selected={empStartDate}
                                                        onChange={
                                                          handleEmpStartDateChange
                                                        }
                                                        selectsStart
                                                        empStartDate={
                                                          empStartDate
                                                        }
                                                        empEndDate={empEndDate}
                                                        className="fromda"
                                                        placeholderText={
                                                          "start Date"
                                                        }
                                                      />
                                                    </div>
                                                    <div className="todate">
                                                      <DatePicker
                                                        selected={empEndDate}
                                                        onChange={
                                                          handleEmpEndDateChange
                                                        }
                                                        selectsEnd
                                                        empStartDate={
                                                          empStartDate
                                                        }
                                                        empEndDate={empEndDate}
                                                        minDate={empStartDate}
                                                        className="toda"
                                                        placeholderText={
                                                          "End Date"
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="left-job_title-container">
                                                  <input
                                                    type="text"
                                                    value={object.input5}
                                                    className="left-job-input"
                                                    placeholder="Enter City"
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        object.id,
                                                        "input5"
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              <div className="left-emp-editor-box">
                                                <div className="left-emp-editor">
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
                                                    onChange={(
                                                      event,
                                                      editor
                                                    ) => {
                                                      // console.log({ event, editor, editor.getData() });
                                                      console.log(
                                                        setjob_summary(
                                                          editor.getData()
                                                        )
                                                      );
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <button
                                                onClick={() =>
                                                  deleteObject(object.id)
                                                }
                                                className="btn btn-primary left-emp-btn"
                                              >
                                                Delete
                                              </button>
                                            </div>
                                          </div>
                                        ))}
                                        <button
                                          onClick={createObject}
                                          className="left-emp-repeate"
                                        >
                                          {" "}
                                          + Add Employment
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {/* Education */}

                                    {store.name === "Education" ? (
                                      <div>
                                        {education.map((object) => (
                                          <div key={object.id}>
                                            <div className="emp-main">
                                              <div className="left-education">
                                                <div className="left-scl_deg-container">
                                                  <div>
                                                    <input
                                                      type="text"
                                                      value={object.input1}
                                                      className="left-scl-input"
                                                      placeholder="Enter School"
                                                      onChange={(e) =>
                                                        handleInputedu(
                                                          e,
                                                          object.id,
                                                          "input1"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-scl_deg-container">
                                                  <input
                                                    type="text"
                                                    value={object.input2}
                                                    className="left-scl-input"
                                                    placeholder="Enter Degree"
                                                    onChange={(e) =>
                                                      handleInputedu(
                                                        e,
                                                        object.id,
                                                        "input2"
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </div>

                                              <div className="left-date-city-box">
                                                <div className="left-scl_deg-container">
                                                  <div className="calendar">
                                                    <div className="fromdate">
                                                      <DatePicker
                                                        selected={eduStartDate}
                                                        onChange={
                                                          handleEduStartDateChange
                                                        }
                                                        selectsStart
                                                        eduStartDate={
                                                          eduStartDate
                                                        }
                                                        eduEndDate={eduEndDate}
                                                        className="fromda"
                                                        placeholderText={
                                                          "start Date"
                                                        }
                                                      />
                                                    </div>
                                                    <div className="todate">
                                                      <DatePicker
                                                        selected={eduEndDate}
                                                        onChange={
                                                          handleEduEndDateChange
                                                        }
                                                        selectsEnd
                                                        eduStartDate={
                                                          eduStartDate
                                                        }
                                                        eduEndDate={eduEndDate}
                                                        minDate={eduStartDate}
                                                        className="toda"
                                                        placeholderText={
                                                          "End Date"
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="left-scl_deg-container">
                                                  <input
                                                    type="text"
                                                    value={object.input5}
                                                    className="left-scl-input"
                                                    placeholder="Enter City"
                                                    onChange={(e) =>
                                                      handleInputedu(
                                                        e,
                                                        object.id,
                                                        "input5"
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </div>

                                              <div className="left-edu-editor-box">
                                                <div className="left-edu-editor">
                                                  <CKEditor
                                                    editor={ClassicEditor}
                                                    data={education_summary}
                                                    id="job_ckedit"
                                                    onReady={(editor) => {
                                                      console.log(
                                                        "CKEditor5 React Component is ready to use!",
                                                        editor
                                                      );
                                                    }}
                                                    onChange={(
                                                      event,
                                                      editor
                                                    ) => {
                                                      // console.log({ event, editor, editor.getData() });
                                                      console.log(
                                                        seteducation_summary(
                                                          editor.getData()
                                                        )
                                                      );
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                            </div>

                                            <div>
                                              <button
                                                onClick={() =>
                                                  deleteedu(object.id)
                                                }
                                                className="btn btn-primary left-edu-btn"
                                              >
                                                Delete
                                              </button>
                                            </div>
                                          </div>
                                        ))}
                                        <button
                                          onClick={createeducation}
                                          className="left-edu-repeate"
                                        >
                                          {" "}
                                          + Add education
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}
                                    {/* Website */}

                                    {store.name === "Website & Social Links" ? (
                                      <div>
                                        {website.map((object) => (
                                          <div key={object.id}>
                                            <div className="emp-main">
                                              <div className="left-social-container">
                                                <div className="left_social">
                                                  <input
                                                    type="text"
                                                    value={object.input1}
                                                    className="left-label-input"
                                                    placeholder="Enter Label"
                                                    onChange={(e) =>
                                                      handleInputweb(
                                                        e,
                                                        object.id,
                                                        "input1"
                                                      )
                                                    }
                                                  />
                                                </div>

                                                <div className="left_social">
                                                  <input
                                                    type="text"
                                                    value={object.input2}
                                                    className="left-label-input"
                                                    placeholder="Enter Link"
                                                    onChange={(e) =>
                                                      handleInputweb(
                                                        e,
                                                        object.id,
                                                        "input2"
                                                      )
                                                    }
                                                  />
                                                </div>

                                                <button
                                                  onClick={() =>
                                                    deleteweb(object.id)
                                                  }
                                                  className="btn btn-primary"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                        <button
                                          onClick={createweb}
                                          className="left-social-repeate"
                                        >
                                          {" "}
                                          + Add Link
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {/* Code for skill */}
                                    {store.name === "Skills" ? (
                                      <div>
                                        {skill.map((object) => (
                                          <div key={object.id}>
                                            <div className="emp-main">
                                              <div className="left-skill-container">
                                                <div className="left-skill">
                                                  <input
                                                    type="text"
                                                    value={object.input1}
                                                    className="left-skill-input"
                                                    placeholder="Enter Skill"
                                                    onChange={(e) =>
                                                      handleInputskill(
                                                        e,
                                                        object.id,
                                                        "input1"
                                                      )
                                                    }
                                                  />
                                                </div>

                                                <div className="left-skill">
                                                  <select
                                                    className="left-skill-input"
                                                    onChange={(e) =>
                                                      handleInputskill(
                                                        e,
                                                        object.id,
                                                        "input2"
                                                      )
                                                    }
                                                  >
                                                    <option value="0">
                                                      Select Skill level
                                                    </option>
                                                    <option value="1">
                                                      Novice
                                                    </option>
                                                    <option value="2">
                                                      Beginner
                                                    </option>
                                                    <option value="3">
                                                      Skillful
                                                    </option>
                                                    <option value="4">
                                                      Experienced
                                                    </option>
                                                    <option value="5">
                                                      Expert
                                                    </option>
                                                  </select>
                                                </div>

                                                <div>
                                                  <button
                                                    onClick={() =>
                                                      deleteskill(object.id)
                                                    }
                                                    className="btn btn-primary skill-delete"
                                                  >
                                                    Delete
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                        <button
                                          onClick={createskill}
                                          className="left-skill-repeate"
                                        >
                                          {" "}
                                          + Add more skill
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}
                                    <div></div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </DragDropContext>

                  <DragDropContext onDragEnd={handleDrag}>
                    <div>
                      <Droppable droppableId="Root" type="group">
                        {(proved) => (
                          <div {...proved.droppableProps} ref={proved.innerRef}>
                            {link.map((link, index) => (
                              <Draggable
                                draggableId={link.id}
                                key={link.id}
                                index={index}
                              >
                                {(proved) => (
                                  <div
                                    {...proved.dragHandleProps}
                                    {...proved.draggableProps}
                                    ref={proved.innerRef}
                                  >
                                    {link.name === "Custom Section" ? (
                                      <div
                                        className={
                                          specific ? "hidden" : "visible"
                                        }
                                      >
                                        <div className="emp-div ">
                                          {cust.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <h6>Custom section</h6>
                                                <div className="left-custom">
                                                  <div className="left-scl_deg-container">
                                                    <div>
                                                      <input
                                                        type="text"
                                                        value={object.input1}
                                                        className="left-scl-input"
                                                        placeholder="Activity name, job title, book title etc."
                                                        onChange={(e) =>
                                                          handleInputcust(
                                                            e,
                                                            object.id,
                                                            "input1"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="left-scl_deg-container">
                                                    <input
                                                      type="text"
                                                      value={object.input2}
                                                      className="left-scl-input"
                                                      placeholder="Enter City "
                                                      onChange={(e) =>
                                                        handleInputcust(
                                                          e,
                                                          object.id,
                                                          "input2"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-date-city-box">
                                                  <div className="left-scl_deg-container">
                                                    <div className="calendar">
                                                      <div className="fromdate">
                                                        <DatePicker
                                                          selected={
                                                            customStartDate
                                                          }
                                                          onChange={
                                                            handleCustomStartDateChange
                                                          }
                                                          selectsStart
                                                          customStartDate={
                                                            customStartDate
                                                          }
                                                          customEndDate={
                                                            customEndDate
                                                          }
                                                          className="fromda"
                                                          placeholderText={
                                                            "start Date"
                                                          }
                                                        />
                                                      </div>
                                                      <div className="todate">
                                                        <DatePicker
                                                          selected={
                                                            customEndDate
                                                          }
                                                          onChange={
                                                            handleCustomEndDateChange
                                                          }
                                                          selectsEnd
                                                          customStartDate={
                                                            customStartDate
                                                          }
                                                          customEndDate={
                                                            customEndDate
                                                          }
                                                          minDate={
                                                            customStartDate
                                                          }
                                                          className="toda"
                                                          placeholderText={
                                                            "End Date"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="left-edu-editor-box">
                                                  <div className="left-edu-editor">
                                                    <CKEditor
                                                      editor={ClassicEditor}
                                                      data={custom_summary}
                                                      id="job_ckedit"
                                                      onReady={(editor) => {
                                                        console.log(
                                                          "CKEditor5 React Component is ready to use!",
                                                          editor
                                                        );
                                                      }}
                                                      onChange={(
                                                        event,
                                                        editor
                                                      ) => {
                                                        // console.log({ event, editor, editor.getData() });
                                                        console.log(
                                                          setCustom_summary(
                                                            editor.getData()
                                                          )
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    deletecust(object.id)
                                                  }
                                                  className="btn btn-primary left-edu-btn"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          {/* <h6>Custom section</h6> */}
                                          <button
                                            onClick={createcust}
                                            className="more-custom-section-btn"
                                          >
                                            {" "}
                                            + Add item
                                          </button>
                                        </div>
                                        <button
                                          onClick={delete1}
                                          className="btn btn-primary custom_delete"
                                        >
                                          delete custom section
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {link.name === "Course" ? (
                                      <div
                                        className={
                                          coursee ? "hidden" : "visible"
                                        }
                                      >
                                        <div className="emp-div">
                                          {course.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <h6>Course</h6>
                                                <div className="left-custom">
                                                  <div className="left-scl_deg-container">
                                                    <div>
                                                      <input
                                                        type="text"
                                                        value={object.input1}
                                                        className="left-scl-input"
                                                        placeholder="Enter Course"
                                                        onChange={(e) =>
                                                          handleInputcourse(
                                                            e,
                                                            object.id,
                                                            "input1"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="left-scl_deg-container">
                                                    <input
                                                      type="text"
                                                      value={object.input2}
                                                      className="left-scl-input"
                                                      placeholder="Enter institution"
                                                      onChange={(e) =>
                                                        handleInputcourse(
                                                          e,
                                                          object.id,
                                                          "input2"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-date-city-box">
                                                  <div className="left-scl_deg-container">
                                                    <div className="calendar">
                                                      <div className="fromdate">
                                                        <DatePicker
                                                          selected={
                                                            courseStartDate
                                                          }
                                                          onChange={
                                                            handleCourseStartDateChange
                                                          }
                                                          selectsStart
                                                          courseStartDate={
                                                            courseStartDate
                                                          }
                                                          courseEndDate={
                                                            courseEndDate
                                                          }
                                                          className="fromda"
                                                          placeholderText={
                                                            "start Date"
                                                          }
                                                        />
                                                      </div>
                                                      <div className="todate">
                                                        <DatePicker
                                                          selected={
                                                            courseEndDate
                                                          }
                                                          onChange={
                                                            handleCourseEndDateChange
                                                          }
                                                          selectsEnd
                                                          courseStartDate={
                                                            courseStartDate
                                                          }
                                                          courseEndDate={
                                                            courseEndDate
                                                          }
                                                          minDate={
                                                            courseStartDate
                                                          }
                                                          className="toda"
                                                          placeholderText={
                                                            "End Date"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="left-edu-editor-box">
                                                  <div className="left-edu-editor">
                                                    <CKEditor
                                                      editor={ClassicEditor}
                                                      data={course_summary}
                                                      id="job_ckedit"
                                                      onReady={(editor) => {
                                                        console.log(
                                                          "CKEditor5 React Component is ready to use!",
                                                          editor
                                                        );
                                                      }}
                                                      onChange={(
                                                        event,
                                                        editor
                                                      ) => {
                                                        // console.log({ event, editor, editor.getData() });
                                                        console.log(
                                                          setCustom_summary(
                                                            editor.getData()
                                                          )
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    deletecourse(object.id)
                                                  }
                                                  className="btn btn-primary left-edu-btn"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createcourse}
                                            className="more-custom-section-btn"
                                          >
                                            {" "}
                                            + Add course
                                          </button>
                                        </div>
                                        <button
                                          onClick={delete2}
                                          className="btn btn-primary"
                                        >
                                          delete course section
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {link.name ===
                                    "Extra-curricular activites" ? (
                                      <div
                                        className={
                                          curricular ? "hidden" : "visible"
                                        }
                                      >
                                        <div className="emp-div">
                                          {activity.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <h6>
                                                  Extra curricular activity{" "}
                                                </h6>
                                                <div className="left-education">
                                                  <div className="left-scl_deg-container">
                                                    <div>
                                                      <input
                                                        type="text"
                                                        value={object.input1}
                                                        className="left-scl-input"
                                                        placeholder="Function Title"
                                                        onChange={(e) =>
                                                          handleInputactivity(
                                                            e,
                                                            object.id,
                                                            "input1"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="left-scl_deg-container">
                                                    <input
                                                      type="text"
                                                      value={object.input2}
                                                      className="left-scl-input"
                                                      placeholder="Enter Employer"
                                                      onChange={(e) =>
                                                        handleInputactivity(
                                                          e,
                                                          object.id,
                                                          "input2"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-date-city-box">
                                                  <div className="left-scl_deg-container">
                                                    <div className="calendar">
                                                      <div className="fromdate">
                                                        <DatePicker
                                                          selected={
                                                            activityStartDate
                                                          }
                                                          onChange={
                                                            handleActivityStartDateChange
                                                          }
                                                          selectsStart
                                                          activityStartDate={
                                                            activityStartDate
                                                          }
                                                          activityEndDate={
                                                            activityEndDate
                                                          }
                                                          className="fromda"
                                                          placeholderText={
                                                            "start Date"
                                                          }
                                                        />
                                                      </div>
                                                      <div className="todate">
                                                        <DatePicker
                                                          selected={
                                                            activityEndDate
                                                          }
                                                          onChange={
                                                            handleActivityEndDateChange
                                                          }
                                                          selectsEnd
                                                          activityStartDate={
                                                            activityStartDate
                                                          }
                                                          activityEndDate={
                                                            activityEndDate
                                                          }
                                                          minDate={
                                                            activityStartDate
                                                          }
                                                          className="toda"
                                                          placeholderText={
                                                            "End Date"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="left-scl_deg-container">
                                                    <input
                                                      type="text"
                                                      value={object.input5}
                                                      className="left-scl-input"
                                                      placeholder="Enter City"
                                                      onChange={(e) =>
                                                        handleInputactivity(
                                                          e,
                                                          object.id,
                                                          "input5"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-edu-editor-box">
                                                  <div className="left-edu-editor">
                                                    <CKEditor
                                                      editor={ClassicEditor}
                                                      data={activity_summary}
                                                      id="job_ckedit"
                                                      onReady={(editor) => {
                                                        console.log(
                                                          "CKEditor5 React Component is ready to use!",
                                                          editor
                                                        );
                                                      }}
                                                      onChange={(
                                                        event,
                                                        editor
                                                      ) => {
                                                        // console.log({ event, editor, editor.getData() });
                                                        console.log(
                                                          setActivity_summary(
                                                            editor.getData()
                                                          )
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    deleteactivity(object.id)
                                                  }
                                                  className="btn btn-primary left-edu-btn"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createactivity}
                                            className="more-custom-section-btn"
                                          >
                                            + Add Activity
                                          </button>
                                        </div>
                                        <button
                                          onClick={delete7}
                                          className="btn btn-primary custom_delete"
                                        >
                                          delete extra curricular Activity
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {link.name === "Internships" ? (
                                      <div
                                        className={ship ? "hidden" : "visible"}
                                      >
                                        <div className="emp-div">
                                          {intern.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <h6>Internships</h6>
                                                <div className="left-education">
                                                  <div className="left-scl_deg-container">
                                                    <div>
                                                      <input
                                                        type="text"
                                                        value={object.input1}
                                                        className="left-scl-input"
                                                        placeholder="Enter Job title"
                                                        onChange={(e) =>
                                                          handleInputintern(
                                                            e,
                                                            object.id,
                                                            "input1"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="left-scl_deg-container">
                                                    <input
                                                      type="text"
                                                      value={object.input2}
                                                      className="left-scl-input"
                                                      placeholder="Enter Employer"
                                                      onChange={(e) =>
                                                        handleInputintern(
                                                          e,
                                                          object.id,
                                                          "input2"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-date-city-box">
                                                  <div className="left-scl_deg-container">
                                                    <div className="calendar">
                                                      <div className="fromdate">
                                                        <DatePicker
                                                          selected={
                                                            internStartDate
                                                          }
                                                          onChange={
                                                            handleInternStartDateChange
                                                          }
                                                          selectsStart
                                                          internStartDate={
                                                            internStartDate
                                                          }
                                                          internEndDate={
                                                            internEndDate
                                                          }
                                                          className="fromda"
                                                          placeholderText={
                                                            "start Date"
                                                          }
                                                        />
                                                      </div>
                                                      <div className="todate">
                                                        <DatePicker
                                                          selected={
                                                            internEndDate
                                                          }
                                                          onChange={
                                                            handleInternEndDateChange
                                                          }
                                                          selectsEnd
                                                          internStartDate={
                                                            internStartDate
                                                          }
                                                          internEndDate={
                                                            internEndDate
                                                          }
                                                          minDate={
                                                            internStartDate
                                                          }
                                                          className="toda"
                                                          placeholderText={
                                                            "End Date"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="left-scl_deg-container">
                                                    <input
                                                      type="text"
                                                      value={object.input5}
                                                      className="left-scl-input"
                                                      placeholder="Enter City"
                                                      onChange={(e) =>
                                                        handleInputintern(
                                                          e,
                                                          object.id,
                                                          "input5"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                                <div className="left-edu-editor-box">
                                                  <div className="left-edu-editor">
                                                    <CKEditor
                                                      editor={ClassicEditor}
                                                      data={intern_summary}
                                                      id="job_ckedit"
                                                      onReady={(editor) => {
                                                        console.log(
                                                          "CKEditor5 React Component is ready to use!",
                                                          editor
                                                        );
                                                      }}
                                                      onChange={(
                                                        event,
                                                        editor
                                                      ) => {
                                                        // console.log({ event, editor, editor.getData() });
                                                        console.log(
                                                          setIntern_summary(
                                                            editor.getData()
                                                          )
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    deleteintern(object.id)
                                                  }
                                                  className="btn btn-primary left-edu-btn"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createintern}
                                            className="more-custom-section-btn"
                                          >
                                            {" "}
                                            + Add internship
                                          </button>
                                        </div>
                                        <button
                                          onClick={delete4}
                                          className="btn btn-primary custom_delete"
                                        >
                                          delete internship
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {link.name === "Hobbies" ? (
                                      <div
                                        className={
                                          hobbies ? "hidden" : "visible"
                                        }
                                      >
                                        <div className="emp-div">
                                          {hobb.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <div>
                                                  <h6>Hobbie</h6>
                                                  <div className="wanted">
                                                    <div>
                                                      <textarea
                                                        type="text"
                                                        rows="3"
                                                        value={object.input1}
                                                        className="left-hobbie-input"
                                                        placeholder="Enter a hobbie e.g.skipping, skydiving, painting "
                                                        onChange={(e) =>
                                                          handleInputhobb(
                                                            e,
                                                            object.id,
                                                            "input1"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    deletehobb(object.id)
                                                  }
                                                  className="btn btn-primary left-edu-btn"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createhobb}
                                            className="more-custom-section-btn"
                                          >
                                            {" "}
                                            + Add more Hobbie
                                          </button>
                                        </div>
                                        <button
                                          onClick={delete6}
                                          className="btn btn-primary custom_delete"
                                        >
                                          delete
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {link.name === "Languages" ? (
                                      <div
                                        className={langu ? "hidden" : "visible"}
                                      >
                                        <div className="emp-div">
                                          {language.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <h6>Languages</h6>
                                                <div className="left-skill-container">
                                                  <div className="left-skill">
                                                    <input
                                                      type="text"
                                                      value={object.input1}
                                                      className="left-skill-input"
                                                      placeholder="Enter Language"
                                                      onChange={(e) =>
                                                        handleInputlanguage(
                                                          e,
                                                          object.id,
                                                          "input1"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                  <div className="left-skill">
                                                    <select
                                                      className="left-skill-input"
                                                      onChange={(e) =>
                                                        handleInputlanguage(
                                                          e,
                                                          object.id,
                                                          "input2"
                                                        )
                                                      }
                                                    >
                                                      <option value="0">
                                                        Select Skill level
                                                      </option>
                                                      <option value="1">
                                                        Novice
                                                      </option>
                                                      <option value="2">
                                                        Beginner
                                                      </option>
                                                      <option value="3">
                                                        Skillful
                                                      </option>
                                                      <option value="4">
                                                        Experienced
                                                      </option>
                                                      <option value="5">
                                                        Expert
                                                      </option>
                                                    </select>
                                                  </div>
                                                  <div>
                                                    <button
                                                      onClick={() =>
                                                        deletelanguage(
                                                          object.id
                                                        )
                                                      }
                                                      className="btn btn-primary left-edu-btn"
                                                    >
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createlanguage}
                                            className="more-custom-section-btn"
                                          >
                                            {" "}
                                            + Add one more languages
                                          </button>
                                        </div>
                                        <button
                                          onClick={delete5}
                                          className="btn btn-primary custom_delete"
                                        >
                                          delete
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}

                                    {link.name === "Refrences" ? (
                                      <div
                                        className={
                                          reference ? "hidden" : "visible"
                                        }
                                      >
                                        <div className="emp-div">
                                          {refer.map((object) => (
                                            <div key={object.id}>
                                              <div className="emp-main">
                                                <div>
                                                  <div className="left-refer-ncbox">
                                                    <div className="left-refer">
                                                      <input
                                                        type="text"
                                                        value={object.input1}
                                                        className="left-refer-input"
                                                        placeholder="Referent's Full Name"
                                                        onChange={(e) =>
                                                          handleInputrefer(
                                                            e,
                                                            object.id,
                                                            "input1"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                    <div className="left-refer">
                                                      <input
                                                        type="text"
                                                        value={object.input2}
                                                        className="left-refer-input"
                                                        placeholder="Company"
                                                        onChange={(e) =>
                                                          handleInputrefer(
                                                            e,
                                                            object.id,
                                                            "input2"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="left-refer-ncbox">
                                                    <div className="left-refer">
                                                      <input
                                                        type="tel"
                                                        value={object.input3}
                                                        className="left-refer-input"
                                                        placeholder="Phone"
                                                        onChange={(e) =>
                                                          handleInputrefer(
                                                            e,
                                                            object.id,
                                                            "input3"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                    <div className="left-refer">
                                                      <input
                                                        type="mail"
                                                        value={object.input4}
                                                        className="left-refer-input"
                                                        placeholder="Email"
                                                        onChange={(e) =>
                                                          handleInputrefer(
                                                            e,
                                                            object.id,
                                                            "input4"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    deleterefer(object.id)
                                                  }
                                                  className="btn btn-primary left-edu-btn"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createrefer}
                                            className="more-custom-section-btn"
                                          >
                                            {" "}
                                            + Add one more reference
                                          </button>
                                        </div>

                                        <button
                                          onClick={delete3}
                                          className="btn btn-primary custom_delete"
                                        >
                                          Delete reference
                                        </button>
                                      </div>
                                    ) : (
                                      <span></span>
                                    )}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  </DragDropContext>

                  <div className="add-section-container">
                    <h3 className="add-section-head">Add Section</h3>
                    <div className="add-section-box">
                      <div className="custom-section">
                        <button className="custom-btn" onClick={customClick}>
                          <img
                            src={image}
                            alt="custom-section"
                            className="custom-pic"
                          />
                          <p>Custom Section</p>
                        </button>
                      </div>

                      <div className="custom-section">
                        <button className="custom-btn" onClick={certi}>
                          <img
                            src={image1}
                            alt="custom-course"
                            className="custom-pic"
                          />
                          <p>Course</p>
                        </button>
                      </div>

                      <div className="custom-section">
                        <button className="custom-btn" onClick={extra}>
                          <img
                            src={image2}
                            alt="custom-extra"
                            className="custom-pic"
                          />
                          <p>Extra curricular activity</p>
                        </button>
                      </div>

                      <div className="custom-section">
                        <button className="custom-btn" onClick={internship}>
                          <img
                            src={image3}
                            alt="custom-internship"
                            className="custom-pic"
                          />
                          <p>Internships</p>
                        </button>
                      </div>

                      <div className="custom-section">
                        <button className="custom-btn" onClick={hobbieClick}>
                          <img
                            src={image4}
                            alt="custom-hobbies"
                            className="custom-pic"
                          />
                          <p>Hobbies</p>
                        </button>
                      </div>

                      <div className="custom-section">
                        <button className="custom-btn" onClick={langClick}>
                          <img
                            src={image5}
                            alt="custom-languages"
                            className="custom-pic"
                          />
                          <p>Languages</p>
                        </button>
                      </div>

                      <div className="custom-section">
                        <button className="custom-btn" onClick={referClick}>
                          <img
                            src={image6}
                            alt="custom-references"
                            className="custom-pic"
                          />
                          <p>Referrances</p>
                        </button>
                      </div>
                    </div>
                  </div>
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
                // margin="2cm"
                ref={pdfExportComponent}
                // keepTogether="p"
                margin={{ top: 20, left: 10, right: 10, bottom: 10 }}
              >
                <div className="container">
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
                      <ul>
                        <li>
                          <div className="resume-name">
                            <h6 className="fname">{firstName}</h6>
                            <h6>{lastName}</h6>
                          </div>
                        </li>
                        <li>
                          <p className="right-title">{jobTitle}</p>
                        </li>
                      </ul>
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
                      <h6>Contact</h6>
                      <p>{phone}</p>
                      <h6>Email</h6>
                      <p>{email}</p>
                      <div className="right-skill-box">
                        <h6>Skills</h6>
                        {skill.map((skillData, index) => (
                          <li key={index}>
                            {skillData.input1} - Level {skillData.input2}
                          </li>
                        ))}
                      </div>
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
                      <div>
                        <h6>Social links</h6>
                        {website.map((webData, index) => (
                          <p key={index}>{webData.input1}</p>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Custom section</h6>
                        {cust.map((cuData, index) => (
                          <div key={index} className="right-emp-box">
                            <p className="right-emp-role">{cuData.input1}</p>
                            <div className="right-emp-city">
                              <p>{cuData.input2}</p>
                              <p>{cuData.input5}</p>
                            </div>
                            <div className="right-emp-date">
                              <p>
                                {customStartDate
                                  ? `${customStartDate.getDate()}/${
                                      customStartDate.getMonth() + 1
                                    }/${customStartDate.getFullYear()}`
                                  : ""}
                              </p>
                              <span>To</span>
                              <p>
                                {customEndDate
                                  ? `${customEndDate.getDate()}/${
                                      customEndDate.getMonth() + 1
                                    }/${customEndDate.getFullYear()}`
                                  : ""}
                              </p>
                            </div>

                            <p className="custom-para">
                              <RenderedContent content={custom_summary} />
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Course </h6>
                        {course.map((coData, index) => (
                          <div key={index} className="right-emp-box">
                            <p className="right-emp-role">{coData.input1}</p>
                            <div className="right-emp-city">
                              <p>{coData.input2}</p>
                              <p>{coData.input5}</p>
                            </div>
                            <div className="right-emp-date">
                              <p>
                                {courseStartDate
                                  ? `${courseStartDate.getDate()}/${
                                      courseStartDate.getMonth() + 1
                                    }/${courseStartDate.getFullYear()}`
                                  : ""}
                              </p>
                              <span>To</span>
                              <p>
                                {courseEndDate
                                  ? `${courseEndDate.getDate()}/${
                                      courseEndDate.getMonth() + 1
                                    }/${courseEndDate.getFullYear()}`
                                  : ""}
                              </p>
                            </div>

                            <p className="custom-para">
                              <RenderedContent content={custom_summary} />
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Languages</h6>
                        {language.map((langData, index) => (
                          <li key={index}>
                            {langData.input1} - Level {langData.input2}
                          </li>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Hobbies</h6>
                        {hobb.map((hobData, index) => (
                          <li key={index}>{hobData.input1}</li>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Reference</h6>
                        {refer.map((refData, index) => (
                          <div>
                            <li key={index}>{refData.input1}</li>
                            <li key={index}>{refData.input2}</li>
                            <li key={index}>{refData.input3}</li>
                            <li key={index}>{refData.input4}</li>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-8 edu-emp">
                      <div className="right-skill-box">
                        <h6>Education history</h6>
                        {education.map((eduData, index) => (
                          <div key={index} className="right-emp-box">
                            <p className="right-emp-role">{eduData.input1}</p>
                            <div className="right-emp-city">
                              <p>{eduData.input2}</p>
                              <p>{eduData.input5}</p>
                            </div>
                            <div className="right-emp-date">
                              <p>
                                {eduStartDate
                                  ? `${eduStartDate.getDate()}/${
                                      eduStartDate.getMonth() + 1
                                    }/${eduStartDate.getFullYear()}`
                                  : ""}
                              </p>
                              <span>To</span>
                              <p>
                                {eduEndDate
                                  ? `${eduEndDate.getDate()}/${
                                      eduEndDate.getMonth() + 1
                                    }/${eduEndDate.getFullYear()}`
                                  : ""}
                              </p>
                            </div>

                            <p>
                              <RenderedContent content={education_summary} />
                            </p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h6>Employment history</h6>
                        {empHistory.map((empData, index) => (
                          <div key={index} className="right-emp-box">
                            <p className="right-emp-role">{empData.input1}</p>
                            <div className="right-emp-city">
                              <p>{empData.input2}</p>
                              <p>{empData.input5}</p>
                            </div>
                            <div className="right-emp-date">
                              <p>
                                {empStartDate
                                  ? `${empStartDate.getDate()}/${
                                      empStartDate.getMonth() + 1
                                    }/${empStartDate.getFullYear()}`
                                  : ""}
                              </p>
                              <span>To</span>
                              <p>
                                {empEndDate
                                  ? `${empEndDate.getDate()}/${
                                      empEndDate.getMonth() + 1
                                    }/${empEndDate.getFullYear()}`
                                  : ""}
                              </p>
                            </div>

                            <p>
                              <RenderedContent content={job_summary} />
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Curricular Activities</h6>
                        {activity.map((actData, index) => (
                          <div key={index} className="right-emp-box">
                            <p className="right-emp-role">{actData.input1}</p>
                            <div className="right-emp-city">
                              <p>{actData.input2}</p>
                              <p>{actData.input5}</p>
                            </div>
                            <div className="right-emp-date">
                              <p>
                                {activityStartDate
                                  ? `${activityStartDate.getDate()}/${
                                      activityStartDate.getMonth() + 1
                                    }/${activityStartDate.getFullYear()}`
                                  : ""}
                              </p>
                              <span>To</span>
                              <p>
                                {activityEndDate
                                  ? `${activityEndDate.getDate()}/${
                                      activityEndDate.getMonth() + 1
                                    }/${activityEndDate.getFullYear()}`
                                  : ""}
                              </p>
                            </div>

                            <p className="activity-para">
                              <RenderedContent content={activity_summary} />
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="right-skill-box">
                        <h6>Internships</h6>
                        {intern.map((intData, index) => (
                          <div key={index} className="right-emp-box">
                            <p className="right-emp-role">{intData.input1}</p>
                            <div className="right-emp-city">
                              <p>{intData.input2}</p>
                              <p>{intData.input5}</p>
                            </div>
                            <div className="right-emp-date">
                              <p>
                                {internStartDate
                                  ? `${internStartDate.getDate()}/${
                                      internStartDate.getMonth() + 1
                                    }/${internStartDate.getFullYear()}`
                                  : ""}
                              </p>
                              <span>To</span>
                              <p>
                                {internEndDate
                                  ? `${internEndDate.getDate()}/${
                                      internEndDate.getMonth() + 1
                                    }/${internEndDate.getFullYear()}`
                                  : ""}
                              </p>
                            </div>

                            <p className="activity-para">
                              <RenderedContent content={intern_summary} />
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

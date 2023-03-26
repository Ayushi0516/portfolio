// import  "./Styles/Project.css"
import "./style/Project.scss";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa";
import {
  SiRedux,
  SiCss3,
  SiJavascript,
  SiChakraui,
  SiNetlify,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import himalayacover from "./assests/himalayacover.png";
import pluralsightcover from "./assests/pluralsightcover.png";
import orbitzcover from "./assests/orbitzcover.png";
import foodmartcover from "./assests/foodmartcover.png";
import todocover from "./assests/todocover.png";
import weathercover from "./assests/weathercover.png";
const Project = () => {
  return (
    <div className="project">
      <p className="project_heading">PROJECTS</p>
      <div className="project_box">
        <div className="project_details">
          <img src={himalayacover} alt="" />
          <h4>HimalayaUSA</h4>
          <p className="project_description">
            Himalaya offers a wide range of clinically-studied herbal
            supplements, toothpaste and personal care products.It is trusted for
            head to heel range of herbal products.Shop our products online, see
            product prices
          </p>
          <p className="tech_stack">Tech Stack</p>
          <p className="icon">
            <FaReact color="brown" size="30px" />{" "}
            <SiRedux color="brown" size="30px" />{" "}
            <SiJavascript color="brown" size="30px" />{" "}
            <SiChakraui color="brown" size="30px" />
          </p>
          <a href="https://github.com/a11yus/HimalayaUSA" target="_blank">
            <button>Github</button>
          </a>
          <a href="https://himalayacs8853.netlify.app" target="_blank">
            <button>Live Link</button>
          </a>
        </div>
        <div className="project_details">
          <img src={foodmartcover} alt="" />
          <h4>Food-Mart</h4>
          <p className="project_description">
            Food-Mart is an e-commerce food web application that allows you to
            food online. It has a variety of categories, just visit the food
            listing page and you will see all the food available, apply sorting
            as per your need and in just a few clicks you can order food from
            the website.
          </p>
          <p className="tech_stack">Tech Stack</p>
          <p className="icon">
            <FaHtml5 size="33px" color="brown" />{" "}
            <SiCss3 color="brown" size="30px" />{" "}
            <SiJavascript color="brown" size="30px" />{" "}
            <BsBootstrapFill color="brown" size="32px" />{" "}
            <SiNetlify color="brown" size="30px" />
          </p>
          <a href="https://github.com/Ayushi0516/Food-Mart" target="_blank">
            <button>Github</button>
          </a>
          <a href="https://foodmart-site.netlify.app/" target="_blank">
            <button>Live Link</button>
          </a>
        </div>

        <div className="project_details">
          <img src={pluralsightcover} alt="" />
          <h4>Pluralsight</h4>
          <p className="project_description">
            Pluralsight is an American privately held online education company
            that offers a variety of video training courses for software
            developers, and creative professionals through its website.
          </p>
          <p className="tech_stack">Tech Stack</p>
          <p className="icon">
            <FaHtml5 size="33px" color="brown" />{" "}
            <SiCss3 color="brown" size="30px" />{" "}
            <SiJavascript color="brown" size="30px" />{" "}
            <SiNetlify color="brown" size="30px" />
          </p>
          <a
            href="https://github.com/KapilKumar7/pluralsightclone"
            target="_blank"
          >
            <button>Github</button>
          </a>
          <a
            href="https://pluralsiteclonechillpill.netlify.app/"
            target="_blank"
          >
            <button>Live Link</button>
          </a>
        </div>


        <div className="project_details">
          <img src={weathercover} alt="" />
          <h4>weather App</h4>
          <p className="project_description">
            This project is about building a web application to show a weather
            forecast using weather API from external services Open weather map.
            Here you will be able to search for a specific location in the world
            and  will display all
            the important weather details.
          </p>
          <p className="tech_stack">Tech Stack</p>
          <p className="icon">
            <FaHtml5 size="33px" color="brown" />{" "}
            <SiJavascript color="brown" size="30px" />{" "}
            <FaReact color="brown" size="30px" />{" "}
            <SiRedux color="brown" size="30px" />{" "}
            <SiChakraui color="brown" size="30px" />
          </p>
          <a href="https://github.com/Ayushi0516/Weather-App" target="_blank">
            <button>Github</button>
          </a>
          <a href="https://sparkly-cactus-3cd1a2.netlify.app/" target="_blank">
            <button>Live Link</button>
          </a>
        </div>

        <div className="project_details">
          <img src={todocover} alt="" />
          <h4>Todo App</h4>
          <p className="project_description">
            Create to do lists, reminders, and notes for any purpose. Todo App
            with React, which teaches the basic principles of CRUD (Create,
            Read, Update and Delete)
          </p>
          <p className="tech_stack">Tech Stack</p>
          <p className="icon">
            <FaHtml5 size="33px" color="brown" />{" "}
            <SiCss3 color="brown" size="30px" />{" "}
            <SiJavascript color="brown" size="30px" />{" "}
            <FaReact color="brown" size="30px" />{" "}
            <BsBootstrapFill color="brown" size="32px" />{" "}
            <SiNetlify color="brown" size="30px" />
          </p>
          <a
            href="https://github.com/Ayushi0516/React-Todo-app"
            target="_blank"
          >
            <button>Github</button>
          </a>
          <a href="https://react-todoapp-app.netlify.app/" target="_blank">
            <button>Live Link</button>
          </a>
        </div>

        <div className="project_details">
          <img src={orbitzcover} alt="" />
          <h4>Orbitz</h4>
          <p className="project_description">
            Orbitz.com is a travel fare aggregator website and travel metasearch
            engine. The website is owned by Orbitz Worldwide, Inc., a subsidiary
            of Expedia Group. All Fares in One Place.
          </p>
          <p className="tech_stack">Tech Stack</p>
          <p className="icon">
            <FaHtml5 size="33px" color="brown" />{" "}
            <SiCss3 color="brown" size="30px" />{" "}
            <SiJavascript color="brown" size="30px" />{" "}
            <SiNetlify color="brown" size="30px" />
          </p>
          <a href="https://github.com/jitesh-95/Orbitz" target="_blank">
            <button>Github</button>
          </a>
          <a href="http://our-orbitz-clone.netlify.app" target="_blank">
            <button>Live Link</button>
          </a>
        </div>

       

        
      </div>

      {/* closing div */}
    </div>
  );
};
export default Project;

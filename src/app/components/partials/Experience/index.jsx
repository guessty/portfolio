import React, { PureComponent } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Experience extends PureComponent {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className=""
          date="October 2018 - Present Day"
          iconStyle={{ background: '#1a202c', color: '#edf2f7' }}
        >
          <h3 className="text-xl semi-bold">Software Developer</h3>
          <h4 className="italic">Rush Partners Ltd</h4>
          <p>
            Rush Partners is a company operating in the online gambling sector who offer sports betting, fantasy and casino type games across multiple brands (www.rushpartners.co.uk)
          </p>
          <p>
            I worked as a member of the Brands team who were responsible for developing an in-house build system and component library to be used to seed future brands. We were also responsible for developing a new version of the Norskespill brand (www.norskespill.com).
          </p>
          <p>
            (NodeJS, ES6/7, NextJS, React, NPM, TailwindCSS, SASS(BEM), Docker, Git, Atlassian JIRA)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=""
          date="April 2018 - May 2018"
          iconStyle={{ background: '#1a202c', color: '#edf2f7' }}
        >
          <h3 className="text-xl semi-bold">Freelance Front End Developer</h3>
          <h4 className="italic">Brainnwave Technologies Ltd</h4>
          <p>
            Brainnwave is a Business Intelligent Platform offering solutions to help make sense of business data  (www.brainnwave.com).
          </p>
          <p>
            I worked as part of a team and assisted with the development of a B2B solution for a client. Over the short period I was there I was able to introduce many new practices to improve code quality and efficiency.
          </p>
          <p>
            (NodeJS, ES6/7, React, Redux, Yarn, Webpack, SASS(BEM), D3, MapBoxGL, Docker, Git)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=""
          date="January 2018 - March 2018"
          iconStyle={{ background: '#1a202c', color: '#edf2f7' }}
        >
          <h3 className="text-xl semi-bold">Software Engineer</h3>
          <h4 className="italic">Infuse Group</h4>
          <p>
            I contributed to the development and launch of candidate management software for the recruitment market (www.pinpointhq.com).
          </p>
          <p>
            (Ruby on Rails, CoffeeScript, React, JQuery, SASS(BEM), Git, GitFlow) 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=""
          date="October 2017 - December 2017"
          iconStyle={{ background: '#1a202c', color: '#edf2f7' }}
        >
          <h3 className="text-xl semi-bold">Freelance Full Stack Developer</h3>
          <h4 className="italic">HelpForHire</h4>
          <p>
            I contributed to the development of their MVP trade and service hiring platform. Unfortunately the business lost funding but features of the platform included: Serverless architecture, Isomorphic rendering, OAuth/JWT authentication, GraphQL, and a Custom rating system.
          </p>
          <p>
            (Node.js, Yarn, Webpack, ES6, React, Redux, Google Firebase (Firestore, Hosting and Cloud Functions), Stylus(BEM), CSS3, HTML5, Git)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=""
          date="May 2016 - June 2017"
          iconStyle={{ background: '#1a202c', color: '#edf2f7' }}
        >
          <h3 className="text-xl semi-bold">Lead Front End Developer</h3>
          <h4 className="italic">Brainnwave Technologies Ltd</h4>
          <p>
            Before Brainnwave became a Business Intelligence Platform, they were a start up creating a marketplace for Data and Satellite Imagery. I joined Brainnwave at the very start and led a team of 5 in the design and the development of the beta marketplace.
          </p>
          <p>
            (Node.js, NPM, Webpack, ES6, React/Redux, MongoDB, Docker, SASS, CSS3, HTML5, Photoshop/Illustrator, Atlassian JIRA, BitBucket, Git)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=""
          date="May 2014 - May 2016"
          iconStyle={{ background: '#1a202c', color: '#edf2f7' }}
        >
          <h3 className="text-xl semi-bold">Support and Development Engineer</h3>
          <h4 className="italic">Apervita Inc.</h4>
          <p>
            Apervita is Chicago based company, which specialises in Healthcare Analytics and Data (www.apervita.com).
          </p>
          <p>
            I worked in collaboration with the front end team, to produce many end to end features within the platform which include: user authentication and permissions; enterprise administration; data visualisation; and dashboards.
          </p>
          <p>
            (Backbone.js, jQuery, Python, Django, MongoDB, SASS, CSS3, HTML5, Atlassian JIRA, BitBucket) 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

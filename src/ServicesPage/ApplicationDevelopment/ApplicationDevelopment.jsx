import React from "react";
import Footer from "../../Footer/Footer";
import "./ApplicationDevelopment.css";

function ApplicationDevelopment() {
  return (
    <>
      <section className="application-development">
        <h1>Creative Solutions For Your Web Design Needs</h1>
        <p>
          At <b>Kkreative</b>, Our team of experienced app developers is here to
          guide you through every step of the process, from brainstorming ideas
          to launching your app in the app store. We understand that creating an
          app can be a daunting task, but with our expertise, we can help make
          the process smoother and less stressful.
        </p>
        <p>
          We specialize in developing apps for both iOS and Android platforms.
          Our team is well-versed in the latest technology and trends, ensuring
          that your app will be up-to-date and user-friendly. We also offer
          custom app development, ensuring that your app is tailored to your
          specific needs and requirements.
        </p>
        <p>
          But our service doesn't stop there. We offer ongoing support and
          maintenance to ensure that your app is running smoothly and
          efficiently. We also offer marketing services to help promote your app
          and increase visibility in the app store.
        </p>
      </section>
      <section className="application-development-services">
        <h2>ENTERPRISE CONTENT MANAGEMENT</h2>
        <p>
          Many enterprises face the challenge of trying to manage the rapid
          growth of their unstructured data. This can include emails, images,
          office documents, web content, instant messages and video. It is
          estimated that as much as 80 per cent of enterprise information is
          unstructured or information not stored in a relational database.
        </p>
        <p>
          kkreative's Enterprise Content Management services enables clients to
          develop a strategy that effectively captures, manages, delivers and
          stores content wherever and whenever it is needed throughout the
          enterprise.
        </p>
        <p>
          Our approach makes use of a strategic architectural view of the
          client's enterprise and makes use of their current investments in
          technology and tools. We build a framework for control and management
          that makes sense for the client and will help to involve the ECM
          environment.
        </p>
        <ul className="services-list">
          <li>
            <h4>Application Development</h4>
            <p>
              kkreative application development and maintenance services power
              your business to perform effectively in today's competitive
            </p>
          </li>
          <li>
            <h4>Cloud Computing & Integration</h4>
            <p>
              One of the most exciting possibilities for designing and managing
              technology is Cloud Computing which provides
            </p>
          </li>
          <li>
            <h4>CUSTOM SOFTWARE DEVELOPMENT</h4>
            <p>
              kkreative has eighteen years of experience in creating and
              managing software applications for various clients...
            </p>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default ApplicationDevelopment;

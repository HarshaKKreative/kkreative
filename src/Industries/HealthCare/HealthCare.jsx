import React from "react";
import Footer from "../../Footer/Footer";
import HEALTH from "../../assets/images/health-care.jpg";
import "./HealthCare.css";

function HealthCare() {
  return (
    <>
      {" "}
      <section className="healthcare">
        <div>
          <h1>Healthcare</h1>
          <p>
            Kkreative's experience in the Healthcare industry focuses on the
            challenges healthcare organizations face today. We offer a unique
            combination of deep Healthcare domain expertise and experience with
            Microsoft technology stack. We have consultants with years of
            experience in EHR systems such as EPIC. Our consultants have proven
            skills in .Net development, SQL Server, Windows Server, System
            Center and SharePoint technologies.
          </p>
          <div className="healthcare__image">
            <img src={HEALTH} alt="health" />
          </div>
          <p>
            At Kkreative we understand that the evolution of healthcare
            technology is centered around different solutions that solved
            specific domain problems; the previous generation of applications
            that were created were about domain specific forms that automated
            highly specific business processes.
          </p>
          <p>
            Ambulatory care had one set of forms and thus selected a specific
            system; payer solutions had another set of forms, and thus selected
            a different system. As the global leaders in EMR technologies
            started e merging and large-scale consolidation started taking place
            in healthcare, this problem was reduced, but not solved.
          </p>
          <p>
            All the data collected that provides a global, 360 view of the
            organization is encompassed in as many is 20-40 disparate systems.
            Now, as organizations look to use that data spread across a range of
            disparate systems, with ranges of table structures and technology
            stacks, they are running into enormous challenges.
          </p>
          <p>
            Changes in the next generation of technology are definitely helping
            to move this along at a rapid pace. Instead of connecting to each
            specific application to gather data, technological advancements such
            as MVC architecture, SOA and REST APIs, and in-memory processing has
            taken problems such as batch processing from what used to take hours
            per gigabyte of data to seconds. These solutions have in turn
            allowed new services to use that collected data in services that
            provide deep analytics, intelligence, and recommendations for the
            client.
          </p>
          <p>
            The new horizon in healthcare is creating a two way bridge. How to
            get the data from client facing EMR systems back into the various
            systems that need to consume that data. Once again, as that data now
            sits in the View in an MVC based system, it is now possible to
            create batches in near real time speeds and then organize for
            consumption by all the various systems that need them. Thus, because
            the user experience feels real time, instead of needing read-write
            processes between databases, the same result may be accomplished by
            having read-batch-consume processes that occur in near real time.
            This incredible shift in architecture now allows the disparate
            systems to become even more focused on the functional domain
            challenges, i.e., the specific need of each specific user, and thus
            actually lead to more specific solutions based on user base
            segmentation.
          </p>
          <p>
            No other industry relies on specialized user bases more than the
            healthcare industry. And thus, technology experts have to have
            functional domain experience in the various specializations of
            healthcare systems that runs very deep. At Kkreative, that is how we
            differentiate ourselves.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HealthCare;

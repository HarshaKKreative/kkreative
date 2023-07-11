import React from "react";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaLocationDot, FaMobileScreenButton } from "react-icons/fa6";
import { GiPerson } from "react-icons/gi";
import { IoSyncCircle } from "react-icons/io5";
import Footer from "../../Footer/Footer";
import BANKING from "../../assets/images/banking.jpg";
import "./Banking.css";

function Banking() {
  return (
    <>
      <section className="banking">
        <div className="banking__content">
          <h1>Banking And Financial Services Industry</h1>
          <p>
            Kkreative offers exhaustive software development services to the
            banking and financial service industry. We have a well-defined
            strategy in place to deliver scalable software solutions that
            address the security and compliance requirements of this industry.
            We offer technology solutions, which are easy to implement, yet
            robust enough to support rapid growth or expansion of your business.
            We have deep-domain experience in creating secure software solutions
            that address the requirements of the BFSI domain. We offer
            comprehensive software services that can be easily scaled up to
            accommodate all future technology needs of our clients.
          </p>{" "}
          <div className="banking__image">
            <img src={BANKING} alt="banking" />
          </div>
          <p>
            Banking and Financial Services entities have some of the most
            complex software requirements. The challenges facing BFSI include
            global competition, large volumes processing and exchange of secure
            data and on the other hand they also need to be focused on
            increasing complexity of risk and regulatory environments. To
            succeed in this environment, you need secure technology platforms
            that can provide data security, on-demand analytics, cash management
            tools and various other functionalities.
          </p>
          <div className="banking__content-2">
            <h2>
              The key technology trends that are driving the industry are:
            </h2>
            <div className="mobile">
              <FaMobileScreenButton
                size={"5rem"}
                color="var(--color-primary)"
              />
              <div>
                <h4>MOBILE</h4>
                <p>
                  More and more banks are incorporating mobile banking as a
                  regular delivery channel as consumer adoption continues to
                  increase. Large banks are expanding on their mobile strategies
                  to include smart phone capabilities around imaging, payments
                  and location-based services. Adding remote deposit capture,
                  mobile alerts and enhancing mobile app features will be a
                  focus for smaller to mid-sized banks.
                </p>
              </div>
            </div>
            <div className="data-management">
              <BsDatabaseCheck size={"5rem"} color="var(--color-primary)" />
              <div>
                <h4>DATA MANAGEMENT</h4>
                <p>
                  Banks are finding ways to leverage data to create a more
                  interactive customer experience across channels. Financial
                  institutions must become more data-centric to be able to
                  transform their business models and support both new and
                  existing products and services. Data governance and master
                  data management will be fundamental to an organization's
                  success in the years to come. These two technology best
                  practices are intertwined and critical to the success of our
                  next two banking technology trends.
                </p>
              </div>
            </div>
            <div className="customer-experience">
              <GiPerson size={"5rem"} color="var(--color-primary)" />
              <div>
                <h4>CUSTOMER EXPERIENCE</h4>
                <p>
                  This term has taken on a new role in the financial services
                  industry. It has evolved to include various customer touch
                  points to deliver an end-to-end multichannel experience. The
                  mobile banking experience is the foundation for a bank's
                  ”digital persona”. Banks must create seamless interactions and
                  find the proper balance between in-branch and digital customer
                  experiences. Usability and trust in mobile banking services is
                  the key.
                </p>
              </div>
            </div>
            <div className="location-based">
              <FaLocationDot size={"5rem"} color="var(--color-primary)" />
              <div>
                <h4>LOCATION-BASED OFFERS AND LOYALTY PROGRAMS</h4>
                <p>
                  Well-established financial institutions are capturing the
                  attention of consumers using mobile offers. Before jumping on
                  this trend financial institutions need to get smart about
                  their data. From there, they need to understand consumer wants
                  and needs to identify segmentation strategies for the
                  appropriate audience. Financial services companies must
                  provide clear value propositions for mobile offers and
                  marketing tactics for implementing loyalty programs. Likewise,
                  banks need to be sensitive of security and customer responses
                  by analyzing data in real-time to fine tune programs and
                  create a meaningful customer experience.
                </p>
              </div>
            </div>
            <div className="soa-enable">
              <IoSyncCircle size={"5rem"} color="var(--color-primary)" />
              <div>
                <h4>SOA ENABLED TRANSFORMATION</h4>
                <p>
                  Collaboration demands integration, but when it comes to a
                  bank's legacy systems it has led to fragmented, inefficient
                  and redundant processes. The financial services industry sees
                  innovation as the path for sustainable growth. But to be able
                  to capitalize on innovation banks have to become more
                  efficient, enable growth and manage risk. SOA allows banks to
                  extend and improve integration among existing applications and
                  drive innovation for payment strategies, big data
                  capabilities, core banking processes, mobile and more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="banking__kkreative">
          <h3>
            Kkreative with its unique solutions and services enable banking
            industry to adopt the key trends that are imperative to securing
            successful future:
          </h3>
          <p>
            Kkreative's Smart Mobile Platform provides a robust mobile strategy
            and superior customer user experience.
          </p>
          <p>
            Kkreative's OneSpot Platform makes Fusion Middleware a hot pluggable
            architecture to improve integration among existing applications and
            drive innovation for payment strategies, big data capabilities, core
            banking processes, mobile and more.
          </p>
          <p>
            Kkreative's Social Analytics platform presents a tool for banking
            analysts to research market trends, get timely market news, and
            better analyze the exposures and strengths of the companies the bank
            merges with, finances or buys.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Banking;

import React from 'react'
import "./ConsumerGoods.css"
import CONSUMER_GOODS from "../../assets/images/consumer-goods.png";
import Footer from "../../Footer/Footer";
function ConsumerGoods() {
  return (
    <>
    <section className="consumer-goods">
      <div className='consumer-goods-header'>
        <div>
          <img src={CONSUMER_GOODS} alt="consumer-goods" />
        </div>
        <div>
          <h4>
            Kkreative with its unique solutions and services has what it takes
            to provide the consumer goods companies the necessary competitive
            advantage
          </h4>
          <p>
            Kkreative solution enables OEM Parts Supply Chain Management,
            Marketing & Promotions and Brand Protection.
          </p>
          <p>
            Kkreative's Web Commerce engine provides the ability to manage the
            direct online sales channel across all the new age devices.
          </p>
          <p>
            Kkreative's Social Analytics platform presents a tool for Consumer
            Goods companies to research fashion trends, get consumer feedback
            from social talk and buying trends.
          </p>
          <p>
            Kkreative's Oracle Application management service ensures Consumer
            Goods companies get the best of their ERP systems, using Big data
            Analytics
          </p>
        </div>
      </div>

      <h1>Consumer Goods</h1>
      <p>
        In 2012 and beyond innovation is going to drive loyalty and emphasize
        value in the consumer goods industry. There will be further fusion
        between online and physical stores, and brands becoming increasingly
        'humanized'. Stores will have to work harder to meet the needs of
        shoppers, and digital advancements will drive further integration of
        different retail channels. Retail consolidation, along with the rise of
        such new channels as mass merchants, discounters, and warehouse clubs,
        has complicated supplier partnerships and the role of the sales force.
      </p>
      <h2>The key technology trends that are driving the industry are:</h2>
      <h4>TRADE PROMOTION MANAGEMENT</h4>
      <p>
        Trade promotion is intended to stimulate demand and help pull product
        through the distribution channel to reach consumers more immediately.
        Because of the proliferation of brands in the consumer market, there is
        fierce competition for shelf space. In consumer goods, trade promotion
        cost is often cited as the second largest line item on company profit
        and loss statements. It is important for the companies to integrate
        trade promotion into the company planning process. Profitably optimizing
        trade promotion, media investment, consumer promotion and social media
        presents many new opportunities. Providing a targeted, personal
        experience to the consumer can be a challenge, but can yield great
        success.
      </p>
      <h4>PRODUCT LIFECYCLE MANAGEMENT</h4>
      <p>
        Consumers are looking at in-store and private label brands more
        favorably, forcing companies to innovate. Creating differentiation to
        maintain and grow brand loyalty is paramount to succeed. In an effort to
        improve innovation and achieve competitive advantage, companies are
        rapidly adopting product lifecycle management (PLM) solutions. PLM helps
        companies improve the success rate of new products, shorten
        time-to-market, ensure compliance, and reduce cost.
      </p>
      <h4>CROSS-CHANNEL APPROACH</h4>
      <p>
        Today's consumers shop across channels, including retail stores,
        websites and catalogs. Social media and loyalty programs are
        increasingly affecting the brand experience. With the advent of social
        media, consumer goods manufacturers are increasingly developing
        integrated cross-channel strategies to ensure that consumers are engaged
        by the proper brand experience at every touch point. With advances in
        social networking, digital marketing and mobility fundamentally changing
        the way consumers behave, the door has opened to building a more direct
        relationship with customers.
      </p>
      <h4>BIG DATA</h4>
      <p>
        The amount of data in the consumer goods industry has been exploding in
        recent years, with the advent of social media and an increase in
        multimedia. Companies will have to harness an increasing volume of
        detailed information with big data appliances that can collect and
        analyze large data sets. Many consumer goods companies are drowning in
        data and starving for insights. Unlocking key patterns and trends in
        large volumes of structured and unstructured data require analytical
        capabilities to gain a deeper understanding of customers and products.
      </p>
    </section>
    <Footer />
    </>
  );
}
export default ConsumerGoods




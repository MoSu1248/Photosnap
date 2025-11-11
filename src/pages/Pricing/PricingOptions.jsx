import React, { useState } from "react";
import "./PricingOptions.scss";
import Button_1 from "../../components/Buttons/Button_1";

export default function PricingOptions() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [toggled, setToggled] = useState(false);

  const MonthlyPricing = [
    {
      tier: "Basic",
      feature:
        "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      price: "$19.00",
    },
    {
      tier: "Pro",
      feature:
        "More advanced features available. Recommended for photography veterans and professionals.",
      price: "$39.00",
    },
    {
      tier: "Business",
      feature:
        "Additional features available such as more detailed metrics. Recommended for business owners.",
      price: "$99.00",
    },
  ];

  const YearlyPricing = [
    {
      tier: "Basic",
      feature:
        "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      price: "$190.00",
    },
    {
      tier: "Pro",
      feature:
        "More advanced features available. Recommended for photography veterans and professionals.",
      price: "$390.00",
    },
    {
      tier: "Business",
      feature:
        "Additional features available such as more detailed metrics. Recommended for business owners.",
      price: "$990.00",
    },
  ];

  const activePricing =
    !toggled ? MonthlyPricing : YearlyPricing;

  return (
    <section className="">
      <div className="toggle-container">
        <span className={`${!toggled ? "active" : ""} monthly-header`}>Monthly</span>
        <button
          className={`toggle-btn ${toggled ? "toggled" : ""}`}
          onClick={() => setToggled(!toggled)}
        >
          <div className="thumb"></div>
        </button>
        <span className={`${toggled ? "active" : ""}`}>Yearly</span>
      </div>
      <div className="pricingOptions">
        {billingCycle && (
          <>
            {activePricing.map((i) => (
              <div className="pricingOptions__card-container">
                <div className="pricingOptions__text-container">
                  <h2 className="pricingOptions__tier">{i.tier}</h2>
                  <p className="pricingOptions__feature">{i.feature}</p>
                </div>
                <div className="pricingOptions__bill-container">
                  <h3 className="pricingOptions__price">{i.price}</h3>
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </div>
                <Button_1 text={"pick plan"} />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

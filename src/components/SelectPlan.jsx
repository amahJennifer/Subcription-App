import React,{useState,useEffect} from "react";
import PlanCard from "./PlanCard";
import axios from "axios";

export const loadData = async () => {
  return await axios
    .get(
      `https://my-json-server.typicode.com/amahjennifer/demo/transactionData`
    )
    .then((res) => res.data)
    .catch(function (error) {
      console.log(error);
    });
};



function SelectPlan() {
  const [plan, setPlan] = useState([]);
  const [data, setData] = useState([]);

  	useEffect(() => {
      loadData().then((plan) => setData(plan));
    }, []);

  return (
    <div className="py-5">
      <div className="row mb-3">
        <h1
          className="animated bounce font-weight-bold mx-auto mt-5 pb-3 border-bottom border-dark"
          style={{ fontFamily: "Metropolis Extra Bold" }}
        >
          Select a plan
        </h1>
      </div>

      <div className="d-flex flex-wrap flex-lg-nowrap h-100 justify-content-center">
        <PlanCard
          name="Bronze"
          amount="NGN50,000"
          disabled={false}
          features={[
            "Speedy profile activation",
            "5 introductions to investors",
            "One month validity",
            "Access to startup community",
            "Startup consulting",
            "Access to startup-to-scaleup dynamic podcast",
          ]}
          className="animated fadeInLeft p-4 rounded bg-white shadow-lg shadow-lg-right mt-lg-5 mb-5 plan"
          style={{ width: "319px", maxWidth: "364px", height: "440px" }}
          getPlan={() => {
            const selectedPlan = data.filter(
              (planType) => planType.subcriptionPlan === "Bronze"
            );
            setPlan(selectedPlan);
          }}
        />

        <div className="d-block d-lg-none d-xl-none w-100"></div>
        <PlanCard
          name="Silver"
          amount="NGN 80,000"
          recommended={true}
          disabled={false}
          features={[
            "Speedy profile activation",
            "15 introductions to investors",
            "2 minute elevator pitch video",
            "Professionally crafted business plan",
            "Access to startup community ",
            "Discount on high-end networking events",
            "Access to startup-to-scaleup dynamic podcast",
            "Startup consulting",
          ]}
          className="animated fadeIn p-5 bg-white rounded shadow-lg mt-lg-5 mb-5 plan"
          style={{
            width: "320px",
            maxWidth: "364px",
            height: "680px",
            zIndex: "2",
          }}
          getPlan={() => {
            const selectedPlan = data.filter(
              (planType) => planType.subcriptionPlan === "Silver"
            );
            setPlan(selectedPlan);
          }}
        />

        <div className="d-block d-lg-none d-xl-none w-100"></div>
        <PlanCard
          name="Gold"
          amount="NGN 100,000"
          disabled={false}
          features={[
            "Speedy profile activation",
            "30 introductions to investors",
            "2 minute elevator pitch video",
            "Professionally crafted business plan",
            "Access to startup community",
            "Full on access to high-end networking events and event speakers",
            "Enterprise support",
            "Premium badge to scheduled workshop",
            "Access to startup-to-scaleup dynamic podcast",
            "Mini valuation",
            "Startup Consulting",
          ]}
          className=" animated fadeInRight p-4 bg-white rounded shadow-lg shadow-lg-right mt-lg-5 mb-5 plan"
          style={{
            width: "319px",
            maxWidth: "364px",
            height: "680px",
          }}
          getPlan={() => {
            const selectedPlan = data.filter(
              (planType) => planType.subcriptionPlan === "Gold"
            );
            setPlan(selectedPlan);
          }}
          headerFontSize="h2a"
        />
      </div>
      {/* Success Modal */}

      <div
        class="modal fade"
        id="successModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Subcription Successful
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {plan.map((planDetails) => (
                <ul>
                  <li key={planDetails.transactionId}>
                    <p>Transaction Id:</p> {planDetails.transactionId}
                  </li>
                  <li key={planDetails.transactionId}>
                    <p>Subcription Plan:</p> {planDetails.subcriptionPlan}
                  </li>
                  <li key={planDetails.transactionId}>
                    <p>Purchase Date:</p> {planDetails.purchaseDate}
                  </li>
                  <li key={planDetails.transactionId}>
                    <p>Expiry Date :</p> {planDetails.expiryDate}
                  </li>
                </ul>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;

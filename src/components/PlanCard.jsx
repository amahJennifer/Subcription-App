import React from "react";
import randomstring from "randomstring";

function PlanCard (props) {
	return (
    <div
      className={
        props.className
          ? props.className
          : "bg-white shadow border p-4 plan-card"
      }
      style={props.style ? props.style : {}}
    >
      <div className="h7y text-plan d-flex flex-column align-items-center h-100">
        <div
          className={
            !props.recommended
              ? "text-center border-bottom mb-3 pb-3 min-w-60"
              : "text-center border-bottom mb-5 pb-3 min-w-60"
          }
        >
          <div
            className={
              props.headerFontSize
                ? "text-plan " + props.headerFontSize
                : "text-plan h7"
            }
          >
            {props.name && props.name.split(/(?=[A-Z])/)[0]} Plan
          </div>
          <div className="font-weight-bold text-primary">{props.amount}</div>
          {props.recommended && (
            <small className="text-sm-1 text-plan">(Most populars)</small>
          )}
        </div>

        {props.features.map((feature) => (
          <div
            className="w-100 min-w-rem-13 d-flex mb-n2"
            key={randomstring.generate()}
          >
            <i className="fas fa-check-circle text-primary"></i>
            <p className="pl-2">{feature}</p>
          </div>
        ))}

        <span className="w-100 min-w-rem-13">
          {props.plusFeature && props.plusFeature}
        </span>

        {props.selectedPlan === props.name && (
          <div className="text-center py-3">
            <i className="fas fa-check-circle fa-2x text-success"></i>
          </div>
        )}

        <div className="mt-3">
          <button
            type="button"
            className={
              !props.recommended
                ? "btn btn-primary text-center h8a hvr-grow"
                : "btn btn-primary text-center h8a mt-5 button hvr-grow"
            }
            name={props.name}
            data-toggle="modal"
            data-target="#successModal"
            disabled={props.disabled}
            onClick={props.getPlan
            }
            style={{ width: "179px", height: "42px" }}
          >
            {props.actionText ? props.actionText : "Select plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

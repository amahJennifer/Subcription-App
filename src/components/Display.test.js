import React from "react";
import { render, act } from "@testing-library/react";
import axios from "axios";

import Display from "./Display";

jest.mock("axios");

describe("Display Component", () => {
  test("It displays data", async () => {
    const data = [
      {
        subcriptionPlan: "Gold",
        couponCode: "none",
        transactionId: "100030",
        purchaseDate: "2020-05-06",
        expiryDate: "2021-05-06",
      },
    ];

    const response = { data };

    const { debug } = render(<Display />);

    await act(async () => {
      axios.get.mockResolvedValue(response);
    });

    debug();
  });
});

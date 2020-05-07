import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import Fetch from "./components/Fetch";

afterEach(cleanup);

it("fetches and displays data", async () => {
	axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });
	const url = "/greetings";

	const { getByTestId } = render(<Fetch url={url} />);
	expect(getByTestId("loading")).toHaveTextContent("Loading data...");
	const resolvedSpan = await waitFor(() => getByTestId("resolved"));
	expect(resolvedSpan).toHaveTextContent("hello there");

	expect(axiosMock.get).toHaveBeenCalledTimes(1);
	expect(axiosMock.get).toHaveBeenCalledWith(url);
});

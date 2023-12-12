import React from "react";
import { shallow } from "enzyme";
import TopNavbar from "./TopNavbar";

describe("TopNavbar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TopNavbar />);
    expect(wrapper).toMatchSnapshot();
  });
});

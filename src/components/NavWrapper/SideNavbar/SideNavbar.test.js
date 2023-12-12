import React from "react";
import { shallow } from "enzyme";
import SideNavbar from "./SideNavbar";

describe("SideNavbar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SideNavbar />);
    expect(wrapper).toMatchSnapshot();
  });
});

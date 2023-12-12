import React from "react";
import { shallow } from "enzyme";
import NavWrapper from "./NavWrapper";

describe("NavWrapper", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NavWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import ViteDefault from "./viteDefault";

describe("ViteDefault", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ViteDefault />);
    expect(wrapper).toMatchSnapshot();
  });
});

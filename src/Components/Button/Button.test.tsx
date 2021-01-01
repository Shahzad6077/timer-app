import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe('Button Comp', () => {
    const container = shallow(<Button id="testing" />);
    it("should render a <Button />", () => {
        expect(container.find("button").length).toEqual(1);
    });
    it("should have prop id/name/onClick ", () => {
        console.log(container.props())
        expect(container.prop("id")).toEqual("testing");
        expect(container.prop("name")).toHaveValue;
        expect(container.prop("onClick")).toHaveValue;

    });
    it("should have OnClick Function 'id' ", () => {
        expect(container.prop("id")).toHaveValue

    });
});
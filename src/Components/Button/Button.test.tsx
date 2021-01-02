import React, { ReactElement } from "react";
import { mount, MountRendererProps, ReactWrapper, shallow } from "enzyme";
import Button from "./index";

describe('Button Comp', () => {
    const container = shallow(<Button id="testing" name="ali" onClick={(e) => { console.log("Baby why click me? ") }} />);
    let mountedContainer = mount(<Button id="testing" name="ali" onClick={(e) => { console.log("Baby why click me? ") }} />);


    it("should render a <Button />", () => {
        expect(container.find("button").length).toEqual(1);
    });
    it("should have prop id/name ", () => {
        expect(container.prop("id")).toEqual("testing");
        expect(container.contains("ali")).toEqual(true);

    });
    it("should have prop onClick on Button ", () => {
        expect(container.prop("onClick")).toBeTruthy();
    });

    it("show console.log on Click the button. ", () => {
        const spy = jest.spyOn(mountedContainer, 'props');
        mountedContainer.instance().forceUpdate();

        expect(spy).toHaveBeenCalledTimes(0)
        mountedContainer.simulate('click');
        expect(spy).toHaveBeenCalledTimes(1)

    });


});
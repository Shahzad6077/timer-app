import React, { ReactElement } from "react";
import { mount, MountRendererProps, ReactWrapper, shallow } from "enzyme";
import Button from "./index";

describe('Button Comp', () => {
    const mockCallBack = jest.fn();
    const container = shallow(<Button id="testing" name="ali" onClick={mockCallBack} />);
    let mountedContainer: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        mountedContainer = mount(<Button id="testing" name="ali" onClick={mockCallBack} />)
    })
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


        expect(mockCallBack.mock.calls.length).toEqual(0)
        mountedContainer.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1)

    });

    it("Click the button while it's disabled So Call's should be 0. ", () => {
        const spy = jest.fn();
        const comp = mount(<Button id="testing" name="ali" onClick={spy} disabled={true} />)

        expect(spy.mock.calls.length).toEqual(0)
        comp.simulate('click');
        expect(spy.mock.calls.length).toEqual(0)

    });

});
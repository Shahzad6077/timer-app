import React from "react";
import { shallow, ReactWrapper, mount } from "enzyme";
import App from "./App";

describe('App', () => {
  const container = shallow(<App />);
  let mountedContainer: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    mountedContainer = mount(<App />)
  })



  it("should render a <div />", () => {
    const container = shallow(<App />);
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("Invoke the onStartTimer fn. ", () => {

    // const spy = jest.spyOn(mountedContainer.instance(),"props")

    // expect(spy.mock.calls.length).toEqual(0)
    // comp.simulate('click');
    // expect(spy.mock.calls.length).toEqual(0)

  });
});
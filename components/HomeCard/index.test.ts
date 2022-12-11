import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeCard from "./index.vue";
import home from "../../mocks/api/home";

describe("HomeCard.vue", () => {
  it("should render the correct component", () => {
    const wrapper = mount(HomeCard, {
      props: {
        home,
      },
    });

    const component = wrapper.find('[datatest-id="home-card"]');
    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});

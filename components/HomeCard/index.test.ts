import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeCard from "./index.vue";
import home from "~/test/fixtures/home";

describe("HomeCard.vue", () => {
  const wrapper = mount(HomeCard, {
    props: {
      home,
    },
  });

  const component = wrapper.find('[datatest-id="home-card"]');

  it("should render the correct component", () => {
    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});

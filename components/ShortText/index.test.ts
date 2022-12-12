import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ShortText from "./index.vue";
import text from "~/test/fixtures/reviews";

describe("ShortText.vue", () => {
  const wrapper = mount(ShortText, {
    props: {
      text: text.comment,
      target: 150,
    },
  });

  const component = wrapper.find('[datatest-id="short-text"]');

  it("should render the correct component", () => {
    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("should display full text and less text", async () => {
    await wrapper.find('[datatest-id="read-more"]').trigger("click");
    expect(component.text()).toBe(
      `Cute house in a nice neighborhood. Close to downtown and a few blocks from Sanders Beach which was really nice. A few minor notes—the neighbor is an early  riser and started mowing the lawn right next to our bedroom windows at 7:30am. I also thought it was weird that we had to empty the dishwasher and take out all of the garbage before we checked out at 10am. I normally load and run the dishwasher before I leave but was unable to do so since the dishwasher had to be emptied and everything in it’s originally place. It’s minor but since the cleaning fee is more then I paid my maid for deep cleaning I would have thought I could load the dishwasher and run it and wouldn’t have to take the garbage out. Otherwise cute house, good neighborhood, clean, and comfy.  read less`
    );

    await wrapper.find('[datatest-id="read-less"]').trigger("click");

    expect(component.text()).toBe(
      "Cute house in a nice neighborhood. Close to downtown and a few blocks from Sanders Beach which was really nice. A few minor notes—the neighbor is an early...  read more"
    );
  });
});

import { render } from "testing";
import constants from "../data/constants";
import Buttons from "./Buttons";

describe("Test buttons", () => {
  let buttons;
  before(() => {
    buttons = render(<Buttons commentId={1} />);
  });
  test("edit button is there", () => {
    expect(buttons.getByTestId(constants.EDIT + "1").toBeInTheDocument());
  });
  test("delete button is there", () => {
    expect(buttons.getByTestId(constants.DELETE + "1").toBeInTheDocument());
  });
  test("reply button is there", () => {
    expect(buttons.getByTestId(constants.REPLY + "1").toBeInTheDocument());
  });
});

import core from "@actions/core";
import { getJoke } from "./joke.js";

const joke = await getJoke();
core.setOutput("joke", joke);

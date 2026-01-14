import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export let cn = (...input) => twMerge(clsx(...input))
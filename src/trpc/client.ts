import {createTRPCReact} from "@trpc/react-query";
import { Approuter } from ".";

export const trpc = createTRPCReact<Approuter>({});
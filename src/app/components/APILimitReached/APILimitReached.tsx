import { ReactElement } from "react";
import Message from "../Message";

export const APILimitReached = (): ReactElement => {
    return <Message title='API Limit Reached'>
        Please try again later
    </Message>;
}
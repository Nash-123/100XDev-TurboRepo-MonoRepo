import { Admin } from "@repo/ui/admin";
import  { InputBox } from "@repo/ui/admin";

export default function() {
    return <div>
        hi from admin Page
        <Admin />
        Enter your data
        <InputBox />
    </div>
}